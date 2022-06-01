import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const exerciseLogSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    workout: { type: ObjectId, ref: "Workout", required: true },
    exercise: { type: ObjectId, ref: "Exercise", required: true },
    times: [{
        weight: {type: Number, required: true},
        repeat: {type: Number, required: true},
        completed: { type: Boolean, default: false},
    }]
  },
  {
    // minimize: false - будет хранить пустые объекты
    minimize: false,
    // The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.
    timestamps: true,
  }
);

const ExerciseLog = mongoose.model("ExerciseLog", exerciseLogSchema);

export default ExerciseLog;
