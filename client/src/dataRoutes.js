import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout";
import NewExercise from "./components/pages/NewExercise/NewExercise";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: "/auth",
    exact: false,
    component: Auth,
    auth: false,
  },
  {
    path: "/new-workout",
    exact: false,
    component: NewWorkout,
    auth: true,
  },
  {
    path: "/new-exercise",
    exact: false,
    component: NewExercise,
    auth: true,
  },
];
