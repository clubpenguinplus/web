import dayjs from "dayjs";
import cn from "classnames";

import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

import ManageCard from "./ManageCard";

import styles from "../styles/components/codes-card.module.scss";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const CodesCard = ({ codes }) => {
  const formattedCodes = codes.map((code) => {
    const createdAt = dayjs(code.createdAt);

    return {
      ...code,
      createdAt: createdAt.format("MMM D, YYYY"),
    };
  });

  return (
    <ManageCard heading="Redeemed Codes" bodyClassName="">
      <table className={cn(styles.table, "table", "table-striped")}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Coins</th>
            <th>Item</th>
            <th>Redeemed</th>
          </tr>
        </thead>
        <tbody>
          {!!formattedCodes.length &&
            formattedCodes.map((userCode) => (
              <tr>
                <td>{userCode.code.code}</td>
                <td>{userCode.code.coins}</td>
                <td>{userCode.code.itemId && userCode.code.item ? userCode.code.item.name : "None"}</td>
                <td>{userCode.createdAt}</td>
              </tr>
            ))}

          {!formattedCodes.length && (
            <tr>
              <td colSpan={4}>There are no codes redemptions on this account.</td>
            </tr>
          )}
        </tbody>
      </table>
    </ManageCard>
  );
};

export default CodesCard;
