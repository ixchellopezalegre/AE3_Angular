import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Videojuego } from '../entidades/videojuego';
import { MensajeService } from './mensaje.service';


@Injectable({ providedIn: 'root' })
export class VideojuegoService {

   // URL a la web API (en este caso al servicio in memory data)
  private videojuegosUrl = 'api/videojuegos'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) { }

  /** GET videojuegos del servidor */
  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.videojuegosUrl)
      .pipe(
        tap(_ => this.log('Hemos cargado los videojuegos')),
        catchError(this.handleError<Videojuego[]>('getVideojuegos', []))
      );
  }


  /** Metodo GET para el videjojuego por ID*/
  getVideojuego(id: number): Observable<Videojuego> {
    const url = `${this.videojuegosUrl}/${id}`;
    return this.http.get<Videojuego>(url).pipe(
      tap(_ => this.log(`encontrado videojuego id=${id}`)),
      catchError(this.handleError<Videojuego>(`getVideojuego id=${id}`))
    );
  }


  //////// Metodos para añadir y eliminar un videojuego //////////

  /** POST: añadir un videojuego nuevo al servidor */
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

  /** Log a HeroService message with the MessageService */
  private log(mensaje: string) {
    this.mensajeService.add(`VideojuegoService: ${mensaje}`);
  }
}