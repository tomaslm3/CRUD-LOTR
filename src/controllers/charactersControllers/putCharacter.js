const { Character } = require('../../models/Characters');


const putCharacter =  (id, name, titles, birth, death, hair) => {
    try {
         
        let character = Character.findByIdAndUpdate(
            id,
            {
                name,
                titles,
                birth,
                death,
                hair,
            }
        )
        return character._update;

    } catch (error) {
        console.log("Error put character controller", error);
    }
}

module.exports = { putCharacter };