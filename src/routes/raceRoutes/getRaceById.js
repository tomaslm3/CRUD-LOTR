const { Router } = require('express');
const { getRaceById } = require('../../controllers/raceControllers/getRaceById');
const router = Router();

const { idValidationRace } = require('../../middleware/idValidationRace');


router.get('/:id', idValidationRace, async (req, res) => {
    const { id } = req.params;
    try {
            const race = await getRaceById(id);
                res.status(200).json(race);
    } catch (error) {
        res.status(501).json({msg: 'No se puede llamar a la raza por id', error});
    }
});

module.exports = router;