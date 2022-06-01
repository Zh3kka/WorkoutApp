import React from "react";
import Layout from "../../common/Layout/Layout";
import Button from "../../UI/Button/Button";
import Counters from "../../UI/Counters/Counters";
import bgImage from "../../../images/home-bg.jpg";
import { useHistory } from "react-router-dom";

import styles from "./Home.module.scss";

const Home = () => {
  const history = useHistory();

  return (
    <Layout bgImage={bgImage}>
      <Button
        type="main"
        text="New"
        callback={() => history.push("/new-workout")}
      />
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      <Counters />
    </Layout>
  );
};

export default Home;
