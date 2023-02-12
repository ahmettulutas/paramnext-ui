import React from "react";
import PropTypes from "prop-types";
import { classNames, getLocalizedImage, getLocalizedText } from "@/lib/helpers";
import Image from "next/image";

const CmsImage = props => {

  const { className, image, ...rest } = props,
    localeImage = getLocalizedImage(image),
    { file } = localeImage.fields,
    { width, height } = file.details.image;

  return (
    <div className={classNames(["image", className])} key={localeImage.sys.id}>
      <Image {...rest} alt={getLocalizedText(localeImage.fields.title)} src={`https:${file.url}`} {...{ width, height }} objectFit="contain" />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default CmsImage;