const fs = require('fs')

const getPage = (req, res) => {
    const pathToPage = './public/pages' + req.path + '.html'
    fs.readFile(pathToPage, (error, data) => {
        if (error) {
            return res.status(404).json('Error! Such page not found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })
}

module.exports = getPage