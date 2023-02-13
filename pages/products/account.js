import React from "react";
import Head from "next/head";
import { Hero, OurCustomers, PageContent, ProductSummary, ProjectPurple } from "@/components/UIComponents";
import { heroTypes, productNames, ourCustomersTypes } from "@/lib/constants";
import { useIntl } from "react-intl";
import { Col, Row } from "antd";
import { CmsImage } from "@/components/UIKit";
import Products from "@/components/UIComponents/Products";
import { getLocalizedText, omitLocale, getContentfulPage } from "@/lib/helpers";

// eslint-disable-next-line func-style
export async function getStaticProps () {
  return {
    props: {
      pageInfo: await getContentfulPage("accountPage")
    }
  };
}

const
  productName = productNames.account,

  Account = ({ pageInfo }) => {
    const
      intl = useIntl(),
      pageTitle = intl.formatMessage({ id: `label.product.${productName}` }),
      title = `ParamTech | ${pageTitle}`,
      { heroTitle, heroSubtitle, heroDescription, pageMetaDescription, services, productTitle, productDescription, servicesImage, quickHelpFormTitle, solutions } = pageInfo.items[0].fields;

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

        <PageContent className="mt-144">
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

        <OurCustomers type={ourCustomersTypes.banner} />

        <ProjectPurple title={getLocalizedText(quickHelpFormTitle)} />

        <PageContent className="mt-160 mb-160">
          <Row gutter={[50, 100]} className="container-responsive-centered tablet">
            <Col xs={{ span: 24, order: 2 }} sm={{ span: 20, order: 1 }} md={14}>
              <Products services={omitLocale(services)} />
            </Col>
            <Col xs={{ span: 24, order: 1 }} sm={{ span: 20, order: 2 }} md={10} className="align-self-start">
              <CmsImage className="image" image={servicesImage} objectFit="contain" />
            </Col>
          </Row>
        </PageContent>

      </>
    );
  };

export default Account;