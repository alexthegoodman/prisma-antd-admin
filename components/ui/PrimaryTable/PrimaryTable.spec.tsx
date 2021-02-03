import * as React from "react";
import { render } from "enzyme";

import PrimaryTable from "./PrimaryTable";
import TestProvider from "../../modules/client/TestProvider";

describe("PrimaryTable", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PrimaryTable />
      </TestProvider>
    );
  });

  it("", () => {});
});
