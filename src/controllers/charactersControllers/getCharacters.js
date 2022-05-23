const { Character } = require('../../models/Characters');

const getCharacters = async () => {
    try {
        const characters = await Character.find({}).populate('race', {characters:0});
        return characters;
    } catch (error) {
        console.log("Error get characters controller", error);
    }
}

module.exports = { getCharacters };