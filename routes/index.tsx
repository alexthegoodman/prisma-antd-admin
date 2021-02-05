import { lazy, mount, route } from "navi";
import * as React from "react";

import he from "he";
import Utility from "good-helpers/Utility";
import Strings from "good-helpers/Strings";
import Login from "../components/pages/Login/Login";
import ObjectDetail from "../components/pages/ObjectDetail/ObjectDetail";
import NewObject from "../components/pages/NewObject/NewObject";
import ObjectList from "../components/pages/ObjectList/ObjectList";
import EditObject from "../components/pages/EditObject/EditObject";

const utility = new Utility();
// const legacy = new Legacy();
const strings = new Strings();
const changeCase = require("change-case");

const routes = mount({
  "/admin": route((req) => {
    return {
      title: "Admin",
      // head: (
      //   <>
      //     <link rel="canonical" href="https://reeviewr.com/login" />
      //   </>
      // ),
      view: <Login />,
    };
  }),
  "/admin/list": route((req) => {
    return {
      title: "All Objects",
      view: <ObjectList />,
    };
  }),
  "/admin/detail/:objectName": route((req) => {
    const { objectName } = req.params;

    return {
      title: objectName + " Detail",
      view: <ObjectDetail objectName={objectName} />,
    };
  }),
  "/admin/new/:objectName": route((req) => {
    const { objectName } = req.params;

    return {
      title: "New " + objectName + "",
      view: <NewObject objectName={objectName} />,
    };
  }),
  "/admin/edit/:objectId": route((req) => {
    const { objectId } = req.params;

    return {
      title: "Edit Object",
      view: <EditObject objectId={objectId} />,
    };
  }),
});

export default routes;

// TODO: additional configuration
// let route = {
//   url: {
//     pathname: '/navi/core-concepts/',
//     // ...
//   }
//   segments: [/* ... */],
//   title: "Core Concepts",
//   heads: [
//     <meta name="description" content="amazeballs" />, // https://frontarm.com/navi/en/guides/setting-head-meta-title/
//   ],
//   views: [
//     <NaviLayout />,
//     <NaviMDXLayout MDXComponent={/* ... */} />,
//   ],
//   data: {
//     language: 'en',
//   },
// }

// Read more: https://frontarm.com/navi/en/guides/requests-routes-matchers/
// https://frontarm.com/navi/en/guides/nested-views/
// Upload: https://frontarm.com/navi/en/guides/authenticated-routes/
