const { Race } = require('../../models/Races')

const postRace = async (name, origins, languages, lifespan, height, skinColor, hairColor, weaponry) => {
    try {
        const race = new Race({ name, origins, languages, lifespan, height, skinColor, hairColor, weaponry });
        await race.save();
        return race;
    } catch (error) {
        console.log("Error create race controller", error);
    }
}

module.exports = { postRace };