const { Race } = require('../models/Races')

const nameValidationRace = (req, res, next) => {
    let { race } = req.body
    Race.findOne({ name: race})
    .then(race => {
        if(race) {
            next()
        } else {
            res.status(404).json('La raza no especificada no existe')
        }
    })
    .catch(err => {
        res.status(404).json('Error al buscar la raza', err)
    })
}

module.exports = { nameValidationRace }