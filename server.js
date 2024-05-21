require("dotenv").config();
// allows.env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our mongoose connection into application

const Note = require("./models/note");
const Fruit = require("./models/fruits");
const User = require("./models/users")
const notesController = require("./controllers/notesController");
const fruitsController = require("./controllers/fruitsController");
const usersController = require("./controllers/usersController");
const cors = require("cors");
// Receiving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connectToDb();
// This initializes our connectToDB() function
//---------------------------------Reqs/Middleware

//---------------------------------Routing
//-----------------------  GET all users - [READ]
app.get("/", (req,res) => {
    res.send("This a Landing Page")
});
// Obj: We want to establish CRUD routes for our Users Model
app.get("/users", usersController.fetchAllUsers);

// ---------------------- GET specific User by ID - [READ]
app.get("/users/:id", usersController.fetchUser);

//----------- Create a User - [Create]
app.post("/users", usersController.createUser);

//--------------------------------- Update a Specific User - [Update]
app.put("/users/:id", usersController.updateUser);

//--------------------------------- Delete a Specific User - [Delete]
app.delete("/users/:id", usersController.deleteUser);

// - - - - - - - -  - - - - - - - -- - - - - - - - - - 
//-----------------------  GET all fruits - [READ]

// Obj: We want to establish CRUD routes for our Fruits Model
app.get("/fruits", fruitsController.fetchAllFruits);

// ---------------------- GET specific Fruit by ID - [READ]
app.get("/fruits/:id", fruitsController.fetchFruit);

//----------- Create a Fruits - [Create]
app.post("/fruits", fruitsController.createFruit);

//--------------------------------- Update a Specific Fruit - [Update]
app.put("/fruits/:id", fruitsController.updateFruit);

//--------------------------------- Delete a Specific Fruit - [Delete]
app.delete("/fruits/:id", fruitsController.deleteFruit);

// - - - - - - - -  - - - - - - - -- - - - - - - - - - 

//-----------------------  GET all notes - [READ]

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/notes", notesController.fetchAllNotes);

// ---------------------- GET specific Note by ID - [READ]
app.get("/notes/:id", notesController.fetchNote);

//----------- Create a Notes - [Create]
app.post("/notes", notesController.createNote);

//--------------------------------- Update a Specific Note - [Update]
app.put("/notes/:id", notesController.updateNote);

//--------------------------------- Delete a Specific Note - [Delete]
app.delete("/notes/:id", notesController.deleteNote);

// - - - - - - - -  - - - - - - - -- - - - - - - - - - 


app.listen(PORT, ()=>{
    console.log(`Express Server Listening on port num: ${PORT}`)
})