# aurelia-mdl-components

Aurelia components for [Material Design Lite](http://www.getmdl.io).

Depends on [genadis/aurelia-mdl](https://github.com/genadis/aurelia-mdl).

> Lots of components are already implemented, but there is still work to be done. Contributions would be very appreciated!
Help needed with development of new components and with implementing tests (as mentioned below). 

##Usage

The components are custom elements/attributes that use [aurelia-mdl](https://github.com/genadis/aurelia-mdl) to upgrade the static [MDL]((http://www.getmdl.io).

The components are organized  in directories under `src/components` similar to [MDL](https://getmdl.io/components/index.html).
All the components are registered as `globalResources` and can be used in the views without `<require>`.

For example:
```html
<template>

  <p mdl-text="title" mdl-typography="align:center; color-class:grey-600;">
      Below is a raised MDL button with ripple effect and primary color
  </p>
  <mdl-button ripple.bind="true" type="raised" color-class="primary" text="My Button"></mdl-button>
    
</template>
```


## Install

### Aurelia CLI

Install the package:
```shell
npm install aurelia-mdl-components --save
```
Add package configuration to `aurelia.json`:
```
 "dependencies": [
          {
            "name": "encapsulated-mdl",
            "path": "../node_modules/encapsulated-mdl/dist",
            "main": "material.min",
            "resources": [
              "material.blue_grey-red.min.css"
            ]
          },
          {
            "name": "aurelia-mdl",
            "path": "../node_modules/aurelia-mdl/dist/amd",
            "main": "index",
            "deps": ["encapsulated-mdl"]
          },
          "extend",
          {
            "name": "aurelia-mdl-components",
            "path": "../node_modules/aurelia-mdl-components/dist/amd",
            "main": "index",
            "deps": ["aurelia-mdl", "extend"],
            "resources": [
              "components/css/*.css",
              "components/**/*.html"
            ]
          }
        ]
```
Notice the resources in encapsulated-mdl, add your favorite style.

In your app.hml (or wherever):
```
<require from="encapsulated-mdl/material.blue_grey-red.min.css"></require>
```
And in [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4):
```
aurelia.use.plugin('aurelia-mdl-components');
```
> No need to include `aurelia.use.plugin('aurelia-mdl');` as it's already included by aurelia-mdl-components.

### JSPM

In your project install the plugin via `jspm` with following command

```
  $ jspm install npm:aurelia-mdl-components
```

Make sure you use [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4).

Update  your bootstrapping:

```js
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration();

  aurelia.use.plugin('aurelia-mdl-components');

  aurelia.start().then(a => a.setRoot());
}
```
> No need to include `aurelia.use.plugin('aurelia-mdl');` as it's already included by aurelia-mdl-components.

Include material design css:
```html
      <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css">
```
or
```html
      <link rel="stylesheet" href="../jspm_packages/github/genadis/encapsulated-mdl@2.0.0/material.amber-pink.min.css">
```
or
```html
  <require from="encapsulated-mdl/material.amber-pink.min.css"></require>
```
> Notice: you should have the dependency defined in package.json, something like `"encapsulated-mdl": "^1.2.0"`.

Use the MDL components.


## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  npm install gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

## Running The Tests

[Aurelia Testing](http://aurelia.io/hub.html#/doc/article/aurelia/testing/latest/testing-components) is integrated as part of the plugin.

The tests are located under `test/unit/...`.
#### At the moment no tests are implemented. Contributions would be very appreciated!
> Please refer to [Aurelia documentation](http://aurelia.io/hub.html#/doc/article/aurelia/testing/latest/testing-components), for examples please refer to [aurelia-mdl](https://github.com/genadis/aurelia-mdl/blob/master/test/unit/button.spec.js)

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
