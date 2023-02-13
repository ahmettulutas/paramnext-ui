import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Divider } from "antd";
import { FormattedMessage/* , useIntl  */ } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "../UIKit";
import { productNames } from "@/lib/constants";
import TranslatedLink from "../UIKit/TranslatedLink";
import { pathTranslations } from "@/lib/routePaths";
import RightIcon from "@/assets/images/right-icon2.svg";

const HeaderDesktopMenu = () => {
  const
    { locales, locale, route } = useRouter(),
    langs = [...locales].sort().map(locale => ({
      label: (
        <Link key={locale} href={route} locale={locale} as={pathTranslations[locale]?.[route]}>{/*  // todo: translated path ile refactor edilecek. */}
          {locale.toUpperCase()}
        </Link>
      ),
      key: locale
    })),

    productItems = Object.keys(productNames).map(product => ({
      label: (
        <>
          <TranslatedLink key={product} href={`/products/${product}`} >
            <a>
              <FormattedMessage id={`label.product.${product}`} />
            </a>
          </TranslatedLink>
          <RightIcon />
        </>
      ),
      key: product
    }));

  return (
    <>
      <div className="header-menu desktop">
        <Menu
          mode="horizontal"
          items={[
            {
              label: (
                <TranslatedLink key="about-us" href="/about-us">
                  <a>
                    <FormattedMessage id="label.aboutUs" />
                  </a>
                </TranslatedLink>
              ), key: "about-us"
            },
            {
              label: <span><FormattedMessage id="label.products" /> <DownOutlined /></span>,
              key: "product",
              children: productItems
            },
            {
              label: (
                <TranslatedLink key="contact-us" href="/contact-us">
                  <a>
                    <FormattedMessage id="label.contactUs" />
                  </a>
                </TranslatedLink>
              ), key: "contact-us"
            }
          ]}
        />
      </div>
      <section>
        {
          langs.map(({ label, key }, index) => (
            <>
              <div key={key} className={`${locale === key ? "active" : ""}`}>
                {label}
              </div>
              { index < langs.length - 1 ? <Divider type="vertical" /> : undefined}
            </>
          )
          )
        }
      </section>
      <div className="button-container">
        <TranslatedLink key="contact-us" href="/contact-us">
          <a>
            <Button type="primary" className="bordered transparent"><FormattedMessage id="button.getOffer" /></Button>
          </a>
        </TranslatedLink>
      </div>
    </>
  );
};


export default HeaderDesktopMenu;