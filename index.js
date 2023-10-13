const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

// dynamic port
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
// to get (req.body) ata chara bosy undefine thakbe.
app.use(express.json());

// msiamislam12345
// OEeCXfMPIK90Sx31

const uri =
  "mongodb+srv://msiamislam12345:OEeCXfMPIK90Sx31@cluster0.e9we0w0.mongodb.net/?retryWrites=true&w=majority";
//
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("NEW USER: ", user);
      //
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SIMPLE CRUD IS RUNNING");
});

app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT ${port}`);
});
