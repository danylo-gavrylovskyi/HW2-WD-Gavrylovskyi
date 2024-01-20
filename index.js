const express = require('express')
const cors = require('cors')

const getPage = require('./handlers/getPage.handler')
const getFile = require('./handlers/getFile.handler')
const getObject = require('./handlers/getObject.handler')
const getDocs = require('./handlers/getDocs.handler')

const port = 3001

const app = express()
app.use(express.json())

const originFunction = (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
        callback(null, true);
    }
    else {
        callback(new Error('Not allowed by CORS'));
    }
}

const whitelist = ['http://localhost:3000', 'http://localhost:4000']
const corsOptions = {
    origin: originFunction
}

app.use(cors(corsOptions))
app.listen(port, () => console.log(`Server working on port ${port}`))

app.get('/html1', getPage)
app.get('/html2', getPage)
app.get('/file/:filename', getFile)
app.get('/objects/:type/:id', getObject)
app.get('/objects/:type', getObject)
app.get('/objects', getObject)
app.get('/info', getDocs)
