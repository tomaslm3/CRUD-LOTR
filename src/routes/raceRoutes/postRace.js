const { Router } = require('express');
const router = Router();
const { postRace } = require('../../controllers/raceControllers/postRace');
const {validationResult} = require('express-validator');

router.post('/', async (req, res) => {
    const { name, origins, languages, lifespan, height, skinColor, hairColor, weaponry } = req.body;
    try {
        const error = validationResult(req)
        if(error.isEmpty()){
        const race = await postRace(name, origins, languages, lifespan, height, skinColor, hairColor, weaponry);
        res.status(201).json(race);
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({msg: 'No se puede crear la raza', error});
    }
});

module.exports = router;