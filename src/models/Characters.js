const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    titles:{
        type: Array,
        default: [],
    },
    birth:{
        type: String,
    },
    death:{
        type: String,
    },
    hair:{
        type: String
    },
    race: [{
        type: Schema.Types.ObjectId,
        ref: 'Race'
    }],
});

const Character = mongoose.model('Character', storeSchema);

module.exports = {Character}


