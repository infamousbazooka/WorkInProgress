# Dish Menu QuickStart

Dish Menu App with @covalent packages

## Setup

* Ensure you have Node 4.4 and NPM 3+ installed.
* cd into the folder and run `npm install`
* ng serve to get the app started.

## Warnings

* THE APP WILL CRASH when you first launch it. Cause of routing. It needs to default to `LoginComponenet` First and then move to `MainComponent` 
and `MainComponent` has methods that console.log the uid which isn't available as you haven't logged in yet.
* Hence `http://localhost:4200/#/login` and login with test@test.com and testtest as user and password.

## Docs

* See `app.routes.ts`
* Starting point of app is `MainComponent` have a look at the `main.component.html` for the html and the Coponents ts file.
* `MainComponent` has a `routes: Object[]` that populates the Navigation bar to the left. By default it loads `DashboardComponent`, look at the `app.routes.ts` file.
