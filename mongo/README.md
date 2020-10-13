# Mongo basics
<li> Unstructured (NoSQL) Database </li>
<li> A database contains Collections (kind of like tables) which store Documents (JSONs) , kind of like Rows</li>
<li> JSON Objects are stored internally as BSON, doesn't make a difference to me, but BSONs are easier to lookup and support more datatypes </li>

# CRUD

To start a mongodb server locally, run 'mongod --condig /usr/local/etc/mongod.conf --fork`.
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
