import User from '../models/userModel.js';
import Admin from '../models/adminModel.js';
// @desc    Register a new user
// @route   POST /api/signup
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({ message: 'Login successful', userId: user._id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const adminUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });

    // Check if admin exists and the password matches
    if (admin && admin.password === password) {
      res.status(200).json({ message: 'Login successful', userId: admin._id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export {registerUser, authUser, adminUser}
