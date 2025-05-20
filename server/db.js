const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(

    //!Para usar la base de datos Remota 01/09:
    "postgresql://postgres:veoKbRHaujRTzHJVjrafNjCudSzSIDor@hopper.proxy.rlwy.net:11138/railway",


    //!Para usar la base de datos local
    // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/huellitas`,



    {
        logging: false,// set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize, DataTypes));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
    ToDoList,
    ToDo,
} = sequelize.models;

//ToDoList.hasMany(ToDo, { foreignKey: 'listId' /*, onDelete: 'CASCADE'*/ });
//ToDo.belongsTo(ToDoList, { foreignKey: 'listId' });

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};