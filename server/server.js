const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();

// connect MongoDB database
connectDB();

// init middleware
app.use(express.json({extended: false}))
app.use(bodyParser.urlencoded({limit:"50mb", extended: true}));
app.use(bodyParser.json({limit:"50mb", extended: true}));
app.use(cors());
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.get('/', (req, res) => res.send("API running"))
app.use("/user", require("./routes/user"))
app.use("/auth", require("./routes/auth"))




const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started at ${PORT}`))