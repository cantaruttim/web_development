// create our model
// ORM
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usernametitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Posts;
};