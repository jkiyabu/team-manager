# TeamManager

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Setup firebase database

* Create a database with firebase
* Create a api-keys.ts file in app directory
* In api-keys.ts place with your information:

    `export var masterFirebaseConfig = {`
      `apiKey: "xxxx",`
      `authDomain: "xxxx.firebaseapp.com",`
      `databaseURL: "https://xxxx.firebaseio.com",`
      `storageBucket: "xxxx.appspot.com",`
      `messagingSenderId: "xxxx"`
    `};`

## Planning

* Create router file
* Create welcome component and routes that will  eventually display list of team players
* Create about component
* Create player model
* Create player service
* Create database with firebase
* List players on welcome page
* Create admin component
* Create add player component for admin
* Create dynamic routes component to display information about an individual player
* Create update component for admin
* Create delete player function for admin
* Create pipe to display players of different positions
