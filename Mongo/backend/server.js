const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/coffee-store', {}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(5001, () => {
        console.log('Server running on port 5001');
    });
}).catch(err => console.log(err));