import Message from '../models/message.model.js';

async function findAll() {
    return await Message.findAll({
        order: [
            ['created_at', 'ASC']
        ]
    });
}

async function create(message) {
    return await Message.create(message);
}

async function update(id, message) {
    const entity = await Message.findByPk(id);

    if(entity === null) {
        throw new Error('Message not found');
    }

    await entity.set(message);
    return await entity.save();
}

async function destroy(id) {
    const entity = await Message.findByPk(id);

    if (entity === null) {
        throw new Error('Message not found');
    }

    return await entity.destroy();
}

export default {
    findAll,
    create,
    update,
    destroy
}