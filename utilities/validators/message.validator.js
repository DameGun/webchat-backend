import { body } from 'express-validator';

const createValidator = {
    errMessage: 'Error occured while validating message create request data',
    chain: [
        body('user_id', 'Invalid user_id value').isUUID(),
        body('user_name', 'Username field should be provided').exists().trim(),
        body('content', 'Invalid message content field').notEmpty().trim()
    ]
}

const updateValidator = {
    errMessage: 'Error occured while validating message update request data',
    chain: [
        body('user_id', 'Invalid user_id value').isUUID(),
        body('content', 'Invalid message content field').notEmpty().trim()
    ]
}

const deleteValidator = {
    errMessage: 'Error occured while validating message update request data',
    chain: [
        body('user_id', 'Invalid user_id value').isUUID()
    ]
}

export {
    createValidator,
    updateValidator,
    deleteValidator
}