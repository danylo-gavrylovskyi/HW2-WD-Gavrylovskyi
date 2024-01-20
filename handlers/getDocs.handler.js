const fs = require('fs')

const getDocs = (req, res) => {
    fs.readFile('./data/docs.json', (error, fileData) => {
        if (error) {
            return res.status(500).json('Error! API documentation has been lost(')
        }
        res.status(200).send(fileData)
    })
}

module.exports = getDocs
