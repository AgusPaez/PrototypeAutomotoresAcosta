import React from "react";

export const Button = ({ text, style, ref }) => {
  return (
    <a className={`cursor-pointer ${style} `} href={ref}>
      {text}
    </a>
  );
};
