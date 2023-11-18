import User from '../models/userSchema.js';

// Function to add a new user
const addUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = new User({ email, password, name });
    await newUser.save();
    res.status(201).json({ message: 'User added!', newUser });
  } catch (error) {
    console.error('Error adding user: ', error);
    res.status(500).json({ message: 'Check Server' });
  }
};

export { addUser };
