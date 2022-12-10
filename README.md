# AE3 Angular🚀️

Actividad realizada por:

*Ixchel López* :

* Todos los componentes
* Servicios
* Entidades
* Routing
* Login

*David López* :

* Sección about

## Estructura general

---

Me gustaría pensar en esta actividad como mi primera actividad con Angular, que me ha permitido entender un poco como funciona, pues me ha abierto un mundo muy amplio que no he tenido tiempo de explorar en este trimestre y espero continuar en los próximos meses.

Verás que aunque era opcional he usado la parte de cliente HTTP para simular la base de datos con una WEB API, me ha parecido más interesante de cara a la aplicación real de estos conocimientos. Para ello he echado mano principalmente de tus apuntes y la página web oficial de [Angular](https://angular.io/).

Hay muchas cosas que estan muy simuladas aun pero espero mejorarlo conforme mi conocimiento avance.

## Simulación del servidor

Para empezar, he tenido que instalar un módulo de ANGULAR diferente a los que hemos visto en clase para el. A diferencia de tu ejemplo de clienteHTTP yo he usado una WEB API a través de un servicio que he creado llamado ****in-memory-app.service.ts****.

![captura-api](src\assets\documento-img\api.png)

Para usar este recurso he tenido que instalar el paquete ****in-memory-app-web-api**** al tener Angular 13 que nos recomendaste en tus videos, nos da un error de compatibilidad. He buscado en stackOverFlow y se resuelve pidiendo el paquete para nuestra version en concreto. Luego he tenido que usar --force para que sobreescribiera los cambios. El problema se hubiese solucionado, entiendo, instalando la ultima version de Angular también.

![captura-api](src\assets\documento-img\api-solved.png)

En el archivo **app.module.ts** he colocado las importaciones necesarias para crear la BBDD simulada, de esta manera:

![captura-app-module](src\assets\documento-img\app-module2.png)

*Las importaciones necesarias para la simulación en app.module.ts*

![captura-app-module](src\assets\documento-img\app-module1.png)

Dentro de la carpeta servicios, encontraremos **in-memory-data.service.ts**, que será el servicio encargado de funcionar como base de datos. Los datos cargados en esta base de datos simuladas serán leidas tambien por la API como formato json.

![captura-app-module](src\assets\documento-img\in-memory.png)

En este servicio, a través del método [createDB()], propio del **InMemoryDbService**, cargaremos unos datos ya establecidos para arrancar la bbdd como si fuese real. Contendrá dos constantes:

- **videojuegos**: contiene un array de objetos, cada uno de los cuales representa un videojuego con una propiedad "id", otra "company",
  otra "imagen" con la url al recurso en nuestra app, y otra "notaMedia" con una simulacion de la notaMedia de ese videojuego.
- **users**: contiene un array de objetos, cada uno de los cuales representa un usuario "ya registrado" en nuestra app con una propiedad "id", otra "userName", otra "email" y otra password.

## **Requerimiento 1**

---

Los requerimientos de la actividad punto por punto:

* [ ] Los videojuegos tendrán un identificador, un título, una compañía, una imagen y una valoración media.
* [X] En la carpeta Entidades, donde hemos guardado las interfaces correspondientes a los recursos guardados en la BBDD, podemos encontrar los atributos de dicho videojuego:

  ![detalle-videojuego](assets/detalle-videojuegots.png)
* [ ] La aplicación de Angular muestra un listado de videojuegos:
* [X] Despues de loguearnos correctamente en la aplicacion (ver el **Requerimiento 2**), se nos muestra esta ventana:

  ![detalle-videojuego](assets/detalle-videojuego.png)
* [ ] La web mostrará una página con nuestro nombre de usuario y el listado de videojuegos (tendremos algunos videojuegos ya dados de alta), pero solo se mostrará en el listado el identificador, el título y la valoración
  media.
* [X] Estos son los datos mostrados en la interfaz del usuario despues de loguearse:

  ![](assets/20221210_050501_detalle-videojuego.png)

  *Se muestra un mensaje de bienvenida personalizado después de loguearse*

  ![](assets/20221210_050501_detalle-videojuegos.png.png)

  *En esta parte solo se muestran los detalles del videojuego indicados en el enunciado.*

  Añadir como nota que he añadido otras funcionalidades como borrar el Videojuego y también la opción de añadir uno nuevo (que te añade un videojuego nuevo a través de un título y genera un ID nuevo a través de un método en in-memory-data-service), pero no los comentaré aquí pues no estan requeridos en la actividad.

  Me han servido para aprender más sobre Angular y sobre los Clientes HTTP en este FrameWork.

  En *VideojuegoService* tenemos este método

  ![](assets/20221210_061332_videojuegos-service.png)

  Me he encargado de comentar bien cada método para no extenderme mucho en el documento, solo indicar que este método es utilizado por Videojuegos.component.ts para extraer y luego mostrar la lista de videojuegos de la BBDD.

  ![](assets/20221210_061559_getVideojuegospng.png)

  Como podemos observar, se comunica con videojuegoService para utilizar su método, que SI se comunica con el servicio (en este caso la base de datos fake). Este método será igual que el que usa LoginComponentes para llamar a userService y obtener todos los usuarios de la BBDD.
* [ ] Si pulsamos en un videojuego, nos llevará a su detalle, el cual podremos ver todos los atributos del videojuego. Esta página tendrá también un botón para volver.
* [X] Cuando pulsamos en el botón detalle de uno de los videojuegos listados llegamos a esta pantalla en la que podemos observar todas las propiedades de un videojuego así como su foto, que hemos obtenido por la url asociada en la propiedad "imagen".

  ![](assets/20221210_052704_grim-fandango.png)

  *Detalle del videojuego GrimFandango, una de las mejores aventuras gráficas de la historia*
* [ ] La página web tendrá también una página que muestre los datos para contactarnos y otra página que hable sobre nosotros. A estas páginas accederemos mediante un menú de navegación (también en este menú
  tendremos el listado de videojuegos).
* [X] A través del componente NavBar, podremos navegar entre las diferentes páginas de la aplicación.

  ![](assets/20221210_051333_navBar.png)

  *La navBar aparece despues de que el usuario se loguee con éxito. *

  Obviamente a traves de las rutas en la URL se puede acceder también a estos recursos sin loguearse puesto que no hemos estudiado aun realmente como funciona un login de verdad. Pero si no nos logueamos no obtendremos el mensaje de bienvenida si accedemos a /videojuegos por URL en el navegador.
* [X] Un formulario de Contacto que simula el envio de un formulario de contacto.

  ![](assets/20221210_051624_contact-form.png)

  *Esto se ve en el formulario cuando accedemos a través del navBar*

  Si enviamos un mensaje, podremos observar que nos salta esta alerta:
* [ ]

  ![](assets/20221210_051806_image.png)

  El método `onSubmit()` de **contacto.component.ts** simula el envio de un formulario borrando los campos despues de hacer click en el boton. A día de hoy no hay validación para que el usuario haya introducido un email como condición del envio, pero lo dejo para una versión futura de la aplicacion y en actividades anteriores se ha podido constatar que puedo hacerlo.
* [X] La página **acerca de Nosotros** muestra un texto explicativo de la aplicación:

  ![](assets/20221210_052130_about.png)

## **Requerimiento 2**

---

Respecto al login, primero intenté hacer un login más realista pero claramente me falta tiempo y conocimientos aun, he investigado acerca de la simulacion **auth**, pero no me ha dado tiempo a investigar. Lo seguire haciendo poruqe me resulta muy interesante.

Los requerimientos de la actividad son:

Para entrar en la página deberemos de estar registrados, se mostrará una página de “login” al principio donde deberemos de poner nuestro nombre de usuario y nuestra contraseña. La aplicación tendrá algunos usuarios por defecto.

Cuando iniciamos la aplicacion se redirige la ruta directamente a login.

![](assets/20221210_054247_login.png)
*La ruta nos redirige directamente a /login al iniciar la aplicación*

![](assets/users.png)
*En la aplicacion listamos los usuarios recogidos en la BBDD par poder acceder sencillamenta a la app.*

En caso de que no podamos entrar en la página, se nos mostrará otra vez la página de “login” diciendo que no hemos podido acceder.

A través de una sencilla validación en **login.componente.ts** podemos permitir que redirigir la página hacia /videojuegos, o en caso de que la validacion no sea satisfactoria, mostrar un mensaje de error:
![](assets/error.png)
*El mensaje de error solo se muestra cuando introducimos alguno de los datos erroneos*
Si introducimos el usuario y la contraseña correctas nos enviara este mensaje de alerta:

![](assets/20221210_055610_bienvenida-irene.png)

EL mensaje de error en el HTML lo introducimos usando la condicional

***ngIF** como vemos a continuación:

![](assets/20221210_060020_html-login.png)

El código TypeScript que realiza la validación:

![](assets/20221210_060525_login-ts.png)Como puedes observar, he usado un componente router, declarado en el constructor de LoginComponente que se encarga de redirigir al usuario por la ruta indicada. Al no tratarse de una sesión real, me he decantado por la opcion sencilla que cumple con el enunciado. Depues de loguearte, aparece un mensaje de bienvenida personalizada al username correspondiente al login.

Este mensaje se pierde en cuanto cambiamos de página, puesto que no se recoge en nigun otro parametro, como si hacen otros componentes, como por ejemplo addVideojuego o deleteVideojuego en videojuegos.component, o también MensajesService que mantiene los mensajes a lo largo de la sesión. Se podría haber hecho un MensajeService para que se mantuviese la ilusión de sesion iniciada, pero he investigado y escapa un poco de mi nivel actual, asi que he hecho esta opcion simple que cumple con los requisitos, aunque sea un poco "ñapa". El codigo en el App-router-link se ve asi:


![](assets/20221210_061148_login-_apa.png)

## **Observaciones**

---
En el documento he decidido comentar solo lo escrictamente pedido en el enunciado. Seguiré mejorando cosas estos meses pues me parece un punto de partida perfecto para seguir estudiando ANGULAR.