import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./Auth.module.scss";

import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/auth-bg.jpg";

import Loader from "../../UI/loader/loader";
import Field from "../../UI/Field/Field";
import Button from "../../UI/Button/Button";
import Alert from "../../UI/Alert/Alert";
import { useMutation } from "react-query";
import { $api } from "../../api/api";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState("auth");

  const { setIsAuth } = useAuth();

  const history = useHistory();

  const successLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuth(true);

    setPassword("");
    setEmail("");

    history.replace("/");
  };

  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation(
    "Registration",
    () =>
      $api({
        url: "/users",
        type: "POST",
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "auth") {
      console.log("auth");
    } else {
      register();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} heading="Auth or Registration" />
      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Field
            type="password"
            placeholder="Enter your password"
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
