const fs = require('fs')
const path = require('path')

const getFile = (req, res) => {
    const {filename} = req.params
    const ext = path.extname(filename)
    let contentType, folder

    if (ext === '.jpg') {
        contentType = 'image/jpeg'
        folder = '/images/'
    }
    else if (ext === '.png') {
        contentType = 'image/png'
        folder = '/images/'
    }
    else if (ext === '.mp3') {
        contentType = 'audio/mpeg'
        folder = '/audio/'
    }
    else {
        return res.status(400).json('Error! Unknown extension')
    }

    const pathToFile = './public' + folder + filename
    fs.readFile(pathToFile, (error, fileData) => {
        if (error) {
            return res.status(404).json('Error! File not found')
        }

        res.writeHead(200, {'Content-Type': contentType})
        res.end(fileData)
    })
}

module.exports = getFile
