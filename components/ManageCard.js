import styles from "../styles/components/manage-card.module.scss";

import cn from "classnames";

const ManageCard = ({ heading, children, bodyClassName = "p-4" }) => {
  const bodyClassNames = [styles.body];

  if (bodyClassName) {
    const classes = bodyClassName.split(" ");
    bodyClassNames.push(...classes);
  }

  return (
    <div className={styles.card}>
      <div className={cn(styles.header, "px-4", "py-3")}>{heading}</div>

      <div className={cn(bodyClassNames)}>{children}</div>
    </div>
  );
};

export default ManageCard;
