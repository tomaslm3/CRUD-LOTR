const { Race } = require('../../models/Races');

const putRace =  (id, name, origins, languages, lifespan, height, skinColor, hairColor, weaponry) => {
    try {
         
        let race = Race.findByIdAndUpdate(
            id,
            {
                name, origins, languages, lifespan, height, skinColor, hairColor, weaponry
            }
        )
        return race._update;

    } catch (error) {
        console.log("Error put race controller", error);
    }
}

module.exports = { putRace };