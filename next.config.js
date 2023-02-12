/** @type {import('next').NextConfig} */
const withLess = require("next-with-less"),
  { pathTranslations } = require("./lib/routePaths");
/* const routeRewrites = require('./lib/routePaths');  */
const nextConfig = {
  serverRuntimeConfig: {
    CONTENTFUL_SPACE_ID: "0uyxkh7zrnm1",
    CONTENTFUL_ACCESS_TOKEN: "mT2-cJXP2VN_Xxyp_Ggi_kz07Ix1X9ac1P4G4zzLT44",
    EMAILJS_FORM_SERVICE_ID: "paramtech-ui-contact",
    EMAILJS_FORM_TEMPLATE_ID: "template_2gbp39a",
    EMAILJS_FORM_PUBLIC_KEY: "Og-JWlBd3ZDyfiYw7"
  },
  env: {
    EMAILJS_FORM_SERVICE_ID: process.env.EMAILJS_FORM_SERVICE_ID,
    EMAILJS_FORM_PUBLIC_KEY: process.env.EMAILJS_FORM_PUBLIC_KEY,
    EMAILJS_FORM_TEMPLATE_ID: process.env.EMAILJS_FORM_TEMPLATE_ID
  },
  reactStrictMode: true,
  swcMinify: false,
  trailingSlash: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
    localeDetection: false
  },
  images: {
    domains: ["images.ctfassets.net"]
  },
  async rewrites () {
    const rewrites = Object.entries(pathTranslations.tr).map(([key, value]) => ({ source: value, destination: key }));
    return rewrites;
  }
};

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  ...nextConfig
});
