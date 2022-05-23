const { Race } = require('../../models/Races');


const deleteRace =  (id) => {
    try {
         
        let race = Race.findByIdAndDelete(id)
        return race;

    } catch (error) {
        console.log("Error delete race controller", error);
    }
}

module.exports = { deleteRace };