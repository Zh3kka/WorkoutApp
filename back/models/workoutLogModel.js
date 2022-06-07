import mongoose from "mongoose";

const {
  ObjectId
} = mongoose.Schema;

const workoutLogSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  workout: {
    type: ObjectId,
    ref: "Workout",
    required: true
  },
  completed: {
    type: Boolean,
    default: true
  },
  exerciseLogs: [{
    type: ObjectId,
    ref: "ExerciseLog",
  }, ],
}, {
  // minimize: false - будет хранить пустые объекты
  minimize: false,
  // The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.
  timestamps: true,
});

const WorkoutLog = mongoose.model("WorkoutLog", workoutLogSchema);

export default WorkoutLog;