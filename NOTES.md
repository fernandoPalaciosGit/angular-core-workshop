https://github.com/onehungrymind/angular-core-workshop/wiki/00-Up-and-Running

CLI -> angular.io
construri la papp  a traves de componentes construido s por comandos
todo integrado con las herramientas necesarias para la integracion continua (test runner, tesing, linters...)

tiene los comandos necesarios para contruir el scafolding de los componentes


- CLI: generacion de codigo
- Blueprints, esquematics environments
- Nrwl `Norwal`: proyecto construido sobre la CLI, extension de la cli, que soluciona problemas con proyectos de angular para enterprise
expone un repositorio de Nrwl-workspace: permite organizar multiples proyectos de angular (cli generated) baojo un mismo paraguas
Como una arquitectura de multi librerias
-Angular Material.angular.io: pre build tools, que se integran en la applicacion, facil de extender


WORKSHOP: aplicacion de Proyectos (TODO's app item : Master detail view)
- añadir lista de proyectos
- proyects feature
- REST service to pull form items


- 09-testing (compplete app running)
- master: blank cli proyect + resources 


Nrwl
- npmx create-nx-workspace proyect-name: create an angular CLI proyect that is design to hhold many angular proyects at the same time.
split the application into different spaces and reusable libraries.

- nx.json -> npmScope: change the name.space of the workspace that should build all the componentes 


Objetivos de una aplicacion Angular:
- un componente deberia tener 2 responsabilidades principales
    - renderizar templates
    - publish information outside
    
- de donde viene la informacion que recibe el componennte?: SERVICE LAYER from the state management library
- esa informacion no necesita existir en LAYER DE FRONTAL: es decir el modelo de datos que permiten renderizar las interfaces graficas, deberian estar fuera de la aplicacion.
- por eso movemos el SERVICE LAYER como librerias que sirven a diferentes componentes de la aplicacion

- PIECES THAT YOU CAN USE: state management library
- PIECES THAT YOU CAN NOT USE: components very thins

- cuando pensamos en un elemento de muy alto nivel, que contenga ruta, por ejemplo la pagina de la home,
primero creo el modulo y despues su componente que lo encapsula.


- todo este proyecto esta gestionado por un Nrwl workspace. que nos permite gestionar multiples apps y librerias
- todos los comandos de generacion de codigo, se montaran sobre la aplicacion que este en {"defaultProject": "dashboard"}

DISEÑO BASADO EN LIBRERIAS
si tienes algo en el controller -> lo pones en un servicio (directorio comun de la aplicacion)
La seiguente evolucion de esta arquitectura es utilizar librerias para elementos compartidos


FUNDAMENTOS DE COMPONENTES
- una vez que se crea una propiedad en la clase del componente, automaticamente se bindeara con el template
- las () "curly brazes" se utilizan para bindear el estado de las propiedades de clase
- las [] "bracket brazes: property binding: cuando quieres bindear una propiedad a un attributo de html 
- declaraciones : * : introduce una directiva de angular (por ejemplo *ngFor) que modifica el DOM
- declaraciones : (EVENT) : introduce un binding sobre un elemento del DOM
- $event: referencia local para cada binding de eventos (sacar el target elements)
- variables de template:
    - se pueden crear variables de bloque referenciados solo dentro del template, muy util si debes mostrar un output al contradefcir alguna condicion
    <span *ngIf="condition else inCaseOf">assertion 1</span>
    <ng-template #inCaseOf>assertion 2</ng-template>
    - se puede asociar una variable a un componente de libreria que exponga una API
    <span (click)="materialSidenav.toogle()"></span>
    <mat-sidenav #materialSidenav opened class="app-sidenav"></mat-sidenav>
- se puede bindear cualquier tipo de evento nativo del browser (click) (mouseover)....incluso eventos propios

ROUTING 
- en una manera de navegar entre features
- es apropiado tener un archivo standalone para el mapeo de rutas
    -> crear un app-route.module.ts que permita importar : RouterModule.forRoot(routes : Routes)
- utilizamos <router-outlet></router-outlet> para agregar los componentes que se declaran en el mapeo de rutas
- siempre que se quiera usar un modulo desde una libreri debemos exportar e importar todos los componentes
- laizy loading del routing de cada componente
    -> en el routing principal (app-routing) se definen el listado de rutas de navegacion (RouterModule.fromRoute([])), que cargaran de manera lazy los modulos
    -> en cada modulo se debe definir como ruta por defecto el componente a cargar (RouterModule.forChild([{path: '', component: testComponent}]))
    -> en resumen tenemos un router principal que define el path de cada feature (module) que adicionalmente manejara el estado asincrono de la pagina en cada una de ellas, y cada Modulo tendra un mapeo de subrutas 

SERVICIO
- definimos un servcio como una capa de abstraccion de datos
puede ser para conectar con el servidor y recuperar datos de la sesion o extraer datos de una BBDD: projects.service.ts
- definimos una interfaz como un schema de los datos de los objetos que va a devolver el servicio: project.ts 


FAKE REST API
- utilizamos el modulo de npm json-server para levantar un server (localhost:3000) sobre un json a harcodeado en un directorio (/server/db.json)


PROPIEDADES DE TIPO OBSERVABLE
- un obsevable es un stream de datos
- se puede asignar a una request http
- las propiedades de este tipo se declaran con un $ al final del nombre (projects$)
- al recubir instrucciones asincronas, en el render del template se debe especificar con un pipe async (projects$ | async)
- https://angular.io/guide/observables
- el pipe async tambien se encarga de esliminar la suscripcion del observer, cuando el stream de datos ya ha finalizado la carga en memoria (cuando ya se pintan los datos, el observable desaparece)

INTERFACE
- es solo la declaracion de propiedades y sus tipos que un objeto debe cumplir
- NO define el mvalor inicial de cada propiedad
- si se desea tener un objeto Dummy de esa interfaz: crear una factoria de ese objeto, como si fuera un POJO
    que no es mas que una funcion que devuelve el mismo tipo de objeto pero con una copia de sus propiedades con sus valores por defecto
