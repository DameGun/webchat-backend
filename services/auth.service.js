import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function register(user) {
    const checkUsername = await User.findOne({
        where: {
            username: user.username,
        }
    });

    if (checkUsername !== null) {
        throw new Error('Credentials already in use');
    }

    const entity = await User.create({
        username: user.username,
        password: await bcrypt.hash(user.password, 10)
    });
    return entity;
}

async function login(user) {
    const entity = await User.findOne({
        where: {
            username: user.username
        }
    })

    if (entity === null) {
        throw new Error('Invalid credentials');
    }

    const validCredentials = await bcrypt.compare(user.password, entity.password);

    if (!validCredentials) {
        throw new Error('Invalid credentials');
    }

    return entity;
}

async function createJwt(user) {
    return jwt.sign(
        {
            user_name: user.username,
            user_id: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "3h",
        }
    )
}

export default {
    register,
    login,
    createJwt
}