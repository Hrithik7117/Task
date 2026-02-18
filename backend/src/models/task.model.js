// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//   title: { type: String,
//      required: true 
//   },
//   description: String,
//   completed: { 
//     type: Boolean,
//      default: false },
//   user: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "User" } 
// }, { timestamps: true });

// export const Task= mongoose.model("Task", taskSchema);

import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task must have a title'],
    trim: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export const Task =mongoose.model("Task",taskSchema)