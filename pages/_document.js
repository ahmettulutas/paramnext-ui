import Document, { Html, Head, Main, NextScript } from "next/document";
import { IntlProvider } from "react-intl";

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      locale: ctx.locale
    };
  }

  render() {
    const { locale } = this.props;

    return (
      <IntlProvider locale={locale}>
        <Html lang={locale}>
          <Head>
            <meta name="distribution" content="Global" />
            <meta charSet="utf-8" />
            <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
            <meta property="og:locale" content="tr" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
            <link rel="shortcut icon" type="image/png" href="/favicon.png" />
            <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </IntlProvider>
    );
  }
}