import messageService from "../services/message.service.js";

async function findAll(wsHandler) {
    const messages = await messageService.findAll();
    wsHandler.sendMessage('connection', messages);
}

function create(wsHandler) {
  return async (req, res, next) => {
    const reqMessage = req.body;

    try {
      const data = await messageService.create(reqMessage);
      res.status(201).json(data);
      wsHandler.sendMessage('create', data);
    } catch (err) {
      next(err);
    }
  };
}

function update(wsHandler) {
  return async (req, res, next) => {
    const id = req.params.id;
    const reqMessage = req.body;

    try {
      await messageService.update(id, reqMessage);
      const data = await messageService.findAll();
      wsHandler.sendMessage('update', data);
    } catch (err) {
      next(err);
    }
  };
}

function destroy(wsHandler) {
  return async (req, res, next) => {
    const id = req.params.id;

    try {
      await messageService.destroy(id);
      const data = await messageService.findAll();
      wsHandler.sendMessage('destroy', data);
    } catch (err) {
      next(err);
    }
  };
}

export default {
  findAll,
  create,
  update,
  destroy,
};
