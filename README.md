CREAR PROYECTO DE TIPO NPX
- npx create-nx-workspace angular-core-workshop --preset=empty --cli=angular --npmScope=workshop
- cd create-nx-workspace

AÑADIR DEPENDENCIAS
- npm i --save-dev concurrently json-server jsonwebtoken
- ng add @nrwl/angular
- ng add @angular/material

CREAR LA APLICACION
- ng generate @nrwl/angular:application dashboard
- npm start

CREAR LIBRERIAS (¿que elementos podria compartir con otras aplicaicones?)
- ng generate lib material (interfaces UI material components)
- ng generate lib core-data (bussiness logic for server side comunication)
- ng generate lib ui-login -p=ui (interfaz de login)
- ng generate lib ui-toolbar -p=ui (header con menu de redirecciones)

CREAR COMPONENTES [home + projects + customers] (¿que elementos principales pertenecen a la interaccion de usuario?)
- ng generate module home --routing
- bg generate component home
