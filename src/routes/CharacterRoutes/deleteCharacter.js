const { Router } = require('express');
const { deleteCharacter } = require('../../controllers/charactersControllers/deleteCharacter')
const router = Router();

const { idValidationCharacter } = require('../../middleware/idValidationCharacter');

router.delete('/:id', idValidationCharacter, async (req, res) => {
    const { id } = req.params;
    try {
            const character = await deleteCharacter(id);
            res.json({msg: "Personaje eliminado", character});
            
    } catch (error) {
        res.status(400).json({msg: 'Error al eliminar el personaje', error});
    }
});

module.exports = router;