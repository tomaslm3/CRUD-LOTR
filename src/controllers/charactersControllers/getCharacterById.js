const { Character } = require('../../models/Characters');


const getCharacterById= async (id) => {
    try {
        const characters = await Character.findById(id).populate('race', {characters:0});
        return characters;
    } catch (error) {
        console.log("Error get character by id controller", error);
    }
}

module.exports = { getCharacterById };