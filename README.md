# Burger Queen API

Interfaz web para la toma y entrega de pedidos del restaurante Burger Queen.

## Índice
* [1. Introducción](#1-introducción)
* [2. Historias de usuarios](#2-resumen-del-proyecto)
* [3. Prototipos](#3-objetivos-de-aprendizaje)
* [4. Detalles técnicos](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [Colaboradoras](#6-hacker-edition)

## 1. Introducción

Un pequeño restaurante de hamburguesas, que está creciendo, necesita un sistema a través del cual puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente. Este proyecto tiene dos áreas: interfaz (cliente) y API REST(servidor). La interfaz se integra con la [API](https://github.com/ssinuco/burger-queen-api-mock/blob/main/README.md).

## 2. Historias de usuarios

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

***

#### [Historia de usuario 2] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

***

#### [Historia de usuario 3] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (usar API para guardar pedido).
* Se ve y funciona bien en una _tablet_


***

#### [Historia de usuario 4] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó preparar el pedido desde que llegó hasta que se
  marcó como completado.


***

#### [Historia de usuario 5] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.


***
## 3. Prototipos

Para ver nuestro prototipo *Mobile First*: [aquí](https://www.figma.com/file/uV14gt5bco8qPF4wkB45a8/Burguer-Queen?node-id=16%3A4&t=SufEgdMs7d8lP8d0-1).


## 3. Detalles técnicos

Para este proyecto se implementó lo siguiente:

* SPA (Single Page Application) con React Router.
* Javascript.
* React JS.
* CSS y HTML Semántico.
* Bootstrap.
* API REST 

## Colaboradoras

[Camila Fonseca](https://github.com/Camilaf19) | [Tania Infante](https://github.com/Tania1295) | [Sorey Cortés Guzman](https://github.com/SoreyC)