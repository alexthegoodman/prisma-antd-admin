import * as React from "react";
import { storiesOf } from "@storybook/react";
import PrimaryForm from "./PrimaryForm";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PrimaryForm", () => (
  <TestProvider>
    <PrimaryForm />
  </TestProvider>
));
