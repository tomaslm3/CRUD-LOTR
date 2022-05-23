const { Router } = require('express');
const router = Router();
const { postCharacter } = require('../../controllers/charactersControllers/postCharacter');
const { check, validationResult, body } = require('express-validator');

router.post('/', async (req, res) => {
    const { name, titles, birth, death, hair, race } = req.body;
    try {
        const error = validationResult(req)
        if(error.isEmpty()){
            const character = await postCharacter(name, titles, birth, death, hair, race);
            res.status(201).send(character);
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({msg: 'No se puede crear el personaje', error});
    }
});

module.exports = router;