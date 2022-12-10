import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/**
 * Clase que lidia con los mensajes que usaremos para conectar los procesos internos del servidor con
 * la interfaz del usuario
 */
export class MensajeService {

  /**La lista de mensajes en memoria */
  mensajes: string[] = [];

  /**
   * Método que se encarga de añadir el mensaje a la lista 'mensajes' de MensajeService
   * @param mensaje - el mensaje que vamos a añadir
   */
  add(mensaje: string) {
    this.mensajes.push(mensaje);
  }
    /**
   * Método que se encarga de limpiar la lista 'mensajes' de MensajeService
   */
  clear() {
    this.mensajes = [];
  }
}