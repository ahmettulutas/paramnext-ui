import React from "react";
import Head from "next/head";
import { Hero, OurCustomers, PageContent, ProductSummary } from "@/components/UIComponents";
import { heroTypes, ourCustomersTypes, productNames } from "@/lib/constants";
import { useIntl } from "react-intl";
import { Col, Row } from "antd";
import Products from "@/components/UIComponents/Products";
import { getLocalizedText, omitLocale, getContentfulPage } from "@/lib/helpers";

// eslint-disable-next-line func-style
export async function getStaticProps () {
  return {
    props: {
      pageInfo: await getContentfulPage("productsBnpl"),
      ourCustomers: await getContentfulPage("ourCustomers")
    }
  };
}

const
  productName = productNames.bnpl,
  BNLP = ({ pageInfo }) => {
    const
      intl = useIntl(),
      pageTitle = intl.formatMessage({ id: `label.product.${productName}` }),
      title = `ParamTech | ${pageTitle}`,
      { heroTitle, heroSubtitle, heroDescription, pageMetaDescription, /*  services, */solutions, productTitle, productDescription } = pageInfo.items[0].fields;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={getLocalizedText(pageMetaDescription)} />
          <link rel="icon" href="/favicon.png" />
          <link rel="alternate" href="http://localhost:3000" hrefLang="tr" />
          <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
        </Head>

        <Hero
          type={heroTypes.grain}
          upTitle={getLocalizedText(heroTitle)}
          title={getLocalizedText(heroSubtitle)}
          description={getLocalizedText(heroDescription)}
          image={`/images/products/${productName}.svg`}
        />

        <PageContent>
          <div className="mt-80 mb-96">
            <OurCustomers type={ourCustomersTypes.line} />
          </div>
        </PageContent>

        <PageContent className="mt-144 mb-144">
          <Row gutter={[50, 100]} className="container-responsive-centered tablet">

            <Col xs={24} sm={22} lg={10}>
              <ProductSummary
                product={productNames.account}
                title={getLocalizedText(productTitle)}
                description={getLocalizedText(productDescription)}
              />
            </Col>

            <Col xs={24} sm={22} lg={14}>
              <Products services={omitLocale(solutions)} />
            </Col>
          </Row>
        </PageContent>
      </>
    );
  };

export default BNLP;