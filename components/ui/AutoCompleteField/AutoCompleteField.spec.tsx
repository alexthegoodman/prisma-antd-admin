import * as React from "react";
import { render } from "enzyme";

import AutoCompleteField from "./AutoCompleteField";
import TestProvider from "../../modules/client/TestProvider";

describe("AutoCompleteField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AutoCompleteField />
      </TestProvider>
    );
  });

  it("", () => {});
});
