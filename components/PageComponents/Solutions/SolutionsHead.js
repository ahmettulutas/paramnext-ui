import React from "react";
import { Typography, Avatar } from "antd";
import { FormattedMessage } from "react-intl";
import ExploreIcon from "@/assets/images/explore.svg";

const SolutionsHead = () => (
  <div className="text-center">

    <Typography.Title level={5} className="uppercase">
      <FormattedMessage id="label.solutions" />
    </Typography.Title>

    <Typography.Title level={3} className="m-0">
      <FormattedMessage id="label.solutionsTitle1" />
    </Typography.Title>
    <Typography.Title level={3} className="m-0">
      <FormattedMessage id="label.solutionsTitle2" />
    </Typography.Title>

    <div className="explore">
      <Avatar.Group>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" alt="client-1" />
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="client-2" />
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female" alt="client-3" />
      </Avatar.Group>

      <ExploreIcon />

      <p>
        <FormattedMessage id="label.customerFeedback" />
        <b className="ml-8"><FormattedMessage id="label.explore"/></b>
      </p>

    </div>

  </div>
);

export default SolutionsHead;