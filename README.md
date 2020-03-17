# Block Tech: dating app feature
Welcome to my Block Tech repo! This repository contains the files for a matching-feature in a dating app.

You can find the static site for this project [here](https://karinmeijvogel.github.io/bloktech/) (files in the [/docs folder](https://github.com/KarinMeijvogel/bloktech/tree/master/docs)). Besides the code for the feature, you'll also see a folder [homework_excercises](https://github.com/KarinMeijvogel/bloktech/tree/master/homework_excercises/frontend), that contains several training excercises provided by the front- and back-end courses. To read about the progress and research for this project, check out the [Wiki](https://github.com/KarinMeijvogel/bloktech/wiki).

## Table of contents 📜
* [The matching-feature](#matching)
* Installation guide
* Database
* Sources

## The matching-feature 🔥
For this project, I'm working on a like-and-match feature for a dating app. This is based on a scenario where several user accounts have already been created and filled with user-info like name, age, description etc.

When running the app, you'll be asked to login as one of the users. Once you do, you'll see your personal dashboard where you can discover new people and like them. You also have a personal 'liked people' page, where you can see your matches and pending likes. Log in as several different users to see how the app behaves when users have liked each other, disliked each other or are waiting to be matched! 

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

## Database 📂
To understand the code better, it's useful to know how the database is structured. 

There's one collection called "allUsers", that contains info about all useraccounts in the app. Think of general information like name, age, description, etc.


<img src="https://i.imgur.com/Gu44ue4.png?1">

Every user has his own collection that is initially empty, but will be filled as soon as he starts liking people. Here, every row represents a "connection" that our user and the liked person have, containing information like the "matched" status, messages etc.


<img src="https://i.imgur.com/1i2TOIH.png" width="400">  ->  <img src="https://i.imgur.com/W5yw24c.png" width="400">

## Sources 🔎
...
