const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    origins:{
        type: String,
    },
    languages:{
        type: Array,
        default: [],
    },
    lifespan:{
        type: String,
    },
    height:{
        type: String,
    },
    skinColor:{
        type: Array,
        default: [],
    },
    hairColor:{
        type: Array,
        default: [],
    },
    weaponry:{
        type: Array,
        default: [],
    },
    characters:[{
        type: Schema.Types.ObjectId,
        ref: 'Character',
    }],
});

const Race = mongoose.model('Race', storeSchema)

module.exports = {Race}
