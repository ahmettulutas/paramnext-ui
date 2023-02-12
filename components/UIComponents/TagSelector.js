import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { classNames } from "@/lib/helpers";
import GlobeIcon from "../../assets/images/globe.svg";
import DownIcon from "../../assets/images/down-arrow.svg";

const TagSelector = ({ items, className, onChange }) => {

  const
    [selected, setSelected] = useState("cardProcessing"),
    onClick = id => {
      setSelected(id);
      onChange?.(id);
    };

  return (
    <div className={classNames(["tag-selector", className])}>
      {
        items.map(x => (
          <div
            key={x.name}
            className={classNames(["tag-item", selected === x.id && "selected"])}
            onClick={() => onClick(x.id)}
          >
            <span className="tag-icon">
              <GlobeIcon />
            </span>
            <FormattedMessage id={x.name} />
            <span className="selected-icon">
              <DownIcon />
            </span>
          </div>
        ))
      }
    </div>

  );
};

TagSelector.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string
};

TagSelector.defaultProps = {
  items: [],
  className: ""
};

export default TagSelector;