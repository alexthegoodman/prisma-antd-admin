import "core-js/stable";
import "regenerator-runtime/runtime";

import window from "global";
// import TagManager from "react-gtm-module";

import * as React from "react";
import * as ReactDom from "react-dom";
import RootProvider from "./RootProvider";

const bootstrapAdminClient = () => {
  console.info("bootstrap admin client");

  // TODO: add to ENV
  // const tagManagerArgs = {
  //   gtmId: process.env.GTM,
  // };

  // TagManager.initialize(tagManagerArgs);

  if (
    typeof document.getElementById("adminApp") !== "undefined" &&
    document.getElementById("adminApp") !== null
  ) {
    ReactDom.render(<RootProvider />, document.getElementById("adminApp"));
  }
};

bootstrapAdminClient();
