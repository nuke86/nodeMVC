# README #

This README would document whatever steps are necessary to get your web site up and running with **nodeMVC**.

### What is this repository for? ###

* **nodeMVC** is a minimalistic Model Views Control in Node.JS that uses the minimum energy in the server machine to make up a Web Site very fast and light. The gol of nodeMVC is the minimal source code in the project and the easy configuration to work.
* ver: 0.1 alpha

### How do I get set up? ###

* nodeMVC is one server file and your contents are stored in files dot ejs (.ejs).
* After you have downloaded this project file (node.js), you have to put this in your main website directory and then you have to make new directory, in the same place, named **views**. In /views directory you can write your first web page:

```
#!bash

echo "Hello Bob website" > index.ejs
```

* Now you have to satisfy dipendences. nodeMVC use the framework **Express** and the **EJS** template engine to work. So, in the main directory of website (where you have put the node.js file) launch this command to setup the environment:

```
#!bash

npm install express
npm install ejs
```

* No databases are required.
* Test your website. Now you are ready, your website is setup. To run launch:

```
#!bash

nodejs node.js

#now the server is listening...
```
Open your web browser, go to: http://localhost:8080 and see your first webpage.
* To work with nodeMVC you are free to use pure **HTML** language in the .ejs files (in views directory), and the **EJS** template engine language to make it dynamics. One instruction you'll have to use is include, with the EJS language you can include one .ejs file in another .ejs file in this way:

```
#!java
<html>
<body>

<% include file %>

file principale
</body>
</html>
```
This instruction include a file named file.ejs (in the same directory of main file) in this main file (es: index.ejs).

* **Demo**: you can see nodeMVC in action through my Personal Site, entirely created with nodeMVC, at [www.dariofadda.it](http://www.dariofadda.it).

### Contribution guidelines ###

* **Routes** system: the URLs route in nodeMVC is very simple. After you store a file (.ejs) in /views directory, this file is already available on the server (no server restart is required). To point via web browser a web page stored in views directory you have to write, after http://localhost:8080/ the name of the file you want to point without extension. 
**Es**: if you have a file (views/gino.ejs), you go to: http://localhost:8080/gino. 
For index.ejs file you can write 'index' or nothing '/'.



### Who do I talk to? ###

* Nuke (nuke@spcnet.it) - [www.dariofadda.it](http://www.dariofadda.it)