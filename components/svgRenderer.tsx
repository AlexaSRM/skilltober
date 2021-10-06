import React, { FunctionComponent } from "react";

type SvgRendererPropsType = {
  filePath: string;
  widthClassProperties?: string;
};

const SvgRenderer: FunctionComponent<SvgRendererPropsType> = ({
  filePath,
  widthClassProperties,
}) => {
  return (
    <img
      src={filePath}
      className={[widthClassProperties, "block mx-auto"].join(" ")}
    />
  );
};

export default SvgRenderer;
