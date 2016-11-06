# Dish Menu QuickStart

Dish Menu App with @covalent packages

## Setup

* Ensure you have Node 4.4 and NPM 3+ installed.
* cd into the folder and run `npm install`
* ng serve to get the app started.

## Warnings

* To test login and firebase features uncomment line 38 in `DAshboardCOmponent`. And on loading your app ALWAYS LOGIN FIRST  
* `http://localhost:4200/#/login` and login with test@test.com and testtest as user and password, after successful login it will route to `MainComponent`
* IF YOU UNCOMMENT THAT LINE OF CODE ON EVERY NG SERVE YOU HAVE TO LOGIN FIRST. 
* Will fix this tonight. - Aldy


## Docs

* See `app.routes.ts`
* Starting point of app is `MainComponent` have a look at the `main.component.html` for the html and the Component ts file.
* `MainComponent` has a `routes: Object[]` that populates the Navigation bar to the left. By default it loads `DashboardComponent`, look at the `app.routes.ts` file.

