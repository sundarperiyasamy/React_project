// install packages
const express = require("express")
const mongoose = require("mongoose")
const bparser = require("body-parser")
const cors = require("cors")
const bcrypt = require('bcrypt');
const multer = require("multer")
const path = require("path")
const fs = require("fs")

// import schema
const userschema = require("./model/usermodel")
const productschema = require("./model/Product")
const cartsch = require('./model/cart')
const Admin = require('./model/admin')

// initialize
const app = express()
///////selvakumar
// middelware
app.use(cors())
app.use(bparser.json())
// app.use(bparser.urlencoded())

// getting image from local uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// alternate url port.no:127.0.0.1(connecting mongo db)
mongoose.connect("mongodb://localhost:27017/user")
    .then(() => {
        console.log("mongo db is connected");
    })
    .catch((err) => {
        console.log(err);
    })

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// handling http request

// register
app.post("/register", async (req, res) => {

    try {
        const { name, email, password } = req.body
        const newuser = new userschema({ name, email, password })
        await newuser.save()
        // console.log(newuser);
        // res.json(newuser)
        res.status(200).json({ msg: "register is succesfully" })
    }
    catch (error) {
        console.log("error for registering ", error);
        res.status(500).json({ msg: "error in register" })
    }
})

// login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const oldUser = await userschema.findOne({ email });

        if (!oldUser) {
            return res.status(400).json({ msg: "Invalid email" });
        }

        const isPasswordMatch = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        res.status(200).json({ msg: "Login successfully" });
    } catch (error) {
        console.log(error, "Error in login");
        res.status(500).json({ msg: "Error in login" });
    }
});


// checkout
app.post('/product/details', async (req, res) => {
    const { cartitems } = req.body;

    try {
        const order = await cartsch.create(cartitems);
        res.status(201).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get user orders
app.get('/product/getorders', async (req, res) => {
    try {
        const products = await cartsch.find(); // Retrieve all products
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// add new product
app.post("/addproduct", upload.single('image'), async (req, res) => {
    try {
        const { title, price } = req.body;
        const image = req.file.path.replace(/\\/g, "/"); // Replace backslashes with forward slashes
        console.log("File path:", image); 
        const newProduct = new productschema({ title, price, image });
        await newProduct.save();
        res.status(200).json({ msg: "Product added successfully" });
    } catch (error) {
        console.log("Error adding product", error);
        res.status(500).json({ msg: "Error in adding product" });
    }
});


// update the product
app.put("/updateproduct/:id", upload.single('image'), async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price } = req.body;
        const updateData = { title, price };

        if (req.file) {
            const image = req.file.path.replace(/\\/g, "/");
            updateData.image = image;
        }

        const updatedProduct = await productschema.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json({ msg: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.log("Error updating product", error);
        res.status(500).json({ msg: "Error in updating product" });
    }
});

// get the all product
app.get("/gettingallproducts", async (req, res) => {
    try {
        const products = await productschema.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("Error retrieving products", error);
        res.status(500).json({ msg: "Error in retrieving products" });
    }
});

app.delete("/deleteproduct/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productschema.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }

        // Delete file in local 
        const imagePath = deletedProduct.image;
        if (imagePath) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error("Error deleting image file:", err);
                } else {
                    console.log("Image file deleted successfully");
                }
            });
        }

        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
        console.log("Error deleting product", error);
        res.status(500).json({ msg: "Error in deleting product" });
    }
});


// admin login
async function setupDefaultAdmin() {
    try {
        const existingAdmin = await Admin.findOne({ username: 'admin' });

        if (!existingAdmin) {

            // admin password
            await Admin.create({
                username: 'admin',
                password: 'admin123',
            });
            console.log('Default admin created');
        }
    } catch (err) {
        console.error('Error setting up default admin:', err);
    }
}

setupDefaultAdmin();

// admin login form post
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the admin exists
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Validate password
        if (admin.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// access
app.listen(4000, () => {
    console.log("server is running");
})