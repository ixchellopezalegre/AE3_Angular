import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../entidades/user';
import { UsersService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

    users: User[] = [];

    email:string="";
    password: string="";
    username: string="";
    
    //Solo se muestra el mensaje de error en el HTML si la validación no es satisfactoria
    control: boolean=true;
    
  /**
   * Constructor del login al nque se llama cuando se inicia este componente.
   * Angular va a crear un router y un usersService
   * @param usersService - un objeto de la clase UserService que hemos importado
   * @param router - un objeto de la clase router que hemos importado
   */
    constructor(private usersService: UsersService,
                private router: Router) { }
    
    /**
     * Al iniciar el servicio, se llama a getUsers
     */    
    ngOnInit(): void {
      this.getUsers();
    }

    /**
   * Método que se inciia con el inicio del servidor y obtiene todos los 
   * usuarios registrados en la base de datos en in-memory-app
   */ 
    getUsers() {
      this.usersService.getUsers()
      .subscribe(users => this.users = users);
    }
  
    /**
     * Método que comprueba si el usuario y la contraseña son correctos, recorriendo la lista
     * de usuarios existentes en la BBDD. Si Son correctas redirige a la página principal
     * que permite la navegación.
     */
    login(){
      this.users.forEach(user => {
        if((this.email === user.email) && (this.password === user.password)){
          console.log(this.email + " coincide con el email " + user.email + " en nuestra bbdd")
          this.username = user.username;
          //Se envia una alerta a la ventana del usuario con su userName
          alert(`Bienvenido ${this.username}`);
          //Se pasará el usuario como queryParam  de manera programática para "entrar" en la aplicación
          //a trves de el objeto router que hemos inyectado previamente
          this.router.navigateByUrl('/videojuegos/'+this.username);
        }
       
      },
      );
      this.control=false;
      
    }

}
