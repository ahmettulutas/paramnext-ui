import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

import { createClient } from "contentful";
import getConfig from "next/config";
import { animations } from "./constants";

export const classNames = (classNamesList = []) => classNamesList.filter(x => x !== false && x !== undefined && x !== null && x !== "" && x !== "false").join(" ").trim();

export const omitLocale = data => Object.values(data)[0];

export const getLocalizedText = (field, richText = false) => {
  if (typeof field !== "object")
    return field;

  const
    { locale } = useRouter(),
    key = Object.keys(field).find(item => item.includes(locale));

  if (!key)
    return omitLocale(field);


  if (richText) {
    const options = {
      renderNode: {
        [INLINES.HYPERLINK]: ({ data, content }) => (
          <Link href={data.uri}>
            <a target="_blank">{content[0].value}</a>
          </Link>
        )
      }
    };
    return documentToReactComponents(field[key], options);
  }
  else {
    return field[key];
  }
};

export const getLocalizedImage = image => {
  const { locale } = useRouter(),
    localeImage = Object.values(image)[0], // Gets the first element from image locale since we don't need localization in the first level.
    moderatedFields = {},
    { fields } = localeImage;

  for (const key in fields) {
    const localeKey = Object.keys(fields[key]).find(item => item.includes(locale));
    moderatedFields[key] = localeKey ? fields[key][localeKey] : omitLocale(fields[key]);
  }
  return { ...localeImage, fields: moderatedFields };

};

export const getContentfulPage = async pageKey => { // TO-DO = need to add locale and other parameters to develop the function
  const { serverRuntimeConfig } = getConfig(),
    client = createClient({
      space: serverRuntimeConfig.CONTENTFUL_SPACE_ID,
      accessToken: serverRuntimeConfig.CONTENTFUL_ACCESS_TOKEN
    }),
    contentResponse = await client.getEntries({ content_type: pageKey, locale: "*" });
  return contentResponse;
};

export const phoneValidator = value => {

  const acceptedRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  return value.length > 0 && !acceptedRegex.test(value);
};

export const emailValidator = email => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export const generateTransform = translate => {
  if (translate)
    return Object.fromEntries(Object.entries(animations).map(([key, value]) => [key, value.replace(/\d+/, translate)]));
  return animations;
};
