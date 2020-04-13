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

[(ngModel)]
- () : parentesis are events
- [] : brackets say that bind to properties (2 way data binding)
- USE WHEN WE NEED TO SINCRONIZE DATA WITH THE OUTPUT: for example inputs form


SHARE MUTABLE STATE problema con el estado de las propiedaddes mutadas
- el ngBinding nos permite tener como referencia una propiedad del modelo, pero no queremos que se replique su esttado en todo el component 
- es peligroso tener en una aplicacion un estado de una propiedad mutable en mas de un sitio (porque otros componentes de la aplcaicion podrian estar usando esas otras parates mutadas con valores impredecibles)
- por ejemplo el caso del formulario: nosotros estamos manipulando el valor del titulo a traves de un control, pero vemos reflejado ese valor mutado en el header y en la lista de projectos. Esto es peligroso porque transversalmente, algunna otra parte de la aplicacion podria estar usando esos valores mnutados que en realdad no nos interesa cambiar (porque en este caso solo estamos modificando el valor del control)
- todo esto es debido al comportamiento de las funciones de primer grado de Javascript, por las cuales un argumento se pasa por referencia
- todo esto ocurre porque el estado de esa propiedad se comparte en en varias partes del componente a tratar.
como solucion, se deben isolar por sub-componentes y bindearlas con @Input / @Output

SOLUCION
si quieres compartir el estado (quieres pintar la propiedad en varios sitios del componente): haz un mutable (se conectara con los es) (en donde este la referenmcia, cambiara su estado)
si quieres mutar el estado (quieres cambiar la propiedad): aislalo en  un componente, asi nunca se compartira

EVENTOS QUE QUIERES COMUNICAR DESDE UN ELEMENTO HIJO
@Outout(): siempre lo inicializas como un new EventEmitter();
    es decir en vez de manejar el evento en el componente hijo, lo emites/lanzas (trigger) y lo manejas por el componente padre


NGRX
es un conjunto de librerias que tienen como objetivo aplicar la texnologia de redux en las aplicaciones de angular.
Principal objetivo es el MANEJO DE ESTADO DE LA APLCACION

SERIALIZACION
como actua? : serializa los datos a traves de Observables (manejo asincrono de streams de datos) que permite una prediccion estable de los datos almacenados
tiene como suplemento la utilidad para desarrolladores que permite monitorizar los datos


STORE: interfaz que usan para redux: encapsulacion, single responsability, testing isolated, manage single inmutable state

¿que casos se utiliza?: Ideal en los entornos UI web, cuando datos provistos de recursos extenos y en memoria que compiten al mismo tiempo de manera asincrona a traves de las acciones del usuario


STORES (REDUX FLOW)
anaxioma redux: MANTENER EL ESTADO (esquema de nodos) EN UN UNICO LUGAR. Es decir evitamos mantener los datos en los componentes, se guardaras a partir de ahora en los STORES

por lo tanto sera el objetivo de mantener sincroinizado los componentes y los sevicios con los STORES de la aplicacion 
El flow control se vuelve mas sencillo: ahora todos atacan al store.

1 -> Store
2 -> componentes y servicios
3 -> recursos externos


INTERFAZ COMO ESTADO DE LA APLCICAION
normalmente se define el /state como una libreria -> libs/core-data/src/libs/state
en el index.ts, exportaremos una interfaz (que sera el store AppState) y un reducer que sera donde se manejara el estado (ActionReducerMap<AppState>)


## 3 CONCEPTOS DE REDUX
STORE (SINGLE STATE TREE) (informacion inmutable): todo el estado de la aplcacion se encuentra isolado en un unico arbos de estado
FLOW DOWN (descarga de informacion): estado se descarga a la aplicacion desde el state tree
REDUCER (FLOW UP -> puedes mutar la aplicacion): captura los eventos para subir la informacion al state tree

los metodos dentro del reducer se encargan de mutar los datos -> crean nuevos estados de la aplicacion para actualizar el state tree
PERFORMANCE: en angular cada vez que hay un cambio el binding de las propiedades se mira a traves de todo su arbol de estado a ver si hay cambios (DEEP COMPARATION), esto es muy caro. Ahora lo que ocurre es que si hay un cambio, lo cede al reducer para que haga push al state tree y se suscribe a los cambio de este.
Los reducer son tablas donde organizar tu modelo de datos, tendras entidades que funcinan como esquemas de tu Store.
comunicamos los cambios a mutar con el reducer a traves de ACCIONES

pull de datos del STORE ------> QUERY ------> APP
    ^^^^
    ||||
push de datos al REDUCER <------- ACCTIONS <------ APP

### OBSERVER
To este sistema esta soportado por Observables, esto permite sincronizar automaticamemnte los streams datos que fluyen en la aplicaicon a taves de endpoints (REDUCER (push, consumer), STORE (pull, producer))


### REDUX EN LOS COMPONENTES
STORE ---> @Input ---> child component
^^^^
|||
REDUCER <----- @Output (event emiters) <----- child component

#### EFFECTS (side effects) : acciones asincronas : tenemos que comunicar una accion fuera de la aplicacion
##### SELECTOR: computar dos modelos juntos

#### STORE
1 - creamos un feature.store por cada componente (en nuestra libreria de core-data)
2 - por reducer creamos:
 - esquema de datos del reducer: interface ProjectState
 - modelo inicial del reducer: object initialState: ProjectState
 - reducer: function (state, action) {}


### EFFECTS (side effect)
@Effect : cuando queremos recibir datos de una fuente externa
se trata de un middleware que intercepta la accion para manejar un side effect, una vez que finaliza, delega la accion al reducer para que continue con el evento que este manejando

ACCIONES: se sapararan en acciones que disparan el @effect y acciones que se lanzan cuando el effect finaliza (que delegara al reducer)

### añadir una capa de abstraccion de persistencia de datos en los Efectos que vayan a servidor
permite resolver las RACE CONDITIONS, al controlar el orden de llegada de multiples requests   

## FAÇADES -> objetivo = dejar los container components lo mas sencillos posibles, aislando la logica de stores a una fachada
se terata de un nivel mas de abstraccion para los componentes de tipo contenedor, que comunican hacia los reducers o effects
