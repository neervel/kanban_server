import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import router from './routes/router.js'
import {dbURL} from './config.js'
mongoose.Promise = global.Promise

const port = 5000
const url = dbURL
const dbOptions = { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api', router)

mongoose.connect(url, dbOptions)

mongoose.connection
  .once('open', () => {
    console.log('Mongoose - connect successfuly')
    app.listen(process.env.PORT || port, () => console.log("Server start on port " + port))
  })
  .on('error', error => {
    console.warn(error)
  })
