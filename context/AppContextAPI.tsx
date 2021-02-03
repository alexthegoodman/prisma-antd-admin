import * as photon from "../../../__generated__/photon";
import * as React from "react";
import { MixpanelConsumer } from "react-mixpanel";
import { AppContextProvider } from ".";
import Utility from "../../services/Utility";
import { useQuery } from "react-apollo";
import { useCookies } from "react-cookie";

export interface IInitialAppState {
  userData?: photon.User;
  mixpanel?: any;
}

export let InitialAppState: Partial<IInitialAppState> = {
  userData: null,
  mixpanel: null,
};

export const AppContextAPI = ({ children }) => {
  const utility = new Utility();

  const reducer = (state, action) => {
    switch (action.type) {
      case "setUserData":
        return {
          ...state,
          userData: action.userData,
        };

      default:
        return state;
    }
  };

  return (
    <MixpanelConsumer>
      {mixpanel => (
        <AppContextProvider
          initialState={{
            ...InitialAppState,
            mixpanel,
          }}
          reducer={reducer}
        >
          {children}
        </AppContextProvider>
      )}
    </MixpanelConsumer>
  );
};
