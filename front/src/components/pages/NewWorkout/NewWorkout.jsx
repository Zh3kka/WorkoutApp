import React, { useState } from "react";
import ReactSelect from 'react-select'

import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/bg-auth.jpg";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";


const NewWorkout = () => {
  const [exercises, setExercises] = useState();

  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <Layout bgImage={bgImage} heading='Create new workout'/>
        <div className='wrapper-inner-page'>
          <form onSubmit={handleSubmit}>
            <Field
              placeholder="Enter name"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
            <Link to='/new-exercise' className='dark-link'>Add new exercise</Link>
            <ReactSelect
              classNamePrefix="select2-selection"
              placeholder="Exercises..."
              title="Exercises"
              options={[
                {value: 'qwerty', label: 'анжумания'},
                {value: 'asdfgh', label: 'бегит'},
                {value: 'zxcvbn', label: 'пресс качат'},
                {value: 'uiop', label: 'турник'},
              ]}
              value={exercises}
              onChange={setExercises}
              isMulti={true}
            />
            <Button text="Create" callback={() => {}}></Button>
          </form>
        </div>
      
    </>
  );
};

export default NewWorkout;
