import { DataTypes } from 'sequelize';
import { db } from '../config/db.js';
import Message from './message.model.js';

const User = db.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
});

User.hasMany(Message, {
    foreignKey: 'user_id'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
})

export default User;