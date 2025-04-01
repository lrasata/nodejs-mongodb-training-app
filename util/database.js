const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rmliantsoa:png92H71hTPcGXYY@cluster0.pbpiaac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    useUnifiedTopology: true
});

const mongoConnect = callback => {
    client.connect()
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




