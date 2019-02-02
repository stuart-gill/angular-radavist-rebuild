# _Angular Rebuild of TheRadavist.com_

#### \An attempt to reproduce TheRadavist.com, using Angular and processes like dynamic routing, service injection, firebase database, and components.

-Click on "the Radavist" logo in header to be taken to /home route
-Home route is a list of Reports, showing only the title, author, and one image. Home route will eventually also have Radar components on the left of the page, and advertisements on the right.
-Click on the title of the report to go to the report detail page, which shows all photos (feature not yet implemented) and full text of report
-Clicking "Reportage" in the nav bar header will take you to a list of reports with titles and authors only. Also clickable.
-The Radar route (in nav bar) has not yet been built out, nor has the radar component been built.
-Ditto for shop and video components and routes
-About component has its content built, and is displayed in the about route, but needs further formatting
-Clicking Admin at the footer nav bar takes you to the admin route, which brings up a "New Report" form with spots to enter report details and photos, as well as a list of reports and forms that allow for editing all aspects of each report

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

## Known Bugs

If you have RxJS errors when compiling, try entering the following in CLI to cirucmvent compatability issues.

```
npm install -s rxjs-compat
```

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
