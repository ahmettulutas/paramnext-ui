/* import React from "react";
import Head from "next/head";
import { Hero, OurCustomers, PageContent, ProductSummary, ProjectPurple } from "@/components/UIComponents";
import { heroTypes, productNames, ourCustomersTypes } from "@/lib/constants";
import { FormattedMessage, useIntl } from "react-intl";
import { Col, Row } from "antd";
import { Image } from "@/components/UIKit";
import Products from "@/components/UIComponents/Products";

const
  productName = productNames.account,

  Account = () => {

    const
      intl = useIntl(),
      pageTitle = intl.formatMessage({ id: `label.product.${productName}` }),
      title = `ParamTech | ${pageTitle}`;

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
          upTitleId="label.product"
          titleId={`label.product.title.${productName}`}
          descriptionId={`label.product.description.${productName}`}
          image={`/images/products/${productName}.svg`}
        />

        <PageContent className="mt-144">
          <Row gutter={[50, 50]}>

            <Col xs={24} sm={22} md={10} lg={10}>
              <ProductSummary
                product={productNames.account}
                title={<FormattedMessage id="label.loremIpsum2" />}
                description={<FormattedMessage id="label.loremIpsum1" />}
              />
            </Col>

            <Col xs={24} sm={22} md={14} lg={14}>
              <Products />
            </Col>
          </Row>
        </PageContent>

        <OurCustomers type={ourCustomersTypes.banner} />

        <ProjectPurple />

        <PageContent className="mt-160 mb-160">
          <Row gutter={[50, 100]} className="container-aboutUs">
            <Col xs={24} sm={22} md={14} lg={14}>
              <Products />
            </Col>
            <Col xs={24} sm={22} md={10} lg={10} xl={10} className="align-self-start">
              <Image src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241" />
            </Col>
          </Row>
        </PageContent>

      </>
    );
  };

export default Account; */