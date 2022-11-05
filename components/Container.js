import styles from "../styles/components/container.module.scss";

import cn from "classnames";

const Container = ({ children, containerStyle = {}, className = null, customPage = false }) => {
  const classNames = ["container", "p-4", styles.container];

  if (!customPage) {
    classNames.push(styles.default);
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <div className={cn(classNames)} style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
