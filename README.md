#Installing the boilerplate


```bash
# install node modules
npm install

# build and watch
npm run webpack:dev
```

In a browser, go to <http://localhost:4567/#/home>

#Creating components

Install the *stubs-react* module globally

```bash
npm install stubs-react -g
```

Navigate to *components* folder and run one of the following commands, depending on the type of component.

**Notes**:
- use **kebab-cased** component name, e.g. *my-component*. The correctly-cased class, action and reducer names 
will be generated automatically.

- The optional **--b** flag makes the new component a bootstrap (entry) component.

## Redux component
```bash
stubs-react --c component-name [--b]
```

##Stateless component
```bash
stubs-react --c component-name --s [--b]
```

#To specify a new or additional entry point

Add the new bundle name and entry path following to the function return value in *build-config/commons/entry.js*:

```
'bundle-file-name': 'path-to-entry-js'
```

The bundled file will be created in *public/bundles*.

##Enabling Bootstrap or Fontawesome

Please refer to styles/core.scss
