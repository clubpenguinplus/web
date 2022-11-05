import Head from "next/head";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import styles from "../styles/pages/index.module.scss";

import Promo from "../assets/slides/promo.png";

import config from "../config";

import cn from "classnames";

export default function Home() {
  const { t } = useTranslation("strings");
  return (
    <>
      <Head>
        <title>{config.public.websiteTitle}</title>
        <meta property="description" content={config.public.websiteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cpplus.pw" />
        <meta property="og:title" content={config.public.websiteTitle} />
        <meta property="og:description" content={config.public.websiteDescription} />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Image className={cn(styles.mainImg, "d-block w-100")} src={Promo} alt="Promo Image" height={719} width={1533} />

      <div className={cn(styles.aboutDiv, "mb-4")}>
        <div className={cn(styles.about, "mb-4")}>{t("about1")}</div>

        <div className={cn(styles.about, "mb-4")}>{t("about2")}</div>
      </div>
    </>
  );
}
