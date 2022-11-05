import Head from "next/head";

import config from "../config";

const PAGE_TITLE = "Not Found";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>
          {PAGE_TITLE} | {config.public.websiteTitle}
        </title>
        <meta name="viewport" content="width=1024"></meta>
      </Head>

      <div className="error">
        <h1>{PAGE_TITLE}</h1>
      </div>
    </>
  );
}
