https://github.com/onehungrymind/angular-core-workshop/wiki/00-Up-and-Running

CLI -> angular.io
construri la papp  a traves de componentes construido s por comandos
todo integrado con las herramientas necesarias para la integracion continua (test runner, tesing, linters...)

tiene los comandos necesarios para contruir el scafolding de los componentes


- CLI: generacion de codigo
- Blueprints, esquematics environments
- Nrwl: proyecto construido sobre la CLI, extension de la cli, que soluciona problemas con proyectos de angular para enterprise
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
