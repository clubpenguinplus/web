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
        <Carousel indicators={false} className={cn(styles.carousel, "mb-4")}>
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
            <FeatureCard image={Modern} title="Modern Features">
              Igloo system that allows players to design up to 4 igloos
              as well as a system for liking igloos, modern rooms, minigames,
              catalogs, and adventures to keep you busy!
            </FeatureCard>
          </div>

          <div className="col col-12 col-md-6">
            <FeatureCard image={Challenges} title="Challenges">
              Players can participate in daily and weekly challenges
              to earn special currency, which can then be used to purchase
              items in our rotating challenge market!
            </FeatureCard>
          </div>

          <div className="col col-12 col-md-6">
            <FeatureCard image={Explore} title="Explore the Island">
              Over 40 rooms to explore, each with its own unqiue theme
              and activities. Earn stamps by completing tasks and 
              play minigames scattered around the island!
            </FeatureCard>
          </div>

          <div className="col col-12 col-md-6">
            <FeatureCard image={BeYourself} title="Be Expressive">
              Players can express themselves and customize their penguin
              with one of 8 always available catalogs, featuring hundreds
              of obtainable items at launch.
            </FeatureCard>
          </div>
        </div>
      </Container>
    </>
  );
}
