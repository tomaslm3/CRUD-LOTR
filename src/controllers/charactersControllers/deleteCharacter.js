const { Character } = require('../../models/Characters');


const deleteCharacter =  (id) => {
    try {
         
        let character = Character.findByIdAndDelete(id)
        return character;

    } catch (error) {
        console.log("Error delete character controller", error);
    }
}

module.exports = { deleteCharacter };