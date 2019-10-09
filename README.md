# Few200

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


__________________________________________________________________________________________________________________________________________

Front End Web 200 w/Angular
LAB MANUAL

Part 0 – The Preliminary

Add a branch to the application state at the root of your application to store the error message from books feature when we try to add a book by King.

Create a selector and display that error message (if there is one) at the top of the page.

Make a way to dismiss the error (a cancel button).

Part 1 – The Required Part

In the same Angular project we started in the 200 class, you will create a new feature for tracking your Video Game Collection (this is a slightly more complex Book list. You got this. Relax).

Some requirements:

o	The feature should be implemented as a Feature Module, with a new link added to our app-nav component to reach this feature.

o	It should allow the user to enter the title, and publisher of the game. A dropdown should allow them to select the platform – PC, Xbox, PS4, Switch, DS

o	The new game should be stored in the Redux store. 

o	You should also create a new component that displays a list of all your games.

Extra Credit (each of these are progressively more challenging. Do as many as you can):
o	Validate the form. Each of the fields (are required. Do not allow them to add a game without this information. (hint: see https://angular.io/guide/form-validation - use form driven validation, not reactive form validation)
o	Create a way to mark a game as “on loan”. When this happens, it should be “moved” to another branch of your state tree. Make a component that lists the books that are on-loan.

Total Super Extra Credit Feature
If you are feeling particularly salty and want to take your Angular/Redux skillz to the next level, try this one.

Create another feature in your application called “MathGame”. Add a link to it on the nav-component.

When the user visits this feature, they are presented a series of simple, canned basic math questions. Like “2 + 8 =”. The user enters an answer. If the answer is correct, they move on to the next question. If they are wrong, they are allowed to try again.

They can only have three wrong answers or they lose. Update the UI to inform them what a loser they are.

If they get all the questions right, they are told they are a winner.

Optional:
Add a “play again” button that allows them to restart but only if they’ve already won or lost the game.

When you are done with the lab, to or at least the required part, find a team member to review your code.

So that I know how you are doing, please send me a link to your Github repository.


If you made any changes to the API, re-deploy it using the “now” command. Make a note of the URL returned so that your application can use that API.

For the application: go to a command prompt in your project and run this command:

	ng-build –prod=true

Please come to the workshop if you need help! I’m here for you!
