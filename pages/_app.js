import { ConfigProvider } from "antd";
import { Layout } from "../components";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import trTR from "antd/lib/locale-provider/tr_TR";
import enUS from "antd/lib/locale-provider/en_US";
import tr from "../lang/tr.json";
import en from "../lang/en.json";
import "../assets/styles/main.less";
import Loading from "@/components/Loading";

const
  locales = {
    tr,
    en
  },
  antLocales = {
    tr: trTR,
    en: enUS
  },

  MyApp = ({ Component, pageProps }) => {
    const { locale } = useRouter();
    return (
      <Loading>
        <IntlProvider locale={locale} messages={locales[locale]}>
          <ConfigProvider locale={antLocales[locale]}>
            <Layout pageProps={pageProps} Component={Component} dir="ltr" />
          </ConfigProvider>
        </IntlProvider>
      </Loading>
    );
  };

export default MyApp;
