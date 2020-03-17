# Block Tech: dating app feature
Welcome to my Block Tech repo! This repository contains the files for a like-feature in a dating app.

You can find the static site for this project [here](https://karinmeijvogel.github.io/bloktech/) (files in the [/docs folder](https://github.com/KarinMeijvogel/bloktech/tree/master/docs)). Besides the code for the feature, you'll also see a folder [homework_excercises](https://github.com/KarinMeijvogel/bloktech/tree/master/homework_excercises/frontend), that contains several training excercises provided by the front- and back-end courses. To read about the progress and research for this project, check out the [Wiki](https://github.com/KarinMeijvogel/bloktech/wiki).

## Table of contents
* The matching-feature
* Installation guide
* Database
* Sources

## Installation guide
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

You can now go to _http://localhost:3000/_ in your browser and view the app. Enjoy!

## Database
To understand the code better, it's useful to know how the database is structured. 
* There's one collection called "allUsers", that contains info about all useraccounts in the app. Think of general information like name, age, description, etc.

<img src="https://i.imgur.com/AOXmrO4.png">

* Every user has his own collection that is initially empty, but will be filled as soon as he starts liking people. Here, every row represents a "connection" that our user and the liked person have, containing information like the "matched" status, messages etc.

<img src="https://i.imgur.com/1i2TOIH.png" width="400">  ->  <img src="https://i.imgur.com/W5yw24c.png" width="400">

## Sources
...
