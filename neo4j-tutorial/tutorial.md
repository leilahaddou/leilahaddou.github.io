# Exploring networks with graph databases 

## Class data

* [Political donation data](https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/donations-companies-cash.csv) 
* [OpenCorporates data](https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/theresa-companies-cash-directors.csv)

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

**Using `MERGE` instead of `CREATE`**

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

## Loading all the data

```
LOAD CSV WITH HEADERS FROM 'https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/donations-companies-cash.csv' AS row
MERGE (d:Donor {
	name: row.DonorName,
	status: row.DonorStatus,
	companyNumber: row.CompanyRegistrationNumber
})
MERGE (r:Recipient {
	name: row.RegulatedEntityName
})
CREATE (d)-[:DONATED_TO { date: row.ReceivedDate, value: toInteger(row.Value) }]->(r)
```

```
LOAD CSV WITH HEADERS FROM 'https://github.com/leilahaddou/leilahaddou.github.io/blob/master/theresa-companies-cash-directors.csv' AS row
MATCH (r) WHERE r.companyNumber = row.companyNumber
MERGE (o:Officer {
	name: row.officerName,
	address: row.officerAddress
})
MERGE (o)-[:IS_AN_OFFICER_OF { startDate: row.officerStartDate }]->(r)
```
