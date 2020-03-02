# Exploring networks with graph databases


This tutorial was written for an hour-long introduction to graph databases for the annual NICAR conference in New Orleans 2020. 

### What is a graph database?


## Building our graph database
Neo4j uses the Cypher query language to both build and interrogate the database. 

To start with, we'll be using three Cypher commands - `CREATE`, `LOAD CSV` and `MERGE` to build our graph. 

### Creating nodes

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 02 17" src="https://user-images.githubusercontent.com/6706325/75666920-9b4e9d80-5c6e-11ea-8ac9-39ff76710a80.png">

``` 
CREATE (p:Person {name:'Leila Haddou'})
CREATE (e:Event {title: 'NICAR 2020'})
```


### Creating relationships

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 39 04" src="https://user-images.githubusercontent.com/6706325/75668991-18c7dd00-5c72-11ea-9be6-8d604483699c.png">

``` 
 CREATE (p:Person {name:'Leila Haddou'})
 CREATE (e:Event {title: 'NICAR 2020'})
 CREATE (p)-[r:IS_AT]->(e)
 ```
 
### Loading data from a csv file

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 39 19" src="https://user-images.githubusercontent.com/6706325/75669105-54fb3d80-5c72-11ea-80e5-c42d1b28eab7.png">

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

