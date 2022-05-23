const { Race } = require('../../models/Races');

const getRaces = async () => {
    try {
        const races = await Race.find({}).populate('characters',{
            race: 0
        });
        return races;
    } catch (error) {
        console.log("Error get races controller", error);
    }
}

module.exports = { getRaces };