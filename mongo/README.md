# Mongo basics
<li> Unstructured (NoSQL) Database </li>
<li> A database contains Collections (kind of like tables) which store Documents (JSONs) , kind of like Rows</li>
<li> JSON Objects are stored internally as BSON, doesn't make a difference to me, but BSONs are easier to lookup and support more datatypes </li>

# CRUD

To start a mongodb server locally, run `mongod --config /usr/local/etc/mongod.conf --fork`.
To connect to that server and start the mongo shell, run `mongo`

## C

1. Create a new database using use <db_name>
2. "db" now points to that database
3. db.<collection_name>.insert() --> takes a single document or an array of them and inserts into the current collection

## R

1. To show all collections in the current db, first switch to it using "use <db_name>"
2. show collections --> shows all collections (tables) in the current db
3. db.collection.find() --> show all documents in this collection, printed out in json format
4. db.collection.find({query: value}), for example, .find({age: 17}) --> returns all documents that have the age attribute set to 17
* if you want to just find one, use .findOne(), returns the first match

## U

To update a record, use db.collection.update() [there is updateOne and updateAll, check docs accordingly].
update() takes 2 arguments. One is a selector, passed in as a json object. This selects documents based on the specified attributes. 
The second argument is another JSON object. This contains a key-value pair where the key is "$set". This tells mongo to change something. The value is ANOTHER json object containing the attributes and new values. These can also be new attributes, no problem. 
The second argument (the object) can contain other key-value pairs too, such as $changeDate, etc etc, each of these modifies the existing document in some way. Check the documentation.

## D

To delete a document. db.collection.delete()/deleteOne/deleteMany and give it a json object with selectors. deleteMany({}) will delete all documents from the collection.

## Additional operators

To find records based on nested attributes, use ".". 
Use range operators to select records with a particular attribute in a range. $gt, $in, $le, --> check the docs.
Logical operators ($or/$and/$not) can be combined with these other attributes to form more powerful queries.
