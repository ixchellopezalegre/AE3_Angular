import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MensajeService } from './mensaje.service';
import { User } from '../entidades/user';

@Injectable({  providedIn: 'root'})
export class UsersService {
  
  //URL a la API
  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) {}

    /** 
   * Método que se encarga de buscar los uisuarios de la BBDD y mandar
   * un mensaje a través del servicio MensajeService con el resultado de la operación.
   * @returns Observable de los usuarios de la BBDD en memoria
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('Hemos cargado los usuarios')),
        catchError(this.handleError<User[]>('getUsers', []))
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

  /** Creamos un mensaje log de cada UserService con mensajeService */
  private log(mensaje: string) {
    this.mensajeService.add(`UsuarioService dice: ${mensaje}`);
  }
}