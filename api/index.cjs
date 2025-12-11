// api/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware to allow requests from your frontend domain
// For production, replace '*' with your actual Vercel frontend URL, e.g., 'https://your-frontend-app-name.vercel.app'
app.use(cors());

// Mock product data
const products = [
  {
    id: 1,
    name: "Wireless Ergonomic Mouse",
    price: 49.99,
    description: "Comfortable design for long use.",
  },
  {
    id: 2,
    name: "Mechanical Keyboard RGB",
    price: 120.0,
    description: "Tactile switches with customizable lighting.",
  },
  {
    id: 3,
    name: '4K Ultra HD Monitor 27"',
    price: 350.5,
    description: "Stunning clarity and color accuracy.",
  },
  {
    id: 4,
    name: "USB-C Hub 7-in-1",
    price: 29.99,
    description: "Expand your laptop connectivity instantly.",
  },
];

// Define a simple home route for testing the API
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend server is running successfully on Vercel!",
    apiEndpoint: "/api/products",
  });
});

// Define the products API route
app.get("/api/products", (req, res) => {
  // Return the list of products as JSON
  res.status(200).json(products);
});

// Start the server locally (Vercel uses its own execution environment)
// This block ensures the app runs when you test it locally with `node api/index.js` or `npm start`
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export the Express app instance for Vercel's serverless function handler
module.exports = app;
