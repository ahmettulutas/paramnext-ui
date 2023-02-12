import React from "react";
import Head from "next/head";
import { BoxedContent, Hero } from "../components/UIComponents";
import { heroTypes } from "../lib/constants";

import { getLocalizedText, getContentfulPage } from "../lib/helpers";

// eslint-disable-next-line func-style
export async function getStaticProps () {
  return {
    props: {
      pageInfo: await getContentfulPage("informationSocietyServicesPage"),
      fallback: true
    }
  };
}

const InformationSecurity = ({ pageInfo }) => {

  const
    { fields } = pageInfo.items[0],
    { heroTitle, heroSubtitle, pageMetaDescription, content } = fields;

  return (
    <>
      <Head>
        <title>{getLocalizedText(heroTitle)}</title>
        <meta name="description" content={getLocalizedText(pageMetaDescription)} />
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="tr" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>
      <Hero
        type={heroTypes.grain}
        upTitle={getLocalizedText(heroTitle)}
        subTitle={getLocalizedText(heroSubtitle)}
        svg="/images/aboutUs.svg"
      />
      <BoxedContent
        content={getLocalizedText(content, true)}
      />
    </>
  );
};

export default InformationSecurity;