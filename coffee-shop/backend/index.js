const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // To handle JSON data

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

let cartItems = [];

const products = require('./data/products');

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});
app.get('/cart', (req, res) => {
    res.json(cartItems);
});

app.post('/cart', (req, res) => {
    const { id, quantity } = req.body;
    if (!id || !quantity) {
        return res.status(400).json({ message: 'Invalid input' });
    }
    const productDetails = products.find(p => p.id === id);
    // Example product structure; you may want to fetch product details from your products array
    const newItem = { id, productName: productDetails.productName, price: productDetails.price, quantity };
    cartItems.push(newItem); // Add the new item to the cart
    res.json(cartItems); // Return the updated cart items
});
app.delete('/cart/:id', (req, res) => {
    const itemID = parseInt(req.params.id);
    cartItems = cartItems.filter(item => item.id !== itemID);
    res.json(cartItems);
})

// Get a specific product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});