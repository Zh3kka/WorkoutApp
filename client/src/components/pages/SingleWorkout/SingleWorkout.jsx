import { Fragment } from "react";
import styles from "./SingleWorkout.module.scss";

import stylesLayout from "../../common/Layout/Layout.module.scss";
import Header from "../../common/Header/Header";
import bgImage from "../../../images/SingleWorkout-bg.jpg";

import { $api } from "../../api/api";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Alert from "../../UI/Alert/Alert";

const SingleWorkout = () => {
  const { id } = useParams();

  const { data, isSuccess } = useQuery(
    "get workout",
    () =>
      $api({
        url: `/workouts/${id}`,
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
        {isSuccess && (
          <div>
            <time className={styles.time}>{data.minutes}</time>
            <h1 className={stylesLayout.heading}>{data.name}</h1>
          </div>
        )}
      </div>
      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {isSuccess ? (
          <div className={styles.wrapper}>
            {data.exercises.map((ex, idx) => {
              return (
                <Fragment key={`ex ids ${idx}`}>
                  <div>
                    <Link to={`/exercises/${ex._id}`}>
                      <span>{ex.name}</span>
                      <img
                        src={`/uploads/exercises/${ex.imageName}.svg`}
                        alt=""
                        height={34}
                      />
                    </Link>
                  </div>
                  {idx % 2 !== 0 && <div className="line"></div>}
                </Fragment>
              );
            })}
          </div>
        ) : (
          <Alert type={warning} text="Exercises not found" />
        )}
      </div>
    </>
  );
};

export default SingleWorkout;
