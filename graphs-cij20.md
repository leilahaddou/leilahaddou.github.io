# Exploring networks with graph databases

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
CREATE (e:Event {name:'CIJ 2020'})
```

You have now created two nodes. Click on the symbol <img width="30" alt="Screenshot 2020-03-06 at 09 58 15" src="https://user-images.githubusercontent.com/6706325/76099692-1b3b7700-5f91-11ea-963b-8223aed059d2.png"> on the top left corner of your screen. You should now see nodes under the Node Labels section. Select the one with the star to see your newly created nodes. You may find that one is blank. That's easily changed as shown below:

<img width="637" alt="Screenshot 2020-03-06 at 10 01 08" src="https://user-images.githubusercontent.com/6706325/76099921-79685a00-5f91-11ea-8a07-2e2f88e06777.png">

### Creating relationships

We haven't yet told Neo4j that the two nodes are created in any way. To do this, we use a third `CREATE` command and this time, rather than type the full code to create a node and it's attributes, we're just going to use the alias or nickname we created when making our node. 

<img width="50" align="left" alt="Screenshot 2020-03-02 at 10 39 04" src="https://user-images.githubusercontent.com/6706325/75668991-18c7dd00-5c72-11ea-9be6-8d604483699c.png">

``` 
 CREATE (p:Person {name:'Leila Haddou'})
 CREATE (e:Event {name:'CIJ 2020'})
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
