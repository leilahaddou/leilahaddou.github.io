# Web Scraping and its applications for journalism 
## City University - September 2020 - Class exercises 

The class presentation can be found [here](https://docs.google.com/presentation/d/1DpFcgAewI9UZEMXGZdiC3HQdpENv-fQZO-0VPNBTLbk/edit?usp=sharing)

These exercises are designed to help students practice using APIs and basic webscraping using Node.js, a Javascript library which runs on your machine rather than the web browser.

### Prerequisites

In order to run the code snippets, you will need a computer with a commandline or terminal such as a Macbook or Windows machine. *Windows users* following this tutorial are advised to install [Cygwin](http://cygwin.com/). Click 'Install Cygwin' on the left, then the first link ‘setup-x86_64.exe’. Once installed there should be a Cygwin icon on your desktop.

We'll be using **Node.js** to write our code today so be sure to download it onto your machine. The link to download it is [here](https://nodejs.org/en/). Once installed, on a Mac, open the Terminal, which is in your Applications, then Utilities. On Windows, open Cygwin. Type: node -v
and press enter -- it should give you a number like v12.12.0.
 
You will also need a text editor - in built software is fine as long as you can save plain text files. Editors such as [Sublime Text](https://www.sublimetext.com/) try to help you as you code using colours and other prompts to help you remember the Syntax. Very useful for beginners! nce installed, on a Mac, it should be in your Applications folder. On Windows, it should be in the Start menu. Check it opens up ok.

It is advisable to set up a **Projects folder** to keep your code and scraped files together in. 

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
 `$ mkdir web-request`
 
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
The last line in the code calls on the library to visit the site and retrieve a response. 

To run a program from the commandline type `$ node request.js` to run the file. Remember not to type the dollar sign, that's just there to show you where to write your commands. You should get the html for the BBC News website appear in your terminal.  

### Using an API

For your second exercise, we're going to access an API.

APIs are built by sites to allow different applications to interact with each other. Think of travel apps you might use such as Bus Guru or City Mapper. These apps are accessing TfL data via APIs.
There are many sites with APIs that are useful for journalism:

<img width="652" alt="Screenshot 2020-09-01 at 07 48 39" src="https://user-images.githubusercontent.com/6706325/91811623-b43d0900-ec27-11ea-9e97-b5acc98ba8bb.png">

For this exercise, we'll be using the data.police API to look up crime at rival university, Goldsmiths College. You may want to create a fresh file within your *web-request* folder. Call it something like *request-police.js*.

The URL appears as so:
`https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05`

Note the insertion of the latitude and longitude of the location and the relevant date - in this case May 2019. 

To start with, you're going to write a similar code snippet to the one you used for the BBC News website. This will call the new URL instead like so:

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

At the moment, our response is giving us the full data in the JSon file - but what if we're only interested in one bit of it?

To filter this, we're going to write a function - which is a mini program within a program. That function will extract only the data we want and return it for us. In this case, we are going to ask it to return only the category of the first crime to us. 

Replace your existing code with the following:

```javascript
var axios = require('axios')

var site = 'https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05'

axios.get(site).then(extract)

function extract(response) {
    var category = response.data[0].category
    console.log(category)
}
```

Note, the first two lines calling the library and declaring the web domain stay the same. But now we have a new function called *extract*. We have also declared a new variable called category. In real life, we tend to count starting from 1 - i.e. 1, 2, 3, 4. In code, it starts from 0 - i.e. 0, 1,2,3. Hence the code asks for the *response.data **[0]** .category to specify the first crime category. 

Try running that code using `$ node request-police.js` or whatever you named your file. You should see one result returned. 

If we want to return multiple datapoints we can adapt our code to look something like this:


```javascript
var axios = require('axios')

var site = 'https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05'

axios.get(site).then(extract)

function extract(response) {
    var month = response.data[0].month
    var category = response.data[0].category
    var latitude = response.data[0].location.latitude
    var longitude = response.data[0].location.longitude
    var row = [month, category, latitude, longitude]
    console.log(row)
}
```

Now we're asking for it to return the month, the crime category and the longitude and latitude of the crime location. Our final line `var row = [month, category, latitude, longitude] console.log(row)` is telling the computer to put the data into an array (which is a list) and print it to the console. 

Save your code and run the program again. 

Finally, instead of printing the results to the console, we will create a csv file instead. To do this, we need to install a new library called *csv-string*.

Back in your terminal, run the following to install the package `$ npm install csv-string`

We're going to load two libraries; *csv-string* and *fs*. *fs* comes with the node package so is already installed. It stands for file system as it is for doing things with files!

So the new adapted code looks like this:

```javascript
var axios = require('axios')
var csvString = require('csv-string')
var fs = require('fs')


var site = 'https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05'

axios.get(site).then(extract)

function extract(response) {
    var month = response.data[0].month
    var category = response.data[0].category
    var latitude = response.data[0].location.latitude
    var longitude = response.data[0].location.longitude
    var row = [month, category, latitude, longitude]
    var output = csvString.stringify(row)
    fs.appendFileSync('output.csv', output)
}
```

At the top we are now loading three libraries. Instead of printing a result to the console, we now have a new variable called *output* which is the result of the *csv-string* library turning our data into a string to print out into a file - *fs* appends the data to a file called `output.csv`. 

Save the new code and rerun the program. 

What happened? Something? Nothing? Computers have a way of silently executing a task and then waiting patiently for the next one. If your program has run correctly, you will probably see your command and then it promptly went back to normal waiting for another command like so: 

<img width="381" alt="Screenshot 2020-09-01 at 17 44 57" src="https://user-images.githubusercontent.com/6706325/91882565-0fe4b200-ec7b-11ea-9aee-708827d14d69.png">

But try typing `ls` to list the files in your current folder. You should have a newly created `output.csv` file there which contains your crime data. 

The final thing we're going to do is put the request on loop to get all three crimes from the month of May that year. 

This time our code is as follows:

```javascript
var axios = require('axios')
var csvString = require('csv-string')
var fs = require('fs')


var site = 'https://data.police.uk/api/crimes-at-location?lat=51.4739&lng=-0.0374&date=2019-05'

axios.get(site).then(extract)

function extract(response) {
    response.data.forEach(crime => {
    var month = response.data[0].month
    var category = response.data[0].category
    var latitude = response.data[0].location.latitude
    var longitude = response.data[0].location.longitude
    var row = [month, category, latitude, longitude]
    var output = csvString.stringify(row)
    fs.appendFileSync('output.csv', output)
    })
}
```

Within our function code, we now have `forEach` which is putting the request on loop and note we have an extra set of closing brackets at the end to close our function. 

Save the new code and rerun the file. You should now have all the crimes from May 2019 in your spreadsheet. 


### Web scraping 

Your final exercise is going to be a basic webscrape to get all of the headlines from the current BBC News homepage. 

To start with, create a new file within your *web-request* folder. Call it *scraper.js*.

Next, we need to install another library to do the scraping called Puppeteer. In your terminal type `$ npm install puppeteer` and run it.

This time we will start with the full code and I will provide some explanations below.

Copy and paste the full code into your newly created scraper file:


```javascript
var fs = require('fs')
var csvString = require('csv-string')
var puppeteer = require('puppeteer')

async function scrape() {
    var location = 'http://www.bbc.co.uk/news'
    var browser = await puppeteer.launch()
    var page = await browser.newPage()
    await page.goto(location)
    var results = await page.evaluate(getTitles)
    await browser.close()
    return results
}

function getTitles() {
    var titles = document.querySelectorAll('h3')
    var titlesText = Array.from(titles).map(title => {
        return [title.innerText]
    })
    return titlesText
}

async function run() {
    var data = await scrape()
    var output = csvString.stringify(data)
    fs.appendFileSync('output.csv', output)
}

run()
```

The code above will work if run now, but lets take a brief look at each section in turn. 

The first block of code should be very familiar by now. We are calling three libraries - *fs* to append data to files, *csv-string* to convert our extracted data to a string and *puppeteer* which is our scraping library to extract the `h3` elements from the page. 

```javascript
var fs = require('fs')
var csvString = require('csv-string')
var puppeteer = require('puppeteer')
```

The second block is our scraper function. It tells the computer to visit the BBC News homepage and launch the *Puppeteer* libary and then run another function called `getTitles`.

```javascript
async function scrape() {
    var location = 'http://www.bbc.co.uk/news'
    var browser = await puppeteer.launch()
    var page = await browser.newPage()
    await page.goto(location)
    var results = await page.evaluate(getTitles)
    await browser.close()
    return results
}
```

The third block tells our library to select the `h3` element from the html code and extract the relevant text. 

```javascript
function getTitles() {
    var titles = document.querySelectorAll('h3')
    var titlesText = Array.from(titles).map(title => {
        return [title.innerText]
    })
    return titlesText
}
```

The final block is our `run()` function which brings everything together. You can see it is asking the computer to await the result of the scrape, turn the extracted text into a string to be written to a new file called `output.csv`.

```javascript

async function run() {
    var data = await scrape()
    var output = csvString.stringify(data)
    fs.appendFileSync('output.csv', output)
}
```

Go ahead and run the full code using `$ node scraper.js` then open the resulting output file. You should see a neat spreadsheet with a list of the current headlines. 

Congratulations, you've now scraped a website using Node.js. 

For further practice, why not try to adapt the code to scrape other basic sites? Or try getting different elements off the page.

Good luck! 






