import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import config from "../config";

const PAGE_TITLE = "Privacy Policy";

export default function Privacy() {
  const { t } = useTranslation("strings");
  return (
    <>
      <Head>
        <title>{t("privacy")}</title>
        <meta name="viewport" content="width=1024"></meta>
      </Head>

      <div className="fullPageText">
        <h1>{t("privacy")}</h1>
        <p>{t("pri1")}</p>
        <p>{t("pri2")}</p>
        <p>{t("pri3")}</p>
        <h1>{t("pri4")}</h1>
        <h2>{t("pri5")}</h2>
        <p>{t("pri6")}</p>
        <h2>{t("pri7")}</h2>
        <p>{t("pri8")}</p>
        <ul>
          <li>
            <p>
              <strong>{t("pri9")}</strong> {t("pri10")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri11")}</strong> {t("pri12")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri13")}</strong> {t("pri14")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri15")}</strong> {t("pri16")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri17")}</strong> {t("pri18")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri19")}</strong> {t("pri20")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri21")}</strong> {t("pri22")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri23")}</strong> {t("pri24")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri25")}</strong> {t("pri26")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri27")}</strong> {t("pri28")}{" "}
              <a href="https://www.cpplus.pw" rel="external nofollow noopener" target="_blank">
                https://www.cpplus.pw
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri29")}</strong> {t("pri30")}
            </p>
          </li>
        </ul>
        <h1>{t("pri31")}</h1>
        <h2>{t("pri32")}</h2>
        <h3>{t("pri33")}</h3>
        <p>{t("pri34")}</p>
        <ul>
          <li>{t("pri35")}</li>
          <br />
          <li>{t("pri36")}</li>
        </ul>
        <p>{t("pri37")}</p>
        <p>{t("pri38")}</p>
        <p>{t("pri39")}</p>
        <p>{t("pri40")}</p>
        <h3>{t("pri41")}</h3>
        <p>{t("pri42")}</p>
        <ul>
          <li>
            <strong>{t("pri43")}</strong> {t("pri44")}
          </li>
          <li>
            <strong>{t("pri45")}</strong> {t("pri46")}
          </li>
        </ul>
        <p>{t("pri47")}</p>
        <p>{t("pri48")}</p>
        <ul>
          <li>
            <p>
              <strong>{t("pri49")}</strong>
            </p>
            <p>{t("pri50")}</p>
            <p>{t("pri51")}</p>
            <p>{t("pri52")}</p>
          </li>
          <li>
            <p>
              <strong>{t("pri53")}</strong>
            </p>
            <p>{t("pri54")}</p>
            <p>{t("pri51")}</p>
            <p>{t("pri55")}</p>
          </li>
          <li>
            <p>
              <strong>{t("pri56")}</strong>
            </p>
            <p>{t("pri54")}</p>
            <p>{t("pri51")}</p>
            <p>{t("pri57")}</p>
          </li>
        </ul>
        <h3>{t("pri58")}</h3>
        <p>{t("pri59")}</p>
        <h2>{t("pri60")}</h2>
        <p>{t("pri61")}</p>
        <ul>
          <li>
            <p>
              <strong>{t("pri62")}</strong>, {t("pri63")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri64")}</strong> {t("pri65")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri65")}</strong> {t("pri67")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri68")}</strong> {t("pri69")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri70")}</strong> {t("pri71")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri72")}</strong> {t("pri73")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri74")}</strong> {t("pri75")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("pri76")}</strong>: {t("pri77")}
            </p>
          </li>
        </ul>
        <p>{t("pri78")}</p>
        <ul>
          <li>
            <strong>{t("pri79")}</strong> {t("pri80")}
          </li>
          <li>
            <strong>{t("pri81")}</strong> {t("pri82")}
          </li>
          <li>
            <strong>{t("pri83")}</strong> {t("pri84")}
          </li>
          <li>
            <strong>{t("pri85")}</strong> {t("pri86")}
          </li>
          <li>
            <strong>{t("pri87")}</strong> {t("pri88")}
          </li>
          <li>
            <strong>{t("pri89")}</strong>: {t("pri90")}
          </li>
        </ul>
        <h2>{t("pri91")}</h2>
        <p>{t("pri92")}</p>
        <p>{t("pri93")}</p>
        <h2>{t("pri94")}</h2>
        <p>{t("pri95")}</p>
        <p>{t("pri96")}</p>
        <p>{t("pri97")}</p>
        <h2>{t("pri98")}</h2>
        <h3>{t("pri99")}</h3>
        <p>{t("pri100")}</p>
        <h3>{t("pri101")}</h3>
        <p>{t("pri102")}</p>
        <h3>{t("pri103")}</h3>
        <p>{t("pri104")}</p>
        <ul>
          <li>{t("pri105")}</li>
          <li>{t("pri106")}</li>
          <li>{t("pri107")}</li>
          <li>{t("pri108")}</li>
          <li>{t("pri109")}</li>
        </ul>
        <h2>{t("pri110")}</h2>
        <p>{t("pri111")}</p>
        <h1>{t("pri112")}</h1>
        <p>{t("pri113")}</p>
        <p>{t("pri114")}</p>
        <h1>{t("pri115")}</h1>
        <p>{t("pri116")}</p>
        <p>{t("pri117")}</p>
        <h1>{t("pri118")}</h1>
        <p>{t("pri119")}</p>
        <p>{t("pri120")}</p>
        <p>{t("pri121")}</p>
        <h1>{t("pri122")}</h1>
        <p>{t("pri123")}</p>
        <ul>
          <li>
            <p>
              {t("pri124")}{" "}
              <a href="mailto:help@clubpenguin.plus" rel="external nofollow noopener" target="_blank">
                help@clubpenguin.plus
              </a>
            </p>
          </li>
          <li>
            <p>
              {t("pri125")}{" "}
              <a href="https://discord.gg/x3QuKfezb4" rel="external nofollow noopener" target="_blank">
                {t("pri126")}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
