import React, { useState } from "react";
import cn from "classnames";
import { useMutation } from "react-query";
import { $api } from "../../api/api";

import Loader from "../../UI/loader/loader";
import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/NewExercise-bg.jpg";
import styles from "./NewExercise.module.scss";
import Alert from "../../UI/Alert/Alert";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";

const data = ["chest", "legs", "biceps", "shoulders", "hit"];

const NewExercise = () => {
  const [name, setName] = useState("");
  const [times, setTimes] = useState(0);
  const [imageName, setImageName] = useState("chest");

  const { isSuccess, mutate, isLoading, error } = useMutation(
    "Create new exercise",
    () =>
      $api({
        url: "/exercises",
        type: "POST",
        body: { name, times, imageName },
      }),
    {
      onSuccess(data) {
        setName("");
        setTimes(0);
        setImageName("chest");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && times && imageName) {
      mutate();
    } else {
      // complete the check
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Create new exercise" />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isSuccess && <Alert text={"Exercise created"} />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <Field
            placeholder="Enter the number of repetitions"
            value={times}
            type={Number}
            onChange={({ target: { value } }) => setTimes(value)}
          />
          <div className={styles.images}>
            {data.map((name) => (
              <img
                src={`/uploads/exercises/${name}.svg`}
                alt={name}
                key={`ex img ${name}`}
                className={cn({
                  [styles.active]: imageName === name,
                })}
                onClick={() => setImageName(name)}
                draggable={false}
              />
            ))}
          </div>
          <Button text="Create" callback={() => {}}></Button>
        </form>
      </div>
    </>
  );
};

export default NewExercise;
