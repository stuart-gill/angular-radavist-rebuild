# _Angular Rebuild of TheRadavist.com_

#### \_An attempt to reproduce TheRadavist.com, using Angular and processes like dynamic routing, service injection, firebase database, and components.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

#### By _**Stuart Gill**_

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## API Keys

Create the file: src/app/api-keys.ts. Then plug this block of code into it, replacing all the 'x's with your own Firebase credentials:

```
export const masterFirebaseConfig = {
apiKey: "xxxx",
authDomain: "xxxx.firebaseapp.com",
databaseURL: "https://xxxx.firebaseio.com",
storageBucket: "xxxx.appspot.com",
messagingSenderId: "xxxx"
};
```

### License

_MIT License_

Copyright (c) 2019 **_Stuart Gill_**
