# Basketball Team Manager

This app will allow the user to manage a basketball team.  The welcome page will display all current players and links to view more information about those players.  You can filter players by position, and the admin page will allow you to add, update, and remove players.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Setup firebase database

* Create a database with firebase
* Create a api-keys.ts file in app directory
* In api-keys.ts place with your information:

    export var masterFirebaseConfig = {

      apiKey: "xxxx",

      authDomain: "xxxx.firebaseapp.com",

      databaseURL: "https://xxxx.firebaseio.com",

      storageBucket: "xxxx.appspot.com",

      messagingSenderId: "xxxx"

    };

* Sample data in sample-players.json can be imported into firebase

## Planning

* Create router file
* Create welcome component and routes that will  eventually display list of team players
* Create about component
* Create player model
* Create database with firebase
* Create player service
* List players on welcome page
* Create admin component
* Create add player component for admin
* Create dynamic routes component to display information about an individual player
* Create update component for admin
* Create delete player function for admin
* Create pipe to display players of different positions
* Style with css

### License
*MIT

Copyright (c) 2017 Jayeson Kiyabu All Rights Reserved.
