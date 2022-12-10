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

Para usar este recorso he tenido que instalar el paquete ****in-memory-app-web-api**** al tener Angular 13 que nos recomendaste en tus videos, nos da un error de compatibilidad. He buscado en stackOverFlow y se resuelve pidiendo el paquete para nuestra version en concreto. Luego he tenido que usar --force para que sobreescribiera los cambios. El problema se hubiese solucionado, entiendo, instalando la ultima version de Angular también.

![captura-api](src\assets\documento-img\api-solved.png)

En el archivo **app.module.ts** he colocado las importaciones necesarias para crear la BBDD simulada, de esta manera:

![captura-app-module](src\assets\documento-img\app-module2.png)

*Las importaciones necesarias para la simulación en app.module.ts*

![captura-app-module](src\assets\documento-img\app-module1.png)
