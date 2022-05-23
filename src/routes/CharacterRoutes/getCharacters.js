const { Router } = require('express');
const { getCharacterByName } = require('../../controllers/charactersControllers/getCharacterByName');
const router = Router();
const { getCharacters } = require('../../controllers/charactersControllers/getCharacters');

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        if(name) {
            const character = await getCharacterByName(name);
            if(character.length !== 0) {
                res.status(200).json(character);
            } else {
                res.status(204).json({msg: 'No se encontró el personaje'});
            }
        } else {
            const characters = await getCharacters();
            if(characters.length !== 0) {
            res.status(200).json(characters);
            } else {
                res.status(204).json({msg: 'No se encontraron personajes'});
            }
        }
    } catch (error) {
        res.status(501).json({msg: 'No se puede llamar a todos los personajes', error});
    }
});

module.exports = router;