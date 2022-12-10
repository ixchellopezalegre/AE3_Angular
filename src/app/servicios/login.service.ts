// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { MensajeService } from './mensaje.service';
// import { User } from '../entidades/user';
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//  private loginUrl = 'api/login';  // URL to web api

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
//   constructor(
//     private http: HttpClient,
//     private mensajeService: MensajeService) {}

//     getActivos(): Observable<User[]> {
//       return this.http.get<User[]>(this.loginUrl)
//         .pipe(
//           tap(_ => this.log('Hemos accedido a los usuarios activos')),
//           catchError(this.handleError<User[]>('getActivos', []))
//         );
//     }
  
//     loginUser(user: User): Observable<User> {
//       let userObservable;
//       userObservable = this.http.post<User>(this.loginUrl, user, this.httpOptions )
//       return this.http.post<User>(this.loginUrl, user, this.httpOptions).pipe(
//       tap((nuevaSesion: User) => this.log(`Se ha iniciado la sesión de username=${nuevaSesion.username}`)),
//       catchError(this.handleError<User>('loginUser'))
//       );
//     }

//       /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    *
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//       private handleError<T>(operation = 'operation', result?: T) {
//         return (error: any): Observable<T> => {
    
//           // TODO: send the error to remote logging infrastructure
//           console.error(error); // log to console instead
    
//           // TODO: better job of transforming error for user consumption
//           this.log(`${operation} failed: ${error.mensaje}`);
    
//           // Let the app keep running by returning an empty result.
//           return of(result as T);
//         };
//       }

//   /** Log mensaje de VideojuegoService*/
//   private log(mensaje: string) {
//     this.mensajeService.add(`Login : ${mensaje}`);
//   }
// }
