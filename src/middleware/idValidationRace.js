const { Race } = require('../models/Races');

const idValidationRace = (req, res, next) => {
    const { id } = req.params;
    Race.findById(id)
        .then(race => {
            if (race) {
                next();
            } else {
                res.status(404).json({ msg: 'No se encontrĂ³ la raza con esa id' });
            }
        })
        .catch(err => {
            res.status(501).json({ msg: 'No se puede llamar a la raza por id', err });
        }
        );
        
}

module.exports = {idValidationRace}
