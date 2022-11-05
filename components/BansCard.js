import styles from "../styles/components/bans-card.module.scss";

import dayjs from "dayjs";
import cn from "classnames";

import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const BansCard = ({ bans }) => {
  const formattedBans = bans.map((ban) => {
    const issued = dayjs(ban.issued);
    const expires = dayjs(ban.expires);

    let duration = dayjs.duration(issued.diff(expires)).humanize();

    if (duration === "10 years") {
      duration = "Forever";
    }

    return {
      ...ban,
      issued: issued.format("MMM D, YYYY"),
      expires: expires.format("MMM D, YYYY h:mm a"),
      duration,
    };
  });

  return (
    <div className={styles.card}>
      <div className={cn(styles.header, "px-4", "py-3")}>Ban History</div>

      <div className={cn(styles.body)}>
        <table className={cn(styles.table, "table", "table-striped")}>
          <thead>
            <tr>
              <th>Issued</th>
              <th>Expires</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {!!formattedBans.length &&
              formattedBans.map((ban) => (
                <tr>
                  <td>{ban.issued}</td>
                  <td>{ban.expires}</td>
                  <td>{ban.duration}</td>
                </tr>
              ))}

            {!formattedBans.length && (
              <tr>
                <td colSpan={3}>There are no bans associated with this account.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BansCard;
