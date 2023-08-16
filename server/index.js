const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

const cors = require('cors');

dotenv.config();

const url = process.env.MONGO_URL

mongoose.connect(
    url,).then(()=> console.log('Connected to DB')).catch((err)=> console.log('Error occured: ' + err))

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/orders", orderRoute);

app.listen(3000, ()=>{
    console.log('listening on port ');
});