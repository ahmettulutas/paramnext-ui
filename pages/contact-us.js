import { Col, Row, Typography } from "antd";
import Head from "next/head";
import React from "react";
import { useIntl } from "react-intl";
import QuickHelpForm from "@/components/UIComponents/QuickHelpForm";
import { Hero } from "@/components/UIComponents";
import { heroTypes } from "@/lib/constants";

import { getLocalizedText, getContentfulPage } from "../lib/helpers";
import AnimateSection from "@/components/UIComponents/AnimationSection";

// eslint-disable-next-line func-style
export async function getStaticProps () {
  return {
    props: {
      pageInfo: await getContentfulPage("contactUsPage")
    }
  };
}

const Contact = ({ pageInfo }) => {
  const
    intl = useIntl(),
    pageTitle = intl.formatMessage({ id: "label.contactUs" }),
    title = `ParamTech | ${pageTitle}`,
    { address, contactEmailAddress, heroDescription, heroTitle, pageMetaDescription, phoneNumber } = pageInfo.items[0].fields;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={getLocalizedText(pageMetaDescription)} />
        <link rel="icon" href="/favicon.png" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="tr" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>
      <Hero type={heroTypes.lines} className={"auto-height"}>
        <Row className="contact-us-container" gutter={[0, 100]}>
          <Col xs={22} md={16} lg={10} xl={7}>
            <AnimateSection animationSlide={"slideRight"} delay={900}>
              <Row className="pt-40 mobile-centered">
                <Col>
                  <Typography.Title level={1}>
                    {getLocalizedText(heroTitle)}
                  </Typography.Title>
                </Col>
                <Col>
                  <Typography.Title level={3}>
                    {getLocalizedText(heroDescription)}
                  </Typography.Title>
                </Col>
                <Col className="gradient-bg-border">
                  <p>{(getLocalizedText(phoneNumber))}</p>
                </Col>
                <Col className="gradient-bg-border">
                  <p>{getLocalizedText(contactEmailAddress)}</p>
                </Col>
                <Col className="gradient-bg-border">
                  <p>{getLocalizedText(address)}</p>
                </Col>
              </Row>
            </AnimateSection>
          </Col>
          <Col xs={22} md={16} lg={11} xl={10} className="contact-form-wrapper">
            <AnimateSection animationSlide={"slideLeft"} delay={900}>
              <QuickHelpForm rowCount={7} hasPhone hasEmail/>
            </AnimateSection>
          </Col>
        </Row>
      </Hero>
    </>
  );
};
export default Contact;
