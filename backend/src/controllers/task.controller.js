import {Task} from '../models/task.model.js'

export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  console.log("Cookies in request:", req.cookies);
console.log("req.user:", req.user);

  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
