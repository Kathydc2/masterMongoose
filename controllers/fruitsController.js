const Fruit = require("../models/fruits")

const fetchAllFruits = async (req, res) => {
    // 1. Get all Notes from DB
    const fruits = await Fruit.find({});
    // 2. Send the notes back as a response
    res.json({fruits: fruits});
};

const fetchFruit = async (req, res) => {
    // 1. Get id off the url
    const fruitId = req.params.id;
    // 2. Find the note associated with that id
    const fruit = await Fruit.findById(fruitId)
    // 3. Send response with that note as the payload
    res.json({fruit: fruit});
};

const createFruit = async (req, res) => {
    // 1. Get data from req.body
    console.log(`BODY: ${req.body}`)
    const name = req.body.name
    const color = req.body.color
    // const {title,body} = req.body (another way to write)
    // 2. Create note
    const fruit = await Fruit.create({
        name: name,
        color:color
    });
    // 3. Respond with new copy of Note
    res.json({fruit: fruit});
};

const updateFruit = async (req, res) => {
    // 1. Get id off the url
    const fruitId = req.params.id
    // 2. Get data off the id
    const {name,color} = req.body
    // 3. Find and Update Note
    const fruit = await Fruit.findByIdAndUpdate(fruitId,{
        name: name,
        color: color
    });
    // 4. Retrieve updatedNote and send it as a response
    const updatedFruit = await Fruit.findById(fruitId)
    res.json({fruit: updatedFruit}) 
};

const deleteFruit = async (req, res) => {
   
    // 1. Get the id off the url
    const fruitId = req.params.id
    // 2. Delete the record
    await Fruit.findByIdAndDelete(fruitId)
    // 3. Send a Response
    res.json({success: "Record has been deleted successfully"});
};

module.exports = {
    fetchAllFruits,
    fetchFruit,
    createFruit,
    updateFruit,
    deleteFruit
}