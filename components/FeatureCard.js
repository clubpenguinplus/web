import styles from "../styles/components/feature-card.module.scss";

import Image from "next/image";

const FeatureCard = ({ image, title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <Image src={image} layout="responsive" />
      </div>

      <div className={styles.right}>
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
