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

------------------------------------------------------------------------------------------------------------
## <a name="ex-1"></a>An Introduction to Data Journalism

Hypotheses continued: 

1. 
2.
3.

-------------------------------------------------------------------------------------------------------------
## <a name="ex-2"></a>Excel (part one)

Find the following using the political donations data:

1. What was the largest donation by an individual?
2. Who were the top ten donors by total spend? 
3. Find the top ten donors by type; individuals, companies and trade unions.
4. Ignoring cash donations, what was the largest type of donation?
5. Who was UKIPs biggest donor?


Using the charting tools available:

1. Make a graphic showing each party's income by donation type
2. Make a graphic showing each party's income by donor status

**Importing data**

1. Download the EU referendum data from the [Electoral Commission website] (http://www.electoralcommission.org.uk/find-information-by-subject/elections-and-referendums/past-elections-and-referendums/eu-referendum/electorate-and-count-information) and upload it into a new worksheet.

2. Bring in the following hosted data on Manchester crime from this URL: "https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/data-journalism-tutorial/2016-12-greater-manchester-street.csv". *Source [data.police.uk] (https://data.police.uk/)

*Note: Remember the syntax `=IMPORTDATA("URL")`

3. Import the first table showing the results of the Copeland by-election [from this Wikipedia page](https://en.wikipedia.org/wiki/Copeland_by-election,_2017):

*Note: Remember the syntax `=IMPORTHTML("url","table",number [of the **element** on the page])`

4. Import the first table showing Best Actress Oscar winners from [this Wikipedia page](https://en.wikipedia.org/wiki/List_of_Academy_Award_Best_Actress_winners_by_age)

5. Using the IMPORTHTML function, import the current list of MPs from [Parliament.uk](http://www.parliament.uk/mps-lords-and-offices/mps/)

---------------------------------------------------------------------------------------------------------------
## <a name="ex-3"></a>Sources in-depth

1. Using advanced google search syntax, can you find a de-cassified NSA document called "Untangling the Web"?
2. There are more than a 150 "datastores" on UK government websites. Choose three that you like and explain why. 
3. Can you find an academic report from Hull university on ASBOs being used as a "badge of honour"?

**Verifying information:**

1. We often hear that the UK economy is growing at the fastest rate in the G7. Where might you find data showing annual percentage growth of GDP per country? 

2. In 2009 it was revealed that Israel sent over $400k worth of gold to North Korea in defiance of UN sanctions. Using [the UN ComTrade database](https://comtrade.un.org/data/), see if you find that shipment.


### Further resources:

Link to [Google's own search tips] (https://support.google.com/websearch/answer/2466433?hl=en&ref_topic=3081620)

**Freedom of Information**

* [Information Commissioner's Office] (http://www.ico.gov.uk/)
* [What do they know]( An online tool for sending and tracking FOIs (Warning: your request will be public)
* [FOI Directory](http://www.foi.directory/)
* [Wobbing EU](www.wobbing.eu)
* [Ask the EU](www.asktheeu.org) EU version of What Do They Know (above) for sending and tracking FOIs to European bodies
* [Access Info](https://www.access-info.org/) An open info campaign group focussed on Europe 

[UN Resources list](http://research.un.org/en/un-resources)


-----------------------------------------------------------------------------------------------------------------
## <a name="ex-4"></a>Excel (part two)

**Conditionals**

1. Using the EU referendum data, write a conditional statement to show whether each area voted leave or remain.

*Note Remember the syntax <=IF(condition, "[is true then do/write this]", "[else do/write that]")>

**Cleaning data: Split and Concatenate**

1. From your imported list of current MPs, try to split the name into separate columns using the comma as a separator 

2. Split the first X characters from X. Now the last X. 

2. Import X from X . Using concatenate, merge the X ... FINISH

### Further resources:

[Clustering in-depth](https://github.com/OpenRefine/OpenRefine/wiki/Clustering-In-Depth): A detailed guide to understanding key-collision methods

Recap [OpenRefine with Jonathan Stoneman](http://www.tcij.org/node/1471) (video)

---------------------------------------------------------------------------------------------------
## <a name="ex-5"></a>Pivot Tables

1. Using the political donor data, how many individual cash donations were made to each recipient? 

2. Go back to the Manchester crime data you imported earlier. Use a pivot table to summarise the data by crime type.


