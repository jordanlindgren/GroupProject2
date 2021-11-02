const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Meme extends Model {}

// Defines the properties of an entry
Meme.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        meme_text:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_url:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        }
    }, 
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "meme",
    }
);

// Exports Entry for use in other files
module.exports = Entry;