const { Router } = require('express');
const router = Router();
const { putRace } = require('../../controllers/raceControllers/putRace');
const {validationResult} = require('express-validator');

const {idValidationRace} = require('../../middleware/idValidationRace');

router.put('/:id', idValidationRace, async (req, res) => {
    const { id } = req.params;
    const { name, origins, languages, lifespan, height, skinColor, hairColor, weaponry } = req.body;
    try {
        const error = validationResult(req)
        if(error.isEmpty()){
        const race = await putRace(id, name, origins, languages, lifespan, height, skinColor, hairColor, weaponry)
        res.status(202).json(race);
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({msg: 'No se puede actualizar la raza', error});
    }
});

module.exports = router;