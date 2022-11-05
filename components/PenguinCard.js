import styles from "../styles/components/penguin-card.module.scss";

import dayjs from "dayjs";

import cn from "classnames";

const PenguinCard = ({ penguin }) => {
  const lastLogin = dayjs(penguin.last_login);

  const joinTime = dayjs(penguin.joinTime);
  const now = dayjs();
  const age = Math.floor(Math.abs(dayjs.duration(joinTime.diff(now)).as("days")));

  return (
    <div className={styles.card}>
      <div className={cn(styles.header, "px-4", "py-3")}>Your Penguin</div>

      <div className={cn(styles.body, "p-4")}>
        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Nickname</span>
          </div>

          <div className="col-8">{penguin.username}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Email</span>
          </div>

          <div className="col-8">{penguin.email}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Last Login</span>
          </div>

          <div className="col-8">{lastLogin.format("MMM D, YYYY")}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Joined On</span>
          </div>

          <div className="col-8">{joinTime.format("MMM D, YYYY")}</div>
        </div>

        <div className="row">
          <div className="col-4">
            <span className={styles.label}>Penguin Age</span>
          </div>

          <div className="col-8">{age} days</div>
        </div>
      </div>
    </div>
  );
};

export default PenguinCard;
