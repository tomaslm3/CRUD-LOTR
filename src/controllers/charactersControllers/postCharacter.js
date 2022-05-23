const { Character } = require('../../models/Characters');
const { Race } = require('../../models/Races');

const postCharacter = async (name, titles, birth, death, hair, race) => {
    try {
        const selectedRace = await Race.findOne({
            name: race
        })
        const character = new Character({ name, titles, birth, death, hair, race: selectedRace._id });
        await character.save();

        selectedRace.characters = selectedRace.characters.concat(character._id)
        await selectedRace.save()

        return character;
    } catch (error) {
        console.log("Error create character controller", error);
    }
}

module.exports = { postCharacter };