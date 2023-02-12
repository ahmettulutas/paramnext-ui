import React from "react";
import Head from "next/head";
import { BoxedContent, CardView, Hero } from "../components/UIComponents";
import { cardViewTypes, heroTypes } from "../lib/constants";
import { useIntl } from "react-intl";

import { getLocalizedText, omitLocale, getContentfulPage } from "../lib/helpers";

// eslint-disable-next-line func-style
export async function getStaticProps () {
  return {
    props: {
      pageInfo: await getContentfulPage("aboutUsPage"),
      ourCustomers: await getContentfulPage("ourCustomers"),
      fallback: true
    }
  };
}

const aboutUs = ({ pageInfo, ourCustomers }) => {

  const
    intl = useIntl(),
    pageTitle = intl.formatMessage({ id: "label.aboutUs" }),
    title = `ParamTech | ${pageTitle}`,
    { fields } = pageInfo.items[0],
    { heroTitle, heroSubTitle, aboutUsContentTitle, aboutUsContent, getMoreInformation } = fields;
  console.log((ourCustomers)); // TODO
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="ParamTech" />
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="tr" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>

      <Hero
        type={heroTypes.grain}
        upTitle={getLocalizedText(heroTitle)}
        subTitle={getLocalizedText(heroSubTitle)}
        svg="/images/aboutUs.svg"
      />

      <BoxedContent
        subTitle={getLocalizedText(aboutUsContentTitle)}
        content={getLocalizedText(aboutUsContent, true)}
      />

      <CardView
        withPre={omitLocale(getMoreInformation)}
        preOptions={{ marginTop: 0 }}
        type={cardViewTypes.extended}
      />

    </>
  );
};

export default aboutUs;