import cx from "classnames";

import styles from "../styles/components/link-button.module.scss";

const LinkButton = ({ link, label, color = "blue" }) => {
  return (
    <>
      <a href={link}>
        <button className={cx(styles.button, styles[color])}>{label}</button>
      </a>
    </>
  );
};

export default LinkButton;
