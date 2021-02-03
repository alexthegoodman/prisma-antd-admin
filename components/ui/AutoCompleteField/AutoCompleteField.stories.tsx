import * as React from "react";
import { storiesOf } from "@storybook/react";
import AutoCompleteField from "./AutoCompleteField";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("AutoCompleteField", () => (
  <TestProvider>
    <AutoCompleteField />
  </TestProvider>
));
