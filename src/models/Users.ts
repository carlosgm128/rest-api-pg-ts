import { DataTypes } from "sequelize";
import { sequelize } from '../database/database'

const User = sequelize.define(
    "user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "usuarios"
    });

export default User;