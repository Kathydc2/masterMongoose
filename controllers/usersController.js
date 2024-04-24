const User = require("../models/users")

const fetchAllUsers = async (req, res) => {
    // 1. Get all Notes from DB
    const users = await User.find({});
    // 2. Send the notes back as a response
    res.json({users: users});
};

const fetchUser = async (req, res) => {
    // 1. Get id off the url
    const userId = req.params.id;
    // 2. Find the note associated with that id
    const user = await User.findById(userId)
    // 3. Send response with that note as the payload
    res.json({user: user});
};

const createUser = async (req, res) => {
    // 1. Get data from req.body
    console.log(`BODY: ${req.body}`)
    const name = req.body.name
    const email = req.body.email
    // const {title,body} = req.body (another way to write)
    // 2. Create note
    const user = await User.create({
        name: name,
        email:email
    });
    // 3. Respond with new copy of Note
    res.json({user: user});
};

const updateUser = async (req, res) => {
    // 1. Get id off the url
    const userId = req.params.id
    // 2. Get data off the id
    const {name,email} = req.body
    // 3. Find and Update Note
    const user = await User.findByIdAndUpdate(userId,{
        name: name,
        email: email
    });
    // 4. Retrieve updatedNote and send it as a response
    const updatedUser = await User.findById(userId)
    res.json({user: updatedUser}) 
};

const deleteUser = async (req, res) => {
   
    // 1. Get the id off the url
    const userId = req.params.id
    // 2. Delete the record
    await User.findByIdAndDelete(userId)
    // 3. Send a Response
    res.json({success: "Record has been deleted successfully"});
};

module.exports = {
    fetchAllUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
}