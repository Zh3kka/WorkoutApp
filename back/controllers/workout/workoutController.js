import asyncHandler from "express-async-handler";
import Workout from "../../models/workoutModel.js";

//*         @desc    Create new workout         *//
//*         @route   POST /api/workouts         *//
//*         @access  Private                    *//

export const createNewWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body;

  const workout = await Workout.create({
    name,
    exercises: exerciseIds,
  });

  res.json(workout);
});

//*         @desc    Get workout                    *//
//*         @route   POST /api/workouts/:id         *//
//*         @access  Private                        *//

export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id)
    .populate("exercises")
    .lean();

  const minutes = Math.ceil(workout.exercises.length * 3.75);

  res.json({ ...workout, minutes });
});

//*         @desc    get workouts           *//
//*         @route   GET /api/workouts      *//
//*         @access  Private                *//

export const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({}).populate("exercises");

  res.json(workouts);
});

//*         @desc    update workout                          *//
//*         @route   PUT /api/workouts/log/completed         *//
//*         @access  Private                                 *//

export const updateWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds, workoutId } = req.body;

  const workout = await Workout.findById(workoutId);

  if (!workout) {
    res.status(404);
    throw new Error("Данная тренировка не найдена!");
  }

  workout.name = name;
  workout.exercises = exerciseIds;

  const updatedWorkout = await workout.save();

  res.json(updatedWorkout);
});

//*         @desc    delete workouts               *//
//*         @route   DELETE /api/workouts          *//
//*         @access  Private                       *//

export const deleteWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.body;

  const workout = await Exercise.findById(workoutId);

  if (!workout) {
    res.status(404);
    throw new Error("Данное упражнение не найдено!");
  }

  await workout.save();

  res.json({ message: "Workout has been removed" });
});
