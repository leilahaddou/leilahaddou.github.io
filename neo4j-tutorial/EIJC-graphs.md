# Graph Databases 

## EIJC/ Data Harvest

[Presentation](https://docs.google.com/presentation/d/1fR0-s6XQ3SrJuHJdV-6ZgqqdsXUAqXz6FUeSupWiDNw/edit?usp=sharing) 

Link to stories mentioned in presentation
[How China bought its way into Cambodia](https://www.ft.com/content/23968248-43a0-11e6-b22f-79eb4891c97d)
[Free podcast from the FT on China/Cambodia](https://www.acast.com/ft-investigations/cambodiafallsforchinascorporateembrace?autoplay?autoplay)
[Is social media empowering Dutch populism?](https://www.ft.com/content/b1830ac2-07f4-11e7-97d1-5e720a26771b)

## Building your database

**Create a node**
```CREATE (x:Label {property:"Value"})```

For example, to create a node for me and a node for EIJC I might use the following:
```CREATE (l:Person {name:"Leila Haddou"})```
```CREATE (e:Event {eventTitle:"EIJC"})```

**Create a relationship**

```CREATE (l)-[r:IS_AT]->(e)```


**Using ```MERGE``` instead of ```CREATE```**

```CREATE``` will blindly create nodes regardless of what the data is or if the same instance occurs again in the dataset.
Using ```MERGE``` instead of ```CREATE```will go through each line of the CSV and look for duplicates. Where it finds instances of the same thing, it will merge them into one. *Use with care* 

**Adding attributes**

Data which appears in the curly brackets of our code is a property or attribute, i.e. <{name: line.Name}>. To add multiple properties, do the same within the brackets separated by a comma like so: <{donorName: line.Name, donorStatus: line.Party}>

**Importing Data**

From a URL: ```LOAD CSV WITH HEADERS FROM "urladdress.csv" AS line```

**Class data**

[Referendum data](https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/neo4j-tutorial/brexit-donations.csv)

[Open Corporates data](https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/neo4j-tutorial/brexit-donations-officers.csv)

From a local file (use the filepath on your computer): ```LOAD CSV WITH HEADERS FROM "file:///Users/leilahaddou/Documents/Graphdata/pef.csv" AS line```

*Please note Windows files will use backslashes like so :\\\*



