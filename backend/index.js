const express = require('express')
const dotenv = require('dotenv')
const connectdb = require('./db');
const cookieParser = require('cookie-parser');
const UserRouter = require('./routes/UserRoutes')
const NotesRouter = require('./routes/NotesRoutes')
const cloudinary = require('cloudinary').v2;
const cors = require('cors')

dotenv.config();
connectdb();

const app = express()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
}),

app.use(cors())

//Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use(cookieParser());

//Routes
app.use('/api/users', UserRouter);
app.use('/api/notes', NotesRouter);

//server listening
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})