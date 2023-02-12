import React, { useState, useId } from "react";
import { Input as AntInput } from "antd";
import { classNames } from "@/lib/helpers";


const

  Label = ({ forceFocus, focused, hasValue, info, label, centeredLabel, prefix, id }) => (
    <label htmlFor={id} className={classNames([
      (forceFocus || (!forceFocus && (focused || hasValue))) && "focused",
      centeredLabel && "centered-label",
      (info && prefix) && "use-info-with-prefix"
    ])}>
      {label || ""}
    </label>
  ),

  Input = ({ label, value, className, disabled, required, forceFocus, style, onChange, rows }) => {

    const
      id = useId(),
      [focused, setFocused] = useState(false),
      hasValue = !!(value && value.toString() !== "");

    return (
      <div className={classNames(["input_wrapper textarea", !!disabled && "disabled"])} style={style}>
        <AntInput.TextArea
          id={id}
          autoSize
          rows={rows}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={!!required}
          disabled={!!disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={classNames([
            (value !== null && value !== undefined && value.toString() !== "") && "is-filled",
            className,
            focused && "focused-input"
          ])}
        />
        <Label {...{ forceFocus, focused, hasValue, label, id }} />
      </div>
    );
  };

export default Input;