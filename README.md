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

CREAR LIBRERIA DE ANGULAR
- ng generate lib material

