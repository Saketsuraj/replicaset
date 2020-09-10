var mongoose = require("mongoose");
var uri = 'mongodb://localhost/test?poolSize=4';
mongoose.connect(uri, options);
mongoose.createConnection(uri, { replset: { poolSize: 4 }});
var options = {
  db: { native_parser: true },
  server: { poolSize: 4 },
  replset: { rs_name: 'rs0' },
  user: 'mongoadmin',
  pass: 'password',
  readPreference: 'nearest'
}
options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
mongoose.connect(uri, options);

mongoose.connect('mongodb://mongoadmin:password@127.0.1.2:27017,127.0.1.3:27017/test',options);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});



//Declaring Schema
var Schema = mongoose.Schema;

// define a schema
var personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

// compile our model
var Person = mongoose.model('Person', personSchema, "myCollection");

// create a document
var bad = new Person({
    name: { first: 'Walter', last: 'White' }
});

console.log(bad.name.first + ' ' + bad.name.last); // Walter White

// MongoDB will create the _id when inserted
bad.save(function(err, doc) {
  if (err) return console.error(err);
  console.log("Document inserted succussfully!");
});

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Person.findOne({ 'name.last': 'White' }, 'name', function (err, person) {
  if (err) return handleError(err);
  console.log('%s %s', person.name.first, person.name.last) // Space Ghost is a talk show host.
})
