import styles from "../styles/components/layout.module.scss";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import Container from "./Container";

import Logo from "../assets/logo.webp";
import FooterBg from "../assets/promo-wrap-bg.png";
import LinkButton from "./LinkButton";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import DiscordIcon from "../assets/icons/discord-icon.svg";

import cn from "classnames";

const Layout = ({
  children,
  websiteTitle = "Example",
  menuLinks = [],
  disclaimer = "",
  footerLinks = [],
  socialLinks = {},
  button = {
    url: "#",
    label: "Action",
    color: "yellow",
  },
}) => {
  const { t } = useTranslation("strings");
  return (
    <div className={styles.layout}>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          if (document.getElementsByClassName('container')[0].clientHeight < document.getElementsByClassName('layout_layout__yXZI_')[0].clientHeight) document.getElementsByClassName('container ')[0].style['height'] = "100vh";
          if (document.getElementsByClassName('layout_links__wZK2j')[0].clientHeight > 30){
            document.getElementsByClassName('layout_links__wZK2j')[0].style= "margin-bottom: 1.25rem";
            document.getElementsByClassName('layout_svg__8wNmD')[0].style= "height: 3vh;";
            document.getElementsByClassName('layout_svg__8wNmD')[1].style= "height: 3vh;";
            document.getElementsByClassName('layout_middle__aP0go px-4')[0].style= "padding-right: 0 !important;";
            document.getElementsByClassName('layout_middle__aP0go px-4')[0].style= "padding-left: 0 !important;";
          }
          `,
        }}
      />
      <div className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <div style={{ width: "150px", display: "inline-block" }}>
              <a href="/" id="logo">
                <Image src={Logo} layout="responsive" alt={websiteTitle} />
              </a>
            </div>
          </div>

          <div className={styles.menu}>
            <div className={styles.links}>
              <a key="menu-link-1" href="blog" target="_self" className="mx-3">
                {t("blog")}
              </a>
              <a key="menu-link-2" href="https://discord.gg/x3QuKfezb4" target="_blank" className="mx-3">
                Discord
              </a>
              <a key="menu-link-3" href="create" target="_self" className="mx-3">
                {t("create")}
              </a>
            </div>
          </div>

          <Script
            dangerouslySetInnerHTML={{
              __html: `
            var lang = "/" + document.location.pathname.split('/')[1]
            if (lang.length == 3) {
            document.getElementsByClassName('mx-3')[0].setAttribute("href", lang + "/" + "blog" + "-" + lang.substring(1, 3));
            document.getElementsByClassName('mx-3')[2].setAttribute("href", lang + "/" + "create");
            document.getElementsByClassName('mx-3')[6].setAttribute("href", lang + "/" + "terms");
            document.getElementsByClassName('mx-3')[7].setAttribute("href", lang + "/" + "privacy");
            document.getElementById('logo').setAttribute("href", lang);
            document.getElementsByClassName('mx-2')[0].setAttribute("href", "https://twitter.com/penguinplus_" + lang[1] + lang[2]);
            } 
          `,
            }}
          />

          <div className={styles.buttons}>
            <div className={styles.button}>
              <LinkButton link={button.url} label={t("play")} color={button.color} />
            </div>
          </div>
        </div>
      </div>

      <Container children={children} backgroundColor="blue" layout="responsive"></Container>

      <div className={cn(styles.footer, "p-4")}>
        <div className={styles.inner}>
          <div className={cn(styles.middle, "px-4")}>
            <div className={cn(styles.languagelinks, "pb-3")}>
              <a key="footer-link-4" href="/en" target="_self" className="mx-3">
                ENGLISH
              </a>
              <span>|</span>
              <a key="footer-link-3" href="/pt" target="_self" className="mx-3">
                PORTUGUÊS
              </a>
              <span>|</span>
              <a key="footer-link-5" href="/es" target="_self" className="mx-3">
                ESPAÑOL
              </a>
            </div>
            <div className={cn(styles.links, "pb-3")}>
              <a key="footer-link-1" href="/terms" target="_self" className="mx-3">
                {t("terms")}
              </a>
              <span>|</span>
              <a key="footer-link-2" href="/privacy" target="_self" className="mx-3">
                {t("privacy")}
              </a>
            </div>            

            {disclaimer && (
              <div className={styles.disclaimer} layout="reponsive">
                {t("disclaimer1")}
                <br />
                {t("disclaimer2")}
              </div>
            )}
          </div>

          <div className={styles.social}>
            {socialLinks.twitterUrl && (
              <a href="https://twitter.com/penguinplus_pt" target="_blank" className={cn(styles.socialLink, "mx-2")}>
                <Image src={TwitterIcon} height={24} width={24} className={styles.svg} alt="Twitter" />
              </a>
            )}

            {socialLinks.discordUrl && (
              <a href={socialLinks.discordUrl} target="_blank" className={cn(styles.socialLink, "mx-2")}>
                <Image position="relative" src={DiscordIcon} height={24} width={24} className={styles.svg} alt="Discord" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
