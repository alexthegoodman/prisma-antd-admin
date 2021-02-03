import * as React from "react";
import { render } from "enzyme";

import PrimaryForm from "./PrimaryForm";
import TestProvider from "../../modules/client/TestProvider";

describe("PrimaryForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PrimaryForm />
      </TestProvider>
    );
  });

  it("", () => {});
});
