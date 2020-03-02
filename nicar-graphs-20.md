# Eploring networks with graph databases
### NICAR 2020 New Orleans

This tutorial was written for an hour-long introduction to graph databases for the annual NICAR conference. 



### What is a graph database?


## Building our graph database
Neo4j uses the Cypher query language to both build and interrogate the database. 

To start with, we'll be using three Cypher commands - `CREATE`, `LOAD CSV` and `MERGE` to build our graph. 

### Creating nodes
<img width="50" alt="Screenshot 2020-03-02 at 10 02 17" src="https://user-images.githubusercontent.com/6706325/75666920-9b4e9d80-5c6e-11ea-8ac9-39ff76710a80.png">

``` 
CREATE (p:Person {name:'Leila Haddou'})
CREATE (e:Event {title: 'NICAR 2020'})
```

### Creating relationships
``` 
 CREATE (p:Person {name:'Leila Haddou'})
 CREATE (e:Event {title: 'NICAR 2020'})
 CREATE (p)-[r:IS_AT]->(e)
 ```
 
### Loading data from a csv file

``` 
LOAD CSV WITH HEADERS FROM 'https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/nicar-20-graph-donations%20(1).csv' AS row
MERGE (d:Donor {name:row.DonorName, status:row.DonorStatus})
MERGE (r:Recipient {name:row.RegulatedEntityName})
CREATE (d)-[dt:DONATED_TO {date:row.AcceptedDate, type:row.DonationType, value:toInteger(row.Value)}]->(r)
```

## Querying our graph database 


### Exact match


### Fuzzy matching

### Searching by value


## Further support and resources

