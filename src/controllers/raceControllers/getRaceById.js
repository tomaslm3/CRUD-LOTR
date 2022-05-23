const { Race } = require('../../models/Races');


const getRaceById= async (id) => {
    try {
        const races = await Race.findById(id).populate('characters', {race:0});
        return races;
    } catch (error) {
        console.log("Error get race by id controller", error);
    }
}

module.exports = { getRaceById };