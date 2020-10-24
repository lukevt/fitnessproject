const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');


const app = express();

// connect MongoDB database
connectDB();

// init middleware
app.use(express.json({extended: false}))
app.use(cors());

app.get('/', (req, res) => res.send("API running"))
app.use("/user", require("./routes/user"))



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started at ${PORT}`))