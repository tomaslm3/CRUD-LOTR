const mongoose = require('mongoose');
require('dotenv').config();
// const fs = require('fs');
// const path = require('path');

const { MONGO_CNN } = process.env;

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos conectada');
    } catch (error) {
        console.log("Error al conectar con la base de datos");
    }
}

// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, './models'))
//     .filter(file => file.indexOf('.') !== 0 && (file !== basename) && (file.slice(-3) === '.js'))
//     .forEach(file => {
//         modelDefiners.push(require(path.join(__dirname, './models', file)));
//     });

// modelDefiners.forEach(model => model(dbConnection));

// let entries = Object.entries(mongoose.models);
// console.log(entries);


module.exports = { dbConnection }