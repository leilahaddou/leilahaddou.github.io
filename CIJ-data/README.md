# Data-driven Investigations

### Class resources

### Agenda

Day one:

* 10.00 [An Introduction to Data Journalism](#ex-1)
* 11:00 [Excel (part one)] (#ex-2)
* 12:00 [Sources in-depth] (#ex-3)
* 13:00 Lunch! 
* 14:00 The Story Memo
* 14:30 [Excel (part two)] (#ex-4)
* 16:00 [Pivot tables] (#ex-5)
* 17:00 End of day one

[Day Two](#day2)

------------------------------------------------------------------------------------------------------------
## <a name="ex-1"></a>An Introduction to Data Journalism

Hypotheses continued: 

1. Rail travel costs more in the UK than in other European countries 
2. Westminster aides are being paid by lobby groups
3. Town centre pubs are on the decline, whilst cafes are thriving

##Further reading:

Philip Meyer on [the Detroit and London riots](https://www.theguardian.com/commentisfree/2011/dec/09/riot-theory-relative-detroit-england)
Michael Kingsley: [Donald Trump and the Limits of Data Journalism](http://www.vanityfair.com/news/2016/08/donald-trump-and-the-limits-of-data-journalism)


-------------------------------------------------------------------------------------------------------------
## <a name="ex-2"></a>Excel (part one)

Find the following using the political donations data:

1. What was the largest donation by an individual?
2. Who were the top ten donors by total spend? 
3. Find the top ten donors by type; individuals, companies and trade unions.
4. Ignoring cash donations, what was the largest type of donation?
5. Who was UKIP's biggest donor?


Using the charting tools available:

1. Make a graphic showing each party's income by donation type
2. Make a graphic showing each party's income by donor status

**Importing data**

1. Download the EU referendum data from the [Electoral Commission website] (http://www.electoralcommission.org.uk/find-information-by-subject/elections-and-referendums/past-elections-and-referendums/eu-referendum/electorate-and-count-information) and upload it into a new worksheet.

2. Bring in the following hosted data on Manchester crime from this URL: "https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/data-journalism-tutorial/2016-12-greater-manchester-street.csv". *Source [data.police.uk] (https://data.police.uk/)*

3. Import the first table showing the results of the Copeland by-election [from this Wikipedia page](https://en.wikipedia.org/wiki/Copeland_by-election,_2017):

4. Import the first table showing Best Actress Oscar winners from [this Wikipedia page](https://en.wikipedia.org/wiki/List_of_Academy_Award_Best_Actress_winners_by_age)

5. Using the `IMPORTHTML` function, import the current list of MPs from [Parliament.uk](http://www.parliament.uk/mps-lords-and-offices/mps/)


*Hint: Remember the syntax* `=IMPORTDATA("URL")`

*Hint: Remember the syntax* `=IMPORTHTML("URL","table", element number)`

---------------------------------------------------------------------------------------------------------------
## <a name="ex-3"></a>Sources in-depth

1. Using advanced google search syntax, can you find a de-cassified NSA document called "Untangling the Web"?
2. There are more than a 150 "datastores" on UK government websites. Choose three that you like and explain why. 
3. Can you find an academic report from Hull university on ASBOs being used as a "badge of honour"?

**Verifying information:**

1. We often hear that the UK economy is growing at the fastest rate in the G7. Where might you find data showing annual percentage growth of GDP per country? 

2. In 2015 it was revealed that Israel exported nearly $400k worth of gold to North Korea in defiance of UN sanctions. Using [the UN ComTrade database](https://comtrade.un.org/data/), see if you find that shipment.

3. Use [Marine Traffic](https://www.marinetraffic.com/) to see what vessels are currently floating in the Thames off Deptford (just down the road from here!)

4. Now try to find the location of Philip Green's superyacht, Lionheart. 

![Lionheart](http://i2.mirror.co.uk/incoming/article8441913.ece/ALTERNATES/s615b/Sir-Philip-Green-new-superyacht-Lionheart-in-Malta.jpg)


### Further resources:

* Link to [Google's own search tips] (https://support.google.com/websearch/answer/2466433?hl=en&ref_topic=3081620)
* Jonathan Stoneman paper for the Reuters Institute [Does Open Data Need Journalism?](http://reutersinstitute.politics.ox.ac.uk/sites/default/files/Stoneman%20-%20Does%20Open%20Data%20need%20Journalism.pdf)

[UN Resources list](http://research.un.org/en/un-resources)


-----------------------------------------------------------------------------------------------------------------
## <a name="ex-4"></a>Excel (part two)

**Conditionals**

1. Using the EU referendum data, write a conditional statement to show whether each area voted leave or remain.

*Note Remember the syntax `=IF(condition, "[is true then do/write this]", "[else do/write that]")`

**Cleaning data: Split and Concatenate**

1. From your imported list of current MPs, try to split the name into separate columns using the comma as a separator 

2. Split the first 5 characters from original column of names. Now the last 4. 


### Further resources:

[Clustering in-depth](https://github.com/OpenRefine/OpenRefine/wiki/Clustering-In-Depth): A detailed guide to understanding key-collision methods

Recap [OpenRefine with Jonathan Stoneman](http://www.tcij.org/node/1471) (video)

---------------------------------------------------------------------------------------------------
## <a name="ex-5"></a>Pivot Tables

1. Using the political donor data, how many individual cash donations were made to each recipient? 

2. Create a pivot table showing who donated most frequently.

3. Go back to the Manchester crime data you imported earlier. Use a pivot table to summarise the data by crime type.

--------------------------------------------------------------------------

## <a name="day2"></a>Day two

Recap exercises:

Find the following using the political donations data:

1. What was the largest donation by an individual?
2. Who were the top ten donors by total spend? 
3. Find the top ten donors by type; individuals, companies and trade unions.
4. Ignoring cash donations, what was the largest type of donation?
5. Who was UKIP's biggest donor?

**Pivot Tables**

1. Using the political donor data, how many individual cash donations were made to each recipient? 

2. Create a pivot table showing who donated most frequently.

3. Import the Manchester crime data from this URL:"https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/data-journalism-tutorial/2016-12-greater-manchester-street.csv". Use a pivot table to summarise the data by crime type.

**Freedom of Information**

* [Information Commissioner's Office] (http://www.ico.gov.uk/)
* [What do they know](https://www.whatdotheyknow.com/) An online tool for sending and tracking FOIs (Warning: your request will be public)
* [FOI Directory](http://www.foi.directory/) A guide to FOIing public bodies
* [Wobbing EU](www.wobbing.eu) A guide to FOIing the EU and country-by-country information.
* [Ask the EU](www.asktheeu.org) EU version of What Do They Know (above) for sending and tracking FOIs to European bodies
* [Access Info](https://www.access-info.org/) An open info campaign group focussed on Europe 

**SQL**

[Link to addon] (https://addons.mozilla.org/en-GB/firefox/addon/sqlite-manager/)

And [link to download firefox] (http://www.get-firefox.org/)

[Get started guide](https://gist.github.com/hofmannsven/9164408)



