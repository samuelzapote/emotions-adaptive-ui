// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBH-NobOZeaE5w-VSv1fTBxUJqDxvTK0pA",
        authDomain: "cured-b4d50.firebaseapp.com",
        databaseURL: "https://cured-b4d50.firebaseio.com",
        projectId: "cured-b4d50",
        storageBucket: "cured-b4d50.appspot.com",
        messagingSenderId: "833461057666",
    },
    backendUrl: "http://localhost:5000/sentiments",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
