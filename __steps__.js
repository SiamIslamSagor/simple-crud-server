/**
 *              ////////////////////////
 *                      CRUD => C
 *              ////////////////////////
 *
 *
 *
 *
 *
 *  //////////////////////////////////////////////////
 *                SERVER SIDE
 * /////////////////////////////////////////
 *              MongoDb Connection
 * /////////////////////////////////////////
 * ----------------------------------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > node > View full code
 * 5. change the password  the url
 * ----------------------------------------
 * /////////////////////////////////////////
 * 1. Create  --- POST
 * 2. app.post('/users', async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. make sure you use the express.json() middleware
 * 4.5 access data form the body: const user = req.body
 * 5. const result = await userCollection.insertOne(user);
 * 6. res.send(result)
 *  //////////////////////////////////////////////////
 *                  CLIENT SIDE
 *  //////////////////////////////////////////////////
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * 4. add headers: {'content-type': 'application/json'}
 * 5.
 */

/**
 *
 *              ////////////////////////
 *                      CRUD => R
 *              ////////////////////////
 *
 * ------------------------------------------
 * READ MANY / MULTIPLE
 * ------------------------------------------
 *
 *
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray();
 * 3. res.send(result);
 *
 */

/**
 *
 *              ////////////////////////
 *                      CRUD => D
 *              ////////////////////////
 *
 * ------------------------------------------
 * SINGLE / UNIQUE DELETE
 * ------------------------------------------
 *
 *
 * 1. create app.delete("/users/:id", async (req, res) => {}
 * 2. specify unique Object to delete the right user
 * 3. const query = { _id: new ObjectId(id) };
 * 4. const result = await userCollection.deleteOne(query);
 *
 *
 *
 * -----------------------------------
 *            CLIENT SIDE
 * -----------------------------------
 *
 * 1. create dynamic url with id
 * 2. mention the DELETE method
 *
 */
