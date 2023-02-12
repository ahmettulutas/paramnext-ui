import Head from "next/head";
import { Hero, OurCustomers } from "@/components/UIComponents";
import { heroTypes, ourCustomersTypes } from "@/lib/constants";
import { CardSchema, HomeHeroContent, HomeQuickHelp, Solutions, HomeDesignedForDevelopers } from "@/components/PageComponents";
import { getLocalizedText, getContentfulPage } from "@/lib/helpers";

// eslint-disable-next-line func-style
export async function getStaticProps () {
  return {
    props: {
      pageInfo: await getContentfulPage("homePage"),
      solutions: await getContentfulPage("solutions"),
      ourCustomers: await getContentfulPage("ourCustomers")
    }
  };
}

export default function Home({ ourCustomers, pageInfo, solutions }) {
  const { fields } = pageInfo.items[0],
    { pageMetaDescription, heroDescription, heroTitle,
      cardsTitle, cardsDescription, quickHelpFormTitle,
      quickHelpFormDescription, designedForDevelopersTitle,
      designedForDevelopersSubtitle, designedForDevelopersDescription } = fields;
  return (
    <div className="home">

      <Head>
        <title>ParamTech</title>
        <meta name="description" content={getLocalizedText(pageMetaDescription)} />
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="tr" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>

      <Hero type={heroTypes.beehive}>
        <HomeHeroContent {...{ heroDescription, heroTitle }}/>
      </Hero>

      <CardSchema
        title={getLocalizedText(cardsTitle)}
        subTitle={getLocalizedText(cardsDescription)}
      />

      <HomeQuickHelp title={getLocalizedText(quickHelpFormTitle)} description={getLocalizedText(quickHelpFormDescription)}/>
      <Solutions withHeader solutions={solutions.items} />
      <HomeDesignedForDevelopers title={getLocalizedText(designedForDevelopersTitle)} subTitle={getLocalizedText(designedForDevelopersSubtitle)} description={getLocalizedText(designedForDevelopersDescription)} />
      <OurCustomers type={ourCustomersTypes.grid} data={ourCustomers.items} />
    </div>
  );
}
