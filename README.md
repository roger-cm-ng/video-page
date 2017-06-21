To use the boilerplate
======================

**npm install** and then

**npm run webpack:dev** to build and watch

Start a second console and **npm run nodemon** to start the server

On a browser, go to <http://localhost:4567>

To start new component
======================

**npm install stubs-react -g**

Navigate to *components* folder and run

**stubs-react --c component-name --b** for entry component or

**stubs-react --c component-name** for redux component or

**stubs-react --c component-name --s** for stateless component

To specify a new or additional entry point
==========================================

Open *build-config/commons/entry.js*

Add **'bundle-file-name': 'path-to-entry-js'**

The bundled file will be created in *public/bundles*

Naming convention for component
===============================

Please use kebab-case, the class, action and reducer names will be generated in corresponding pascal and camel names

DO NOT USE pascal-case or camel-case to name your component
