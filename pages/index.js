import Head from "next/head";
import { Hero } from "@/components/UIComponents";
import { heroTypes } from "@/lib/constants";
import { HomeHeroContent } from "@/components/PageComponents";


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
      {/* <OurCustomers type={ourCustomersTypes.grid} data={ourCustomers.items} /> */}


    </div>
  );
}
