var { Router } = require('express');
var router = Router();
const { check } = require('express-validator');

const postCharacter = require('./CharacterRoutes/postCharacter');
const getCharacters = require('./CharacterRoutes/getCharacters');
const getCharacterById = require('./CharacterRoutes/getCharacterById');
const putCharacter = require('./CharacterRoutes/putCharacter');
const deleteCharacter = require('./CharacterRoutes/deleteCharacter');
const postRace = require('./RaceRoutes/postRace');
const getRaces = require('./RaceRoutes/getRaces');
const putRace = require('./RaceRoutes/putRace');
const deleteRace = require('./raceRoutes/deleteRace');
const getRaceById = require('./RaceRoutes/getRaceById');

const { nameValidationRace } = require('../middleware/nameValidationRace');
const express = require('express');


/* home page. */
router.use('/', express.static('public'));

// Character routes
router.use('/character/create', [
    check('name').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('name').isLength({ max: 20 }).withMessage('El nombre no puede tener más de 20 caracteres'),
    check('name').isAlpha().withMessage('El nombre solo puede contener letras'),
    check('name').not().isEmpty().withMessage('El nombre no puede estar vacío'),
    check('race').not().isEmpty().withMessage('La raza no puede estar vacia'),
    nameValidationRace
], postCharacter);
router.use('/character/update', [
    check('name').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('name').isLength({ max: 20 }).withMessage('El nombre no puede tener más de 20 caracteres'),
    check('name').isAlpha().withMessage('El nombre solo puede contener letras'),
    check('name').not().isEmpty().withMessage('El nombre no puede estar vacío'),
], putCharacter);
router.use('/characters', getCharacters);
router.use('/character/id', getCharacterById);
router.use('/character/delete', deleteCharacter);

// Race routes
router.use('/race/create', [
    check('name').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('name').isLength({ max: 20 }).withMessage('El nombre no puede tener más de 20 caracteres'),
    check('name').isAlpha().withMessage('El nombre solo puede contener letras'),
    check('name').not().isEmpty().withMessage('El nombre no puede estar vacío'),
], postRace)
router.use('/race/update', [
    check('name').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('name').isLength({ max: 20 }).withMessage('El nombre no puede tener más de 20 caracteres'),
    check('name').isAlpha().withMessage('El nombre solo puede contener letras'),
    check('name').not().isEmpty().withMessage('El nombre no puede estar vacío'),
], putRace)
router.use('/races', getRaces)
router.use('/race/id', getRaceById);
router.use('/race/delete', deleteRace);

module.exports = router;
