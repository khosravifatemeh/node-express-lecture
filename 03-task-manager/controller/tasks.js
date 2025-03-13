const Task = require("../models/task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    if (!task) {
      return res.status(404).json({ msg: `No Task with id :${task}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    res.status(201).json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate(
      { _id: taskId },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ msg: `No Task with id :${task}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId }, req.data);
    if (!task) {
      return res.status(404).json({ msg: `No Task with id :${task}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
