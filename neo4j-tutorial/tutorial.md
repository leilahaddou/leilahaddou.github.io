# Exploring networks with graph databases 

* [Slides, part 1](https://docs.google.com/presentation/d/1xG1f7YpJDGi_HLlKrjNJLSY2MSaguLgEsiEMDy3wV4M) 
* [Slides, part 2](https://docs.google.com/presentation/d/1WUUlDD-edFxVUYvEub0oZ5W5sdEbvOL3qwO2c6VyK7g)

## Class data

[Referendum data](https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/neo4j-tutorial/brexit-donations.csv)

[Open Corporates data](https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/neo4j-tutorial/brexit-donations-officers.csv)

## Building your database

**Create a node**

```
CREATE (x:Label {property:"Value"})
```

For example, to create a node for me and a node for Summer School I might use the following:
```
CREATE (l:Person {name:"Leila Haddou"})
```
```
CREATE (e:Event {eventTitle:"Summer School"})
```

**Create a relationship**

```
CREATE (l)-[r:IS_AT]->(e)
```

**Using ```MERGE``` instead of ```CREATE```**

```CREATE``` will blindly create nodes regardless of what the data is or if the same instance occurs again in the dataset.
Using ```MERGE``` instead of ```CREATE```will go through each line of the CSV and look for duplicates. Where it finds instances of the same thing, it will merge them into one. *Use with care* 

**Adding attributes**

Data which appears in the curly brackets of our code is a property or attribute, i.e. <{name: line.Name}>. To add multiple properties, do the same within the brackets separated by a comma like so: <{donorName: line.Name, donorStatus: line.Party}>

**Importing data**

From a URL: 
```
LOAD CSV WITH HEADERS FROM "urladdress.csv" AS line
```

From a local file (use the filepath on your computer): 
```
LOAD CSV WITH HEADERS FROM "file:///Users/leilahaddou/Documents/Graphdata/pef.csv" AS line
```

*Please note Windows files will use backslashes like so :\\\*
