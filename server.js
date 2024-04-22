require("dotenv").config();
// allows.env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our mongoose connection into application

const Note = require("./models/note");
const notesController = require("./controllers/notesController.js")
const cors = require("cors");
// Receiving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json

app.use(cors());
connectToDb();
// This initializes our connectToDB() function
//---------------------------------Reqs/Middleware


//---------------------------------Routing
//-----------------------  GET all notes - [READ]
app.get("/", (req,res) => { 
    res.send("This is a Landing Page")
});

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