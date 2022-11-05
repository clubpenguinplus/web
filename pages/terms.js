import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Container from "../components/Container";

import config from "../config";

export default function Terms() {
  const { t } = useTranslation("strings");
  return (
    <>
      <Head>
        <title>{t("terms")}</title>
      </Head>

      <div className="fullPageText">
        <h1>{t("terms")}</h1>
        <p>
          {t("tos1")} Club Penguin Plus (CPPlus, CP+, <a href="cpplus.pw">cpplus.pw</a>, <a href="clubpenguin.plus">clubpenguin.plus</a>, <a href="clubpenguinpl.us">clubpenguinpl.us</a>). {t("tos2")}
        </p>
        <h2>{t("privacy")}</h2>
        <p>
          {t("tos3")} <a href="/privacy">{t("privacy")}</a>. {t("tos4")}
        </p>
        <h2>{t("tos5")}</h2>
        <p>{t("tos6")}</p>
        <h2>{t("tos7")}</h2>
        <p>{t("tos8")}</p>
        <p>{t("tos9")}</p>
        <p>{t("tos10")}</p>
        <p>
          {t("tos11")} <a href="https://play.cpplus.pw">play.cpplus.pw</a>, {t("tos12")}
        </p>
        <p>
          {t("tos13")} <a href="mailto:appeal@clubpenguin.plus">appeal@clubpenguin.plus</a> or on <a href="https://discord.gg/x3QuKfezb4">{t("tos14")}</a> {t("tos15")}.
        </p>
      </div>
    </>
  );
}
