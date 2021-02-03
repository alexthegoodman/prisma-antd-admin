import * as React from "react";

import { PrimaryButtonProps } from "./PrimaryButton.d";

import { Typography, Button } from "antd";
import { Link } from "react-navi";
const { Title, Text } = Typography;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  label = "Button",
  linkTo = null,
  antButtonProps = null
}) => {
  const clickHandler = (e) => onClick(e);
  
  let buttonInner = <>{label}</>;
  if (linkTo !== null) {
    buttonInner = <Link href={linkTo}>{label}</Link>
  }

  let button = (
    <Button 
      className={className} 
      onClick={clickHandler} 
      {...antButtonProps}
    >
      {buttonInner}
    </Button>
  );

  let buttonOuter = button;
  return buttonOuter;
};

export default PrimaryButton;
