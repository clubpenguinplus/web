import "../styles/app.scss";
import "../styles/variables.scss";

import { SessionProvider } from "next-auth/react";

import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";

import config from "../config";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const playButton = {
    url: config.public.playUrl,
    label: "Play Now",
    color: "yellow",
  };

  const disclaimer = (
    <>
      Club Penguin Plus is an independent fan-run remake of Club Penguin™ (2005-2017).
      <br />
      We are not affiliated with The Walt Disney Company.
    </>
  );

  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=1024"></meta>
      </Head>

      <Script src={"https://www.googletagmanager.com/gtag/js?id=" + config.public.googleAnalyticsId} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${config.public.googleAnalyticsId}');
        `}
      </Script>

      <Layout websiteTitle={config.public.websiteTitle} announcement={config.public.announcement} menuLinks={config.public.menuLinks} disclaimer={disclaimer} socialLinks={config.public.socialLinks} footerLinks={config.public.footerLinks} button={playButton}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
