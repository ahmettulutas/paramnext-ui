import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import { FormattedMessage } from "react-intl";
import { GradientBorder } from "../UIKit";

const BoxedContent = ({ titleId, subTitleId, title, subTitle, content }) => (
  <section className="boxed-content">

    <div className="content">

      <Typography.Title level={5}>
        { titleId ? <FormattedMessage id={titleId} /> : title }
      </Typography.Title>

      <Typography.Title level={3}>
        { subTitleId ? <FormattedMessage id={subTitleId} />: subTitle }
      </Typography.Title>

      <GradientBorder className="mt-64">
        {content}
      </GradientBorder>

    </div>

  </section>
);

BoxedContent.propTypes = {
  titleId: PropTypes.string,
  subTitleId: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  contents: PropTypes.array
};

BoxedContent.defaultProps = {
  titleId: null,
  subTitleId: null
};

export default BoxedContent;