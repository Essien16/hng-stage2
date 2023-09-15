const User = require("../model/User");
const Joi = require("joi");

//to get all the users in the database
const getUser = async (req, res) => {
  try {
    const users = await User.find({}, 'id name'); 
    if (users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

//to get a single user in the database
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId }, 'id name');
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

//to create a new user and throws an error if a user with the same name already exists.
const createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ name: req.body.name });
        if (existingUser) {
          return res.status(400).send("User with the same name already exists.");
        }
        const { error } = validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        let user = new User({
            name: req.body.name
        });
        user = await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send("An internal error occured on the server while creating the user.")
    };
};

//to update an existing user
const updateUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findOneAndUpdate(
      req.params.userId,
      { name: req.body.name },
      { new: true }
    );

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

 //to delete an existing user
const deleteUser = async (req, res) => {
    try {
      const user = await User.findOneAndRemove(req.params.user_id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
};


function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().required()
    });
    return schema.validate(user);
}

module.exports = {
    getUser,
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser
}