import React from "react";
import PropTypes from "prop-types";
/* import { FormattedMessage } from "react-intl"; */
import GlobeIcon from "@/assets/images/globe.svg";
import { Typography } from "antd";
import { ReactSVG } from "react-svg";

const SolutionItem = ({ title, description, localeImage }) => {

  const { file } = localeImage.fields;
  return (
    <div className="solution-item">
      {
        localeImage ?
          <ReactSVG src={`https:${file.url}`} />
          :
          <GlobeIcon />
      }
      <Typography.Title level={4}>
        {title}
      </Typography.Title>
      <p>
        {description}
      </p>
    </div>
  );
};
SolutionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SolutionItem;