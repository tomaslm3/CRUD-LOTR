const { Character } = require('../../models/Characters');


const getCharacterByName = async (name) => {
    try {
        const characters = await Character.findOne({
            name: {
                $regex: new RegExp(name, 'i')
            }
        }).populate('race', {characters:0});
        return characters;
    } catch (error) {
        console.log("Error get character by name controller", error);
    }
}

module.exports = { getCharacterByName };