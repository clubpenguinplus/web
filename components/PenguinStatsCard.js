import styles from "../styles/components/penguin-card.module.scss";

import cn from "classnames";

import dayjs from "dayjs";

import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const PenguinStatsCard = ({ penguin }) => {
  const timePlayed = dayjs.duration({ seconds: penguin.timePlayed }).humanize();

  return (
    <div className={styles.card}>
      <div className={cn(styles.header, "px-4", "py-3")}>Your Stats</div>

      <div className={cn(styles.body, "p-4")}>
        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Time Played</span>
          </div>

          <div className="col-8">{timePlayed}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Sled Races Won</span>
          </div>

          <div className="col-8">{penguin.sledRacesWon}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Find Four Wins</span>
          </div>

          <div className="col-8">{penguin.findFourWon}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Snowballs</span>
          </div>

          <div className="col-8">{penguin.snowballsThrown}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Messages</span>
          </div>

          <div className="col-8">{penguin.messagesSent}</div>
        </div>

        <div className="row pb-2">
          <div className="col-4">
            <span className={styles.label}>Coins Earned</span>
          </div>

          <div className="col-8">{penguin.coinsEarned}</div>
        </div>

        <div className="row">
          <div className="col-4">
            <span className={styles.label}>Coins Spent</span>
          </div>

          <div className="col-8">{Math.abs(penguin.coinsSpent)}</div>
        </div>
      </div>
    </div>
  );
};

export default PenguinStatsCard;
