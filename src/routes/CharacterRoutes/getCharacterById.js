const { Router } = require('express');
const { getCharacterById } = require('../../controllers/charactersControllers/getCharacterById');
const router = Router();

const { idValidationCharacter } = require('../../middleware/idValidationCharacter');


router.get('/:id', idValidationCharacter, async (req, res) => {
    const { id } = req.params;
    try {
            const character = await getCharacterById(id);
                res.status(200).json(character);
    } catch (error) {
        res.status(501).json({msg: 'No se puede llamar a el personaje por id', error});
    }
});

module.exports = router;