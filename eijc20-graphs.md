# Exploring networks with graph databases


This tutorial was written for an hour-long introduction to graph databases for the annual EIJC/ Dataharvest conference. 

The link to the session presentation can be [found here](https://docs.google.com/presentation/d/1a7fdtif8i3i8pW5cuEjX_SHxjykxn_zbubHT9n5UIaY/edit?usp=sharing).

### What is a graph database?
Most data journalists are used to doing their work in some form of *relational* database, namely spreadsheets or SQL which organise data in tabular-like structures. Graphs are different. Data is instead organised into nodes (the datapoints or entities) and the relationships between them which are often called 'edges'.

Below shows the same dataset displayed as a spreadsheet then as a graph:

<img width="658" alt="Screenshot 2020-03-06 at 09 45 33" src="https://user-images.githubusercontent.com/6706325/76098561-5046ca00-5f8f-11ea-8b9b-0d52cc04462d.png">

In this session, we'll build a basic political donation graph using UK political donations to current British Prime Minister Boris Johnson and his Conservative and Unionist Party from January 2019 to January 2018.


## Building our graph database
Neo4j uses the Cypher query language to both build and interrogate the database. 

To start with, we'll be using three Cypher commands - `CREATE`, `LOAD CSV` and `MERGE` to build our graph. 

### Creating nodes

We start with the keyword `CREATE` to create nodes and relationships in Neo4j. This is followed by a circular bracket which will contain the data and attributes for our node. Note the structure of the Cypher language resembles the circle it is creating. Attributes are given within curly brackets within our node brackets like so:

`CREATE (x:Label { property: 'Value' })`


Let's go ahead and create our first two nodes.

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 02 17" src="https://user-images.githubusercontent.com/6706325/75666920-9b4e9d80-5c6e-11ea-8ac9-39ff76710a80.png">


``` 
CREATE (p:Person {name:'Leila Haddou'})
CREATE (e:Event {name:'NICAR 2020'})
```

You have now created two nodes. Click on the symbol <img width="30" alt="Screenshot 2020-03-06 at 09 58 15" src="https://user-images.githubusercontent.com/6706325/76099692-1b3b7700-5f91-11ea-963b-8223aed059d2.png"> on the top left corner of your screen. You should now see nodes under the Node Labels section. Select the one with the star to see your newly created nodes. You may find that one is blank. That's easily changed as shown below:

<img width="637" alt="Screenshot 2020-03-06 at 10 01 08" src="https://user-images.githubusercontent.com/6706325/76099921-79685a00-5f91-11ea-8a07-2e2f88e06777.png">

### Creating relationships

We haven't yet told Neo4j that the two nodes are created in any way. To do this, we use a third `CREATE` command and this time, rather than type the full code to create a node and it's attributes, we're just going to use the alias or nickname we created when making our node. 

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 39 04" src="https://user-images.githubusercontent.com/6706325/75668991-18c7dd00-5c72-11ea-9be6-8d604483699c.png">

``` 
 CREATE (p:Person {name:'Leila Haddou'})
 CREATE (e:Event {name:'NICAR 2020'})
 CREATE (p)-[r:IS_AT]->(e)
 ```
 
### Loading data from a csv file

In reality, we're likely to be using pre-existing datasets than making nodes from scratch. 

We're now going to bring in a hosted csv file from a link using the `LOAD CSV` command. We have said to bring the data in 'AS row'. You'll see in the next section that this is vital to link the graph to our data file.

**Using `MERGE` instead of `CREATE`**

So far we have only used `CREATE` to make our nodes. But `CREATE` will blindly create nodes regardless of what the data is or if the same name or entity occurs repeatedly in the dataset.

Using `MERGE` instead of `CREATE`will go through each row of the CSV and look for duplicates. Where it finds instances of the same thing, it will merge them into one. *Use with care!*

**Adding attributes**

Data which appears in the curly brackets of our code is a property or attribute, i.e. `{ name: row.DonorName}`. To add multiple properties, do the same within the brackets separated by a comma like so: `{ name:DonorName, donorStatus:row.DonorStatus }`. These must match the column name in your data file exactly. Case matters as well. 

Finally, because we are bringing in values, we need to tell Neo4j that this attribute is a number. This way, we'll be able to use some of the more powerful functions like searching for donations over a certain amount later on. To do this, we type 'toInteger' followed by the relevant column in brackets like so: `value:toInteger(row.Value)`

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 39 19" src="https://user-images.githubusercontent.com/6706325/75669105-54fb3d80-5c72-11ea-80e5-c42d1b28eab7.png">

``` 
LOAD CSV WITH HEADERS FROM 'https://raw.githubusercontent.com/leilahaddou/leilahaddou.github.io/master/nicar-20-graph-donations%20(1).csv' AS row
MERGE (d:Donor {name:row.DonorName, status:row.DonorStatus})
MERGE (r:Recipient {name:row.RegulatedEntityName})
CREATE (d)-[dt:DONATED_TO {date:row.AcceptedDate, type:row.DonationType, value:toInteger(row.Value)}]->(r)
```

We have now created our political donation database! 

## Querying our graph database 

For the querying part of our sessions we'll be using four other Cypher commands to do our analysis. They are `MATCH`, `LIMIT`, `WHERE` and `RETURN`.

We're going to start very simply by asking Neo4j to find us any 10 nodes and return them to us. 

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 06" src="https://user-images.githubusercontent.com/6706325/75921283-7c930700-5e26-11ea-830c-599912c6d0ca.png">

```
MATCH (x)
RETURN x
LIMIT 10
```
This isn't particularly helpful, so now let's try searching for a donor for whom we know their exact name. 

### Exact match

We start again with the `MATCH` query and use the brackets to indicate we want a donor node. The `WHERE` keyword is used for us to specify what conditions that node should meet. So here, we are saying that our donor node should have a name that exactly matches the steel magnate Lakshmi Mittal.

<img width="50"  align="left" alt="Screenshot 2020-03-04 at 14 42 14" src="https://user-images.githubusercontent.com/6706325/75921437-b8c66780-5e26-11ea-9ce4-6976cb836349.png">

```
MATCH (d:Donor)
WHERE d.name = 'Lakshmi Mittal'
RETURN d
```

### Fuzzy matching

Often, we don't necessary know exactly how a person's name will appear. This is especially true of databases that have been filled in manually. So this time, let's do a fuzzy match to find if either the owners of the JCB manufacturers, the Bamford Family, or indeed their companies have been giving money to either Boris Johnson or his party. To do this, we add a tild `~` after the `=` and include `.*` before or after (or maybe both to indicate a wildcard search. 

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 21" src="https://user-images.githubusercontent.com/6706325/75921823-6e91b600-5e27-11ea-8a8f-b9998e98b812.png">

``` 
MATCH (d:Donor)
WHERE d.name =~ '.*Bamford.*'
RETURN d
```
If I wanted a quick way to just see a list of each unique entity that had donated during the time period, I could write a query using the `DISTINCT` keyword after `RETURN` as shown below. 

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 45" src="https://user-images.githubusercontent.com/6706325/75922013-d0522000-5e27-11ea-9a6c-783a889aa645.png">

```
MATCH (d)-[t:DONATED_TO]->(r)
WHERE d.name =~ '.*Bamford.*'
RETURN DISTINCT r.name, d.name
```

### Searching by value
Finally, let's do something with the value of the donation and look for anyone who gave over £100,000 during that year. To do this, we're using the greater than symbol `>` and then specifying the amount. 

<img width="50" align="left" alt="Screenshot 2020-03-04 at 14 42 57" src="https://user-images.githubusercontent.com/6706325/75922098-f677c000-5e27-11ea-97f3-1b2c36156555.png">

```
MATCH (d)-[t:DONATED_TO]->(r)
WHERE t.value >= 100000
RETURN d
```

It is possible to bring additional datasets into our graph. Here is a [link to an earlier presentation](https://docs.google.com/presentation/d/1zE8usdZS0WOZ8TEJzXpFYfT8Ui85SdKw11f-pEuImBk/edit) which explains how to do that: 

## Further support and resources

It's a good idea to have a look at the official [Neo4j Cypher Refcard](https://neo4j.com/docs/cypher-refcard/current/) which outlines all the commands you can use within the database. 

Neo4j also has a number of Sandboxes including the Panama Papers and Twitter for you to practice learning different ways to query data with Cypher. 
