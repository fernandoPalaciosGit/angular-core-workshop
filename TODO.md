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
