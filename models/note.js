// models are a representation of our data.
// note model will contain 
// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes 
const mongoose = require("mongoose");


// ----vvvvv
const noteSchema = new mongoose.Schema({

    title: String,
    body: String

})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note