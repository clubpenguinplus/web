import Head from "next/head";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import styles from "../styles/pages/index.module.scss";

import Banner from "../assets/slides/banner.png";
import IglooImage from "../assets/cards/igloo.webp";

import BeYourself from "../assets/cards/beyourself.png"
import Challenges from "../assets/cards/challenges.png"
import Explore from "../assets/cards/explore.png"
import Modern from "../assets/cards/modern.png"

import Container from "../components/Container";
import FeatureCard from "../components/FeatureCard";

import Carousel from "react-bootstrap/Carousel";

import config from "../config";

import cn from "classnames";

export default function Home() {
  const { t } = useTranslation("strings");
  return (
    <><>
      <Head>
        <title>{config.public.websiteTitle}</title>
        <meta property="description" content={config.public.websiteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cpplus.pw" />
        <meta property="og:title" content={config.public.websiteTitle} />
        <meta property="og:description" content={config.public.websiteDescription} />
        <meta property="og:image" content="/logo.png" />
      </Head>

    </>
    
    <Container customPage>
        <Carousel indicators={false} controls={false} className={cn(styles.carousel, "mb-4")}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={Banner}
              alt="Closed Beta Coming Soon"
              height={480}
              width={1024}
            />
          </Carousel.Item>
        </Carousel>

        <div className="row g-4">
          <div className="col col-12 col-md-6">
            <FeatureCard image={Modern} title={t("feattitle")}>
              {t("modernfeatures")}
            </FeatureCard>
          </div>

          <div className="col col-12 col-md-6">
            <FeatureCard image={Challenges} title={t("chaltitle")}>
            {t("challenges")}
            </FeatureCard>
          </div>

          <div className="col col-12 col-md-6">
            <FeatureCard image={Explore} title={t("exploretitle")}>
            {t("explore")}
            </FeatureCard>
          </div>

          <div className="col col-12 col-md-6">
            <FeatureCard image={BeYourself} title={t("expresstitle")}>
            {t("express")}
            </FeatureCard>
          </div>
        </div>
      </Container>
    </>
  );
}
