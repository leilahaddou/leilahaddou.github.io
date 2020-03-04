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
CREATE (e:Event {name:'NICAR 2020'})
```


### Creating relationships

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 39 04" src="https://user-images.githubusercontent.com/6706325/75668991-18c7dd00-5c72-11ea-9be6-8d604483699c.png">

``` 
 CREATE (p:Person {name:'Leila Haddou'})
 CREATE (e:Event {name:'NICAR 2020'})
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

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 06" src="https://user-images.githubusercontent.com/6706325/75921283-7c930700-5e26-11ea-830c-599912c6d0ca.png">

```
MATCH (x)
RETURN (x)
LIMIT 10
```

### Exact match

<img width="50"  align="left" alt="Screenshot 2020-03-04 at 14 42 14" src="https://user-images.githubusercontent.com/6706325/75921437-b8c66780-5e26-11ea-9ce4-6976cb836349.png">

```
MATCH (d.donor)
WHERE d.donor = 'Lakshmi Mittal'
RETURN d
```

### Fuzzy matching

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 21" src="https://user-images.githubusercontent.com/6706325/75921823-6e91b600-5e27-11ea-8a8f-b9998e98b812.png">

``` 
MATCH (d.donor)
WHERE d.donor =~ '.*Bamford.*'
RETURN d
```

TEXT HERE

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 45" src="https://user-images.githubusercontent.com/6706325/75922013-d0522000-5e27-11ea-9a6c-783a889aa645.png">

```
MATCH (d)-[t:DONATED_TO]->(r)
WHERE d.donor =~ '.*Bamford.*'
RETURN DISTINCT r.name, d.name
```

### Searching by value

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 57" src="https://user-images.githubusercontent.com/6706325/75922098-f677c000-5e27-11ea-97f3-1b2c36156555.png">

```
MATCH (d)-[t:DONATED_TO]->(r)
WHERE t.value >= 1000000
RETURN d
```


## Further support and resources

