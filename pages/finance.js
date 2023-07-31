import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Container from "../components/Container";

import config from "../config";

export default function Terms() {
  const { t } = useTranslation("strings");
  return (
    <>
      <Head>
        <title>{t("finance")}</title>
      </Head>

      <div className="fullPageText">
        <p>{t("finance1")}</p>
        <h1>{t("income")}</h1>
        <p>{t("finance2")} <a href="https://www.patreon.com/clubpenguinplus">Patreon</a>.</p>
        <h2>{t("outgoings")}</h2>
        <p>{t("finance3")}</p>
        <p>{t("finance4")}</p>
        <p>{t("finance5")}</p>
        <p>{t("finance6")}</p>
        <p>{t("finance7")}</p>
        <p>{t("finance8")}</p>
      </div>
    </>
  );
}
