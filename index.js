import express from "express";
import routes from './routes/routes.js'
import bodyParser from "body-parser";
const {json, urlencoded}=bodyParser
import cors from 'cors'
const app=express()
app.use(cors())
const port ='9000'
app.listen(port, ()=>{
    console.log("Running at the prot"+port)
})
// app.get('/exchange/:data', (req, res) => {
//     console.log('as')
//    console.log(req.params.data)
// });
app.use('/exchange', routes)
app.use('http://localhost:9000', routes)