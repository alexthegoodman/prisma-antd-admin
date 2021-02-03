import * as React from "react";
import { storiesOf } from "@storybook/react";
import PrimaryTable from "./PrimaryTable";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PrimaryTable", () => (
  <TestProvider>
    <PrimaryTable />
  </TestProvider>
));
