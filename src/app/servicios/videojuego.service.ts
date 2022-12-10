import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Videojuego } from '../entidades/videojuego';
import { MensajeService } from './mensaje.service';


@Injectable({ providedIn: 'root' })
export class VideojuegoService {
  
  //URL a la web API
  private videojuegosUrl = 'api/videojuegos';  
  
  //El tipio de datos de la BBDD es de json, aunque sea una BBDD simulada.
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) { }

  /** 
   * Método que se encarga de buscar los videojuegos de la BBDD y mandar
   * un mensaje a través del servicio MensajeService con el resultado de la operación.
   * @returns Observable de los videojuegos de la BBDD en memoria
   */
  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.videojuegosUrl)
      .pipe(
        tap(_ => this.log('Hemos cargado los videojuegos')),
        catchError(this.handleError<Videojuego[]>('getVideojuegos', []))
      );
  }
  /** 
   * Método que se encarga de buscar un videojuego por su ID en la BBDD y mandar
   * un mensaje a través del servicio MensajeService con el resultado de la operación.
   * En este caso lo usaremos para que devuelva undefined en vez de dar eror 404 si 
   * no encuentra el videojuego.
   * @returns Observable del videojuego de la BBDD en memoria o undefined si no lo encuentra
   */
  getVideojuegoNo404<Data>(id: number): Observable<Videojuego> {
    const url = `${this.videojuegosUrl}/?id=${id}`;
    return this.http.get<Videojuego[]>(url)
      .pipe(
        map(videojuegos => videojuegos[0]), // devuelve un  {0|1} elemento del array
        tap(v => {
          const outcome = v ? 'Encontrado' : 'No se ha encontrado';
          this.log(`${outcome} videojuego id=${id}`);
        }),
        catchError(this.handleError<Videojuego>(`getVideojuego id=${id}`))
      );
  }
  /** 
   * Método que se encarga de buscar un videojuego por su ID en la BBDD y mandar
   * un mensaje a través del servicio MensajeService con el resultado de la operación.
   * En este caso devuelve 404 cuando no lo encuentra.
   * @returns Observable del videojuego de la BBDD en memoria o undefined si no lo encuentra
   */
  getVideojuego(id: number): Observable<Videojuego> {
    const url = `${this.videojuegosUrl}/${id}`;
    return this.http.get<Videojuego>(url).pipe(
      tap(_ => this.log(`encontrado videojuego id=${id}`)),
      catchError(this.handleError<Videojuego>(`getVideojuego id=${id}`))
    );
  }


  //////// Metodos para añadir y eliminar un videojuego //////////

  /**A través del método POST, añade  un videojuego nuevo al servidor, desde VideojuegosComponent.
   * Si se ha añadido el videojuego, se envia un mensaje
  * @param videojuego el videojuego que se ha creado con el título insertado por el usuario
  * @returns el 
  */
  addVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.videojuegosUrl, videojuego, this.httpOptions).pipe(
      tap((newVideojuego: Videojuego) => this.log(`Añadido videojuego con id=${newVideojuego.id}`)),
      catchError(this.handleError<Videojuego>('addVideojuego'))
    );
  }

  /**A través del método DELETE, elimmina  un videojuego del servidor desde VideojuegosComponent.
   * Si se ha eliminado el videojuego, se envia un mensaje
  * @param videojuego el videojuego que se ha creado con el título insertado por el usuario
  * @returns el observable de videojuego.
  */
  deleteVideojuego(id: number): Observable<Videojuego> {
    const url = `${this.videojuegosUrl}/${id}`;

    return this.http.delete<Videojuego>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Videojuego borrado con id=${id}`)),
      catchError(this.handleError<Videojuego>('deleteVideojuego'))
    );
  }

  /**
   * A través del método PUT, elimmina un videojuego del servidor desde VideojuegosComponent.
   * @param videojuego el videojuego introducido por el usuario.
   * @returns el observable de tipo <any>
   */
  updateVideojuego(videojuego: Videojuego): Observable<any> {
    return this.http.put(this.videojuegosUrl, videojuego, this.httpOptions).pipe(
      tap(_ => this.log(`Se ha actualizado el videojuego con id=${videojuego.id}`)),
      catchError(this.handleError<any>('updateVideojuego'))
    );
  }

  /**
   * Este método lidia con un error en la peticion HTTPP, para que la aplicación no se rompa si
   * alguna de las peticiones no es satisfactoria.
   *
   * @param operation - nombre de la operación que ha fallado
   * @param result - valor opcional para devolver como el resultado del observable 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: envia el error al la estructura remota de la consola
      console.error(error); // Con esto se lo mandamos a la consola

      // Con esto tranformamos el error en un mensaje para que pueda
      // ser visualizado por el usuario en su interfaz.
      this.log(`${operation} failed: ${error.mensaje}`);

      // Permitimos continuar a la aplicacion devolviendo un resultado vacío.
      return of(result as T);
    };
  }

  /** Mensaje de log de VideojuegoService a través de MensajeService */
  private log(mensaje: string) {
    this.mensajeService.add(`VideojuegoService dice: ${mensaje}`);
  }
}