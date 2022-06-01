import React, { useState } from "react";
import styles from "./Auth.module.scss";

import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/auth-bg.jpg";

import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";
import Alert from "../../UI/Alert/Alert";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState("auth");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "auth") {
      console.log("auth");
    } else console.log("reg");
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Auth or Registration" />
      <div className="wrapper-inner-page">
        {true && <Alert type="success" text='You have been successfully'/>}
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Field
            placeholder="Enter name"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <div className={styles.wrapperButtons}>
            <Button text="Sign In" callback={() => setType("auth")}></Button>
            <Button text="Sign Up" callback={() => setType("reg")}></Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
