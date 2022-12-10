import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Videojuego } from '../entidades/videojuego';
import { MensajeService } from './mensaje.service';


@Injectable({ providedIn: 'root' })
export class VideojuegoService {

  private videojuegosUrl = 'api/videojuegos';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) { }

  /** 
   * Método que se encarga de buscar los videojuegos de la BBDD y mandar
   * un mensaje a través del servicio MensajeService con el resultado de la operación.
   * @returns devuelve los videojuegos de la BBDD en memoria
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
   * @returns devuelve el videojuego de la BBDD en memoria o undefined si no lo encuentra
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
   * @returns devuelve el videojuego de la BBDD en memoria o undefined si no lo encuentra
   */
  getVideojuego(id: number): Observable<Videojuego> {
    const url = `${this.videojuegosUrl}/${id}`;
    return this.http.get<Videojuego>(url).pipe(
      tap(_ => this.log(`encontrado videojuego id=${id}`)),
      catchError(this.handleError<Videojuego>(`getVideojuego id=${id}`))
    );
  }


  //////// Metodos para añadir y eliminar un videojuego //////////

 /**A través del método POST, añade  un videojuego nuevo al servidor 
  * Se usa através de videojuegosComponent
  * @param videojuego 
  * @returns 
  */
  addVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.videojuegosUrl, videojuego, this.httpOptions).pipe(
      tap((newVideojuego: Videojuego) => this.log(`Añadido videojuego w/ id=${newVideojuego.id}`)),
      catchError(this.handleError<Videojuego>('addVideojuego'))
    );
  }

  /** DELETE: borrar el videojuego del servidorr */
  deleteVideojuego(id: number): Observable<Videojuego> {
    const url = `${this.videojuegosUrl}/${id}`;

    return this.http.delete<Videojuego>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Videojuego borrado id=${id}`)),
      catchError(this.handleError<Videojuego>('deleteVideojuego'))
    );
  }

  /** PUT: update the hero on the server */
  updateVideojuego(videojuego: Videojuego): Observable<any> {
    return this.http.put(this.videojuegosUrl, videojuego, this.httpOptions).pipe(
      tap(_ => this.log(`Se ha actualizado el videojuego id=${videojuego.id}`)),
      catchError(this.handleError<any>('updateVideojuego'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.mensaje}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a VideojuegoService un nmensaje con el MessageService */
  private log(mensaje: string) {
    this.mensajeService.add(`VideojuegoService: ${mensaje}`);
  }
}