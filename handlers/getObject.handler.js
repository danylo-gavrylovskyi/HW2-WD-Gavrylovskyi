const ducks = require('../data/ducks')
const geese = require('../data/geese')
const hens = require('../data/hens')

const getObject = (req, res) => {
    const {type, id} = req.params

    if (type && id) {
        const foundObj = getTypeObjects(type).find(obj => obj.id === +id)
        if (foundObj) {
            return res.json(foundObj)
        }
        else {
            return res.status(404).json('Such object not found')
        }
    }

    if (type) {
        return res.status(200).json(getTypeObjects(type))
    }

    return res.status(200).json({ducks, geese, hens})
} 

const getTypeObjects = (type) => {
    if (type === 'ducks') return ducks
    else if (type === 'geese') return geese
    else if (type === 'hens') return hens
    else return {msg: 'Such type does not exist'}
}

module.exports = getObject
