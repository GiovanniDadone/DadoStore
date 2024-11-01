
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://giovanni:trollunderthebridge@cluster0.5b2m5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbName = "dadostore";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB Atlas!");
        return client.db(dbName);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = { connectDB, client };
