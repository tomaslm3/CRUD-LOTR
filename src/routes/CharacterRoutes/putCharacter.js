const { Router } = require('express');
const router = Router();
const { putCharacter } = require('../../controllers/charactersControllers/putCharacter');
const {validationResult} = require('express-validator');

const { idValidationCharacter } = require('../../middleware/idValidationCharacter');

router.put('/:id', idValidationCharacter, async (req, res) => {
    const { id } = req.params;
    const { name, titles, birth, death, hair } = req.body;
    try {
        const error = validationResult(req)
        if(error.isEmpty()){
        const character = await putCharacter(id, name, titles, birth, death, hair)
        res.status(202).json(character);
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({msg: 'No se puede actualizar el personaje', error});
    }
});

module.exports = router;