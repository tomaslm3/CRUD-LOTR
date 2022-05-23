const { Character } = require('../models/Characters');

const idValidationCharacter = (req, res, next) => {
    const { id } = req.params;
    Character.findById(id)
        .then(character => {
            if (character) {
                next();
            } else {
                res.status(404).json({ msg: 'No se encontró el personaje con esa id' });
            }
        })
        .catch(err => {
            res.status(501).json({ msg: 'No se puede llamar a el personaje por id', err });
        }
        );
        
}

module.exports = {idValidationCharacter}
