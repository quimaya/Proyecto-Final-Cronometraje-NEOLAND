// Library
const express = require('express');
const cors = require('cors');


// DB
const { connectDb } = require('./helpers/db');

// Port
const PORT = process.env.PORT || 8000;


const EventosRoutes = require('./api/eventos/eventos.routes');
const UserRoutes = require('./api/user/user.routes');
const ClubRoutes = require('./api/clubs/clubs.routes');
const BlogRoutes = require('./api/blog/post.routes');



const app = express();

//Cloudinary

const {setUpCloudinary} = require("./middleware/cloudinary/setup")

setUpCloudinary ();

// Connect DataBase
connectDb();



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }));



app.use('/api/eventos', EventosRoutes );
app.use('/api/users', UserRoutes );
app.use('/api/clubs', ClubRoutes );
app.use('/api/blog', BlogRoutes );




app.use('*', (req, res, next) => {
    const error = new Error()
    error.status = 404
    error.message = 'Route not found'
    return next(error)
})

// Error handler
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
})
// Enable Language
app.disable('x-powered-by')



// Open Listener Server
app.listen(PORT, () => {
    console.log('Server is running in http://localhost:' + PORT)
});