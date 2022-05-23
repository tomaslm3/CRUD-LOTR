const { Race } = require('../../models/Races');


const getRaceByName = async (name) => {
    try {
        const races = await Race.findOne({
            name: {
                $regex: new RegExp(name, 'i')
            }
        }).populate('characters', {race:0});
        return races;
    } catch (error) {
        console.log("Error get race by name controller", error);
    }
}

module.exports = { getRaceByName };