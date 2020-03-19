# Block Tech: dating app feature
Welcome to my Block Tech repo! This repository contains the files for a matching-feature in a dating app.

You can find the static site for this project [here](https://karinmeijvogel.github.io/bloktech/) (files in the [/docs folder](https://github.com/KarinMeijvogel/bloktech/tree/master/docs)). Besides the code for the feature, you'll also see a folder [homework_excercises](https://github.com/KarinMeijvogel/bloktech/tree/master/homework_excercises/frontend), that contains several training excercises provided by the front- and back-end courses. To read about the progress and research for this project, check out the [Wiki](https://github.com/KarinMeijvogel/bloktech/wiki).

## Table of contents 📜
* [The matching-feature](#the-matching-feature-)
* [Installation guide](#installation-guide-%EF%B8%8F)
* [Database](#database-)
* [Sources](#sources-)


<img src="https://i.imgur.com/TtBEJ8z.png" width="33%"><img src="https://i.imgur.com/hqh7Jhv.png" width="33%"><img src="https://i.imgur.com/QPssjUy.png" width="33%">

## The matching feature 🔥
For this project, I'm working on a like-and-match feature for a dating app. This is based on a scenario where several user accounts have already been created and filled with user-info like name, age, description etc.

When running the app, you'll be asked to login as one of the users. Once you do, you'll see your personal dashboard where you can discover new people, view their profiles and like them. You also have a personal 'liked people' page, where you can see your matches and pending likes. Log in as several different users to see how the app behaves when users have liked each other, disliked each other or are waiting to be matched! 

## Installation guide 🖱️
To try the feature for yourself, clone the repository to your desired location. Then navigate to it:

```
git clone https://github.com/KarinMeijvogel/bloktech.git
cd bloktech
```

Once you're in the directory, install the required node modules:

```
npm install
```

Finally, start the server:
```
npm run start
```

You can now go to http://localhost:3000/ in your browser and view the app. Enjoy!

If you want to switch between different users, go to the /login page.

## Database 📂
To understand the code better, it's useful to know how the database is structured. 

There's one collection called "allUsers", that contains info about all useraccounts in the app. Think of general information like name, age, description, etc.


<img src="https://i.imgur.com/Gu44ue4.png?1">

Every user has his own collection that is initially empty, but will be filled as soon as he starts liking people. Here, every row represents a "connection" that our user and the liked person have, containing information like the "matched" status, messages etc.


<img src="https://i.imgur.com/1i2TOIH.png" width="400">  ->  <img src="https://i.imgur.com/W5yw24c.png" width="400">

## Sources 🔎
### Project Tech
* airbnb. (n.d.). airbnb/javascript. Retrieved February 5, 2020, from https://github.com/airbnb/javascript/blob/master/README.md#arrow-functions

* F. (n.d.). Atom vs Sublime Text vs Visual Studio Code | What are the differences? Retrieved February 20, 2020, from https://stackshare.io/stackups/atom-vs-sublime-text-vs-visual-studio-code

* Goldspink, M. (2017, January 18). Best Text Editor? Atom vs Sublime vs Visual Studio Code vs Vim. Retrieved from https://www.codementor.io/@mattgoldspink/best-text-editor-atom-sublime-vim-visual-studio-code-du10872i7

* Hartikainen, J. (2015, March 5). A Comparison of JavaScript Linting Tools. Retrieved from https://www.sitepoint.com/comparison-javascript-linting-tools/

* javascript linting tools comparison. (n.d.). Retrieved February 20, 2020, from https://codeburst.io/javascript-linting-tools-comparison-ebcb4aa23c49

* JavaScript Style Guide. (n.d.). Retrieved February 5, 2020, from https://www.w3schools.com/js/js_conventions.asp

### Frontend
* Closures. (2020, March 6). Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

* JavaScript Hoisting. (n.d.). Retrieved March 19, 2020, from https://www.w3schools.com/js/js_hoisting.asp

* The Coding Train. (2017, February 22). 9.19: Prototypes in Javascript - p5.js Tutorial [Video file]. Retrieved from https://www.youtube.com/watch?v=hS_WqkyUah8

* The Coding Train. (2019, February 28). 9.20: Look away! Inheritance with Prototype in JavaScript - p5.js Tutorial [Video file]. Retrieved from https://www.youtube.com/watch?v=CpmE5twq1h0

* Ontwikkelen met progressive enhancement · Fronteers. (n.d.). Retrieved February 25, 2020, from https://fronteers.nl/blog/2015/05/ontwikkelen-met-progressive-enhancement

* Progressive Enhancement: What It Is, And How To Use It? (2009, April 22). Retrieved from https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/

* Cosset, D. (2019, February 16). Higher-order functions in Javascript. Retrieved from https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b

* Higher-Order Functions :: Eloquent JavaScript. (n.d.). Retrieved March 5, 2020, from https://eloquentjavascript.net/05_higher_order.html

* Loops and iteration. (2020, January 30). Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

* The Coding Train. (2018, February 19). 16.5: Higher Order Functions in JavaScript - Topics of JavaScript/ES6 [Video file]. Retrieved from https://www.youtube.com/watch?v=H4awPsyugS0

### Backend
* Best JavaScript templating engines. (n.d.). Retrieved February 27, 2020, from https://www.slant.co/topics/51/~best-javascript-templating-engines

* Collection Methods — MongoDB Manual. (n.d.). Retrieved March 7, 2020, from https://docs.mongodb.com/manual/reference/method/js-collection/

* EJS -- Embedded JavaScript templating. (n.d.). Retrieved February 27, 2020, from https://ejs.co/
* Express basic routing. (n.d.). Retrieved February 10, 2020, from https://expressjs.com/en/starter/basic-routing.html
* Express routing. (n.d.). Retrieved February 27, 2020, from https://expressjs.com/en/guide/routing.html
* Get Started with Atlas — MongoDB Atlas. (n.d.). Retrieved March 7, 2020, from https://docs.atlas.mongodb.com/getting-started/
* MongoDB. (n.d.). Compass. Retrieved March 7, 2020, from https://www.mongodb.com/products/compass
* Mongoose v5.9.5: Getting Started. (n.d.). Retrieved March 7, 2020, from https://mongoosejs.com/docs/
* NPM global or local packages. (n.d.). Retrieved February 10, 2020, from https://nodejs.dev/npm-global-or-local-packages
* npm: mongodb. (2020, March 11). Retrieved from https://www.npmjs.com/package/mongodb
* Traversy Media. (2019a, February 22). Express JS Crash Course [Video file]. Retrieved from https://www.youtube.com/watch?v=L72fhGm1tfE
* Traversy Media. (2019b, February 6). Node.js Crash Course [Video file]. Retrieved from https://www.youtube.com/watch?v=fBNz5xF-Kx4
