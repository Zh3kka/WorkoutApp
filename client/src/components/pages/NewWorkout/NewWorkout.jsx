import React, { useState } from "react";
import ReactSelect from "react-select";

import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/bg-auth.jpg";
import Loader from "../../UI/loader/loader";
import Alert from "../../UI/Alert/Alert";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { $api } from "../../api/api";

const NewWorkout = () => {
  const [name, setName] = useState("");
  const [exercisesCurrent, setExercisesCurrent] = React.useState([]);

  const { data, isSuccess } = useQuery(
    "list exercises",
    () =>
      $api({
        url: "/exercises",
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    mutate,
    isLoading,
    error,
    isSuccess: isSuccessMutate,
  } = useMutation(
    "Create new workout",
    ({ exIds }) =>
      $api({
        url: "/workouts",
        type: "POST",
        body: { name, exerciseIds: exIds },
      }),
    {
      onSuccess() {
        setName("");
        setExercisesCurrent([]);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const exIds = exercisesCurrent.map((ex) => ex.value);

    mutate({
      exIds,
    });
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Create new workout" />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text="Something went wrong" />}
        {isSuccessMutate && <Alert text="Workout created" />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <Link to="/new-exercise" className="dark-link">
            Add new exercise
          </Link>
          {isSuccess && data && (
            <ReactSelect
              classNamePrefix="select2-selection"
              placeholder="Exercises..."
              title="Exercises"
              options={data.map((ex) => ({
                value: ex._id,
                label: ex.name,
              }))}
              value={exercisesCurrent}
              onChange={setExercisesCurrent}
              isMulti={true}
            />
          )}
          <Button text="Create" callback={() => {}}></Button>
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
