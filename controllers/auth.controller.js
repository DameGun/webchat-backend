import authService from "../services/auth.service.js";

async function register(req, res, next) {
    const userData = req.body.user;

    try {
        const data = await authService.register(userData);

        res.status(201).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function login(req, res, next) {
    const userData = req.body.user;

    try {
        const data = await authService.login(userData);
        const jwt = await authService.createJwt(userData);

        res.status(200).json({
            token: jwt,
            user: data
        })
    }
    catch (err) {
        next(err);
    }
}

export default {
    register,
    login
}