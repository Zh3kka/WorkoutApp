import styles from "./SingleWorkout.module.scss";

import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/SingleWorkout-bg.jpg";
import Loader from '../../UI/loader/loader'

import { $api } from "../../api/api";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import Alert from "../../UI/Alert/Alert";

const ListWorkouts = () => {
  const history = useHistory();

  const { data, isSuccess } = useQuery(
    "get workouts",
    () =>
      $api({
        url: `/workouts`,
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    mutate: createWorkoutLog,
    isLoading,
    isSuccess: isSuccessMutate,
    error,
  } = useMutation(
    "Create new workout log",
    ({ workoutId }) =>
      $api({
        url: "/workouts/log",
        type: "POST",
        body: { workoutId },
      }),
    {
      onSuccess(data) {
        history.push(`/workout/${data._id}`);
      },
    }
  );

  return (
    <>
      <Layout bgImage={bgImage} heading="Workout list" />
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {error && <Alert type="error" text={error} />}
        {isSuccessMutate && <Alert text="Workout log created" />}
        {isLoading && <Loader />}
        {isSuccess && (
          <div className={styles.wrapper}>
            {data.map((workout, idx) => (
              <div className={styles.item} key={`workout ${idx}`}>
                <button
                  aria-label="Create new workout"
                  onClick={() =>
                    createWorkoutLog({
                      workoutId: workout._id,
                    })
                  }
                >
                  <span>{workout.name}</span>
                </button>
              </div>
            ))}
          </div>
        )}
        {isSuccess && data?.length === 0 && (
          <Alert type="warning" text="Workouts not found" />
        )}
      </div>
    </>
  );
};

export default ListWorkouts;
