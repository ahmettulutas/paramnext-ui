import Head from "next/head";
import { Hero } from "@/components/UIComponents";
import { heroTypes } from "@/lib/constants";
import { HomeHeroContent } from "@/components/PageComponents";
import BoxedContent from "@/components/PageComponents/Home/BoxedContent";
import OurNumbers from "@/components/PageComponents/Home/OurNumbers";
import { HaveProject } from "@/components/PageComponents/Home/HaveProject";
import IntegrateEasily from "@/components/PageComponents/Home/IntegrateEasily";
import Features from "@/components/PageComponents/Home/Features/FeaturesContainer";
import CustomerFeedbacks from "@/components/PageComponents/CustomerFeedbacks/CustomerFeedbacks";

// eslint-disable-next-line func-style


export default function Home() {

  return (
    <div className="home">

      <Head>
        <title>ParamNext</title>
        <meta name="description" content={"getLocalizedText(pageMetaDescription)"} />
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="tr" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>

      <Hero type={heroTypes.lines}>
        <HomeHeroContent />
      </Hero>
      <BoxedContent />
      <OurNumbers />
      <HaveProject />
      <IntegrateEasily />
      <Features />
      <CustomerFeedbacks />
    </div>
  );
}
