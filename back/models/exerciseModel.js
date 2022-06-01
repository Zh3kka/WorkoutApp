import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    times: {
        type: Number,
        required: true,
    },
    imageId: {
      type: Number,
      required: true,
    },
  },
  {
    // minimize: false - будет хранить пустые объекты
    minimize: false,
    // The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
