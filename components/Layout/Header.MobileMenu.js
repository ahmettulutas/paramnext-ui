import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { productNames } from "@/lib/constants";
import MenuIcon from "@/assets/images/menu.svg";

const HeaderDesktopMenu = () => {
  const
    [open, setOpen] = useState(false),
    { locales, locale, route } = useRouter(),
    intl = useIntl(),

    langs = [...locales].sort().map(locale => ({
      label: (
        <Link key={locale} href={route} locale={locale}>
          {locale.toUpperCase()}
        </Link>
      ),
      key: locale
    })),

    productItems = Object.keys(productNames).map(product => ({
      label: (
        <Link key={product} href={`/products/${product}`} >
          <a>
            <FormattedMessage id={`label.product.${product}`} />
          </a>
        </Link>
      ),
      key: product
    }));

  return (
    <>
      <div className="header-menu mobile">
        <div className="menu-trigger" onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>

        <Drawer
          title={<></>}
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          closeIcon={<div>X</div>}
          className="menu-drawer"
        >
          <Menu
            onSelect={() => setOpen(false)}
            mode="inline"
            items={[
              {
                label: (
                  <Link key="who-us" href="/about-us" >
                    <a>
                      <FormattedMessage id="label.aboutUs" />
                    </a>
                  </Link>
                ), key: "who-us"
              },
              {
                label: intl.formatMessage({ id: "label.products" }),
                key: "product",
                children: productItems
              },
              {
                label: (
                  <Link key="contact-us" href="/contact-us" >
                    <a>
                      <FormattedMessage id="label.contactUs" />
                    </a>
                  </Link>
                ), key: "contact-us"
              },
              {
                label: locale.toUpperCase(),
                key: "lang",
                children: langs
              }
            ]}
          />
        </Drawer>
      </div>
    </>
  );
};


export default HeaderDesktopMenu;