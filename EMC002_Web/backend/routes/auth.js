import express from 'express';
import User from '../models/User.js'; // Adjust the path as necessary

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        // Save user without hashing the password
        const newUser = new User({ email, password, firstName, lastName });
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        return res.status(500).json({ message: "Error registering user.", error });
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found." });
    }
    // Compare plain password directly
    if (user.password !== password) {
        return res.status(400).json({ message: "Invalid password." });
    }
    return res.status(200).json({ message: "Login successful!", user: { email, firstName: user.firstName, lastName: user.lastName } });
});

router.get('/user/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ email: user.email, firsName: user.firstName, lastName: user.lastName });
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving user.", error });
    }
})

export default router;