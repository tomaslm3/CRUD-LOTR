const { Router } = require('express');
const { getRaceByName } = require('../../controllers/raceControllers/getRaceByName');
const router = Router();
const { getRaces} = require('../../controllers/raceControllers/getRaces');

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        if(name) {
            const race = await getRaceByName(name);
            if(race.length !== 0) {
                res.status(200).json(race);
            } else {
                res.status(204).json({msg: 'No se encontró la raza'});
            }
        } else {
            const races = await getRaces();
            if(races.length !== 0) {
            res.status(200).json(races);
            } else {
                res.status(204).json({msg: 'No se encontraron razas'});
            }
        }
    } catch (error) {
        res.status(501).json({msg: 'No se puede llamar a todas las razas', error});
    }
});

module.exports = router;