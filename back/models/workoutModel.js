import mongoose from "mongoose";

const {
  ObjectId
} = mongoose.Schema;

const workoutSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  exercises: [{
    type: ObjectId,
    ref: "Exercise",
    required: true,
  }, ],
}, {
  // minimize: false - будет хранить пустые объекты
  minimize: false,
  // The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.
  timestamps: true,
});

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;