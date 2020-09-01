# Web Scraping and its applications for journalism 
## City University - September 2020 - Class exercises 

The class presentation can be found [here](https://docs.google.com/presentation/d/1DpFcgAewI9UZEMXGZdiC3HQdpENv-fQZO-0VPNBTLbk/edit?usp=sharing)

These exercises are designed to help students practice using APIs and basic webscraping using Node.js, a Javascript library which runs on your machine rather than the web browser.

### Prerequisites

In order to run the code snippets, you will need a computer with a commandline or terminal such as a Macbook or Windows machine. *Windows users* following this tutorial are advised to install [Cygwin](http://cygwin.com/). Click 'Install Cygwin' on the left, then the first link ‘setup-x86_64.exe’. Once installed there should be a Cygwin icon on your desktop.

We'll be using **Node.js** to write our code today so be sure to download it onto your machine. The link to download it is [here](https://nodejs.org/en/). Once installed, on a Mac, open the Terminal, which is in your Applications, then Utilities. On Windows, open Cygwin. Type: node -v
and press enter -- it should give you a number like v12.12.0.
 
You will also need a text editor - in built software is fine as long as you can save plain text files. Editors such as [Sublime Text](https://www.sublimetext.com/) try to help you as you code using colours and other prompts to help you remember the Syntax. Very useful for beginners! nce installed, on a Mac, it should be in your Applications folder. On Windows, it should be in the Start menu. Check it opens up ok.

It is advisable to set up a **Projects Folder** to keep your code and scraped files together in. 

## Class Exercises 

### Set up

Ensure you have created a Projects Folder and navigate to it using your command line tool (either Cygwin on Windows or Terminal if on a Mac). 

A reminder of key command line prompts:

`pwd` Print Working Directory or 'where am I now?'

`mkdir` Make Directory creates a new folder from the commandline

`cd` Change Directory lets you move between branches and folders

`ls` List the files in my currect directory 

`..` Go up one level in the file tree

### Making a web request in code 
In this first exercise, we're going to make a **GET request** in code. 

First, you'll need to navigate to your Projects folder and create a new folder called *web-request*. Do not type the `$`, this is the command prompt that is there to show you where to type your commands.

The code will look something like this:

 What folder am I in at the moment?
 `$ pwd`

 Move into folder:
 `$ cd Projects`

 Move back one folder:
 `$ cd ..`

 Make a new folder:
 $ mkdir web-request
 
 Next, open your text editor such as Sublime and create a new file called *request.js*.
 
 Then we need to install a library called *Axios*. Libraries are collections of code written by others which mean we don't have to start from scratch each time we want to do common tasks such as scraping or making web requests.
 
 In your terminal type:
 
 `$ npm install axios`
 
 The code for making  our request is as follows:
 
```javascript
var axios = require('axios')

var site = 'http://bbc.co.uk/news'

axios.get(site).then(response => {
    console.log(response.data)
})
```

In this code block we have declared a *variable* using the `var` keyword for our library and used the `require` keyboard to load it. We have also created a separate variable for the website we want to make our GET request to. 
The last line in the code calls on the libary to visit the site and retrieve a response. 

### Using an API

APIs are built by sites to allow different applications to interact with each other. Think of travel apps you might use such as Bus Guru or City Mapper. These apps are accessing TfL data via APIs.
There are many sites with APIs that are useful for journalism:

<img width="652" alt="Screenshot 2020-09-01 at 07 48 39" src="https://user-images.githubusercontent.com/6706325/91811623-b43d0900-ec27-11ea-9e97-b5acc98ba8bb.png">

For this exercise, we'll be using the data.police API to look up crime at rival university, Goldsmiths College. 

The URL appears as so:
`https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05`

Note the insertion of the latitude and longitude of the location and the relevant date - in this case May 2019. 

To start with, you're going to adapt the code you used for the BBC News website to call the new URL instead.

```javascript
var axios = require('axios')

var site = 'https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05'

axios.get(site).then(response => {
    console.log(response.data)
})
```
You should now get back the details of crimes at the location on that date. 

<img width="504" alt="Screenshot 2020-09-01 at 08 00 01" src="https://user-images.githubusercontent.com/6706325/91813322-78577300-ec2a-11ea-915c-db03f1170f9d.png">

The data format returned is known as JSon pronounced like the name Jason. It's very common for data to be structured in this way when using APIs. 


### Web scraping 

