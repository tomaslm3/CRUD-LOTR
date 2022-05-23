const { Router } = require('express');
const { deleteRace } = require('../../controllers/raceControllers/deleteRace');
const router = Router();

const { idValidationRace } = require('../../middleware/idValidationRace');

router.delete('/:id', idValidationRace, async (req, res) => {
    const { id } = req.params;
    try {
            const race = await deleteRace(id);
            res.json({msg: "Raza eliminada", race});
            
    } catch (error) {
        res.status(400).json({msg: 'Error al eliminar la raza', error});
    }
});

module.exports = router;