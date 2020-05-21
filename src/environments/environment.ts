// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDhA7bEus9JV1ws96K1ifMHFCZdVzkZztA",
    authDomain: "fir-crudapp-1016f.firebaseapp.com",
    databaseURL: "https://fir-crudapp-1016f.firebaseio.com",
    projectId: "fir-crudapp-1016f",
    storageBucket: "fir-crudapp-1016f.appspot.com",
    messagingSenderId: "296905171050"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
