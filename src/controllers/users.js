import UserModel from '../models/User';

export default {
  async list(req, res, next) {
    const users = await UserModel.find({});

    res.json(users);
  },

  async show(req, res, next) {
    const user = await UserModel.findById(req.params.id);

    res.json(user);
  },

  async create(req, res, next) {
    const user = await UserModel.create(req.body);

    res.json(user);
  },

  async update(req, res, next) {
    await UserModel.update({ _id: req.params.id }, req.body);

    res.end();
  },

  async delete(req, res, next) {
    await UserModel.deleteOne({ _id: req.params.id });
    
    res.end();
  },
};