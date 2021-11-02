// Imports models
const Comment = require("./Comment");
const Meme = require("./Meme");
const User = require("./User");

// Defines associates between models

User.hasMany(Comment, {
    foreignKey: "user_id", 
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});


User.hasMany(Meme, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Meme.belongsTo(User, {
    foreignKey: "user_id"
});


Meme.hasMany(Comment, {
    foreignKey: "meme_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Meme, {
    foreignKey: "meme_id"
});

// Allows models to be used in other files
module.exports = {
    Comment, 
    Meme, 
    User,
};