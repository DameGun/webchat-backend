import { body } from 'express-validator';

const registerValidator = {
    errMessage: 'Error occured while validating register request data',
    chain: [
        body('user.username', 'Username should be provided').exists(),
        body("user.password",
        "Password must contain at least 8 symbols and 1 letter"
        ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
        body('confirmation_password', 'Confirmation password must be equal to password')
        .if(value => value == body('password').value)
    ]
}

const loginValidator = {
    errMessage: 'Error occured while validating login request data',
    chain: [
        body('user.username', 'Username should be provided').exists(),
        body('user.password', 'Password should be provided').exists()
    ]
}

export {
    loginValidator,
    registerValidator
}