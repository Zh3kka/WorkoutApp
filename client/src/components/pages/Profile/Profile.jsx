import React from "react";
import styles from "./Profile.module.scss";

import stylesLayout from "../../common/Layout/Layout.module.scss";
import Header from "../../common/Header/Header";
import Counters from "../../UI/Counters/Counters";
import bgImage from "../../../images/Profile.jpg";
import afterImg from "../../../images/imgBefore.jpg";
import userImage from "../../../images/header/user.svg";

import { $api } from "../../api/api";
import { useQuery } from "react-query";

const Profile = () => {
  const { data, isSuccess } = useQuery(
    "home page counters",
    () =>
      $api({
        url: "/users/profile",
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <div
        className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
        style={{ backgroundImage: `url(${bgImage})`, height: 356 }}
      >
        <Header />

        <div className={styles.center}>
          <img src={userImage} alt="Profile" height="55" draggable={false} />
          <div>
            {isSuccess && (
              <h1 className={stylesLayout.heading}>{data.email}</h1>
            )}
          </div>
        </div>
        {isSuccess && (
          <Counters
            minutes={data.minutes}
            workouts={data.workouts}
            kgs={data.kgs}
            type="profile"
          />
        )}
      </div>
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className={styles.before__after}>
          <div>
            <div className={styles.heading}>Before</div>
            <img src={afterImg} alt="before"/>
          </div>
          <div>
            <div className={styles.heading}>After</div>
            <img src={afterImg} alt="After"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
