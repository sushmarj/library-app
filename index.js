const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors= require('cors');

const employeeRouter= require('./router/employee.router.js');
const booksRouter = require('./router/books.router.js');
const returnRouter = require('./router/return.router.js');
const app = express();

mongoose.connect(config.get('mongoConnectString'));
mongoose.connection.on("connected", ()=>{
    console.log("connected to mongodb on port 27017");
})
mongoose.connection.on("error", (error)=>{
    console.log(error);
})

app.use(express.json());
app.use(cors());
app.use('/api/Employee', employeeRouter);
app.use('/api/Books', booksRouter);
app.use('/api/Return', returnRouter);
app.get('/', (req, res)=>{
    res.send('hello sushma')
})

const port = process.env.PORT||config.get('port')
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})