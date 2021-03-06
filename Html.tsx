import * as React from "react";

export const Html = ({ content, state }) => {
  return (
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <link rel="stylesheet" href="/public/server.css" /> */}
        <link rel="stylesheet" href={`/public/clientApp.css?v=${Date.now()}`} />
        {/* <link rel="icon" href="/public/favicon.ico" /> */}
      </head>
      <body>
        <div id="adminApp" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              "\\u003c"
            )};`,
          }}
        />
        <script
          type="application/javascript"
          src={`/public/client.js?v=${Date.now()}`}
        />
      </body>
    </html>
  );
};

// import Helmet from "react-helmet";

// export default class Html extends React.Component<any, any> {
//   static propTypes = {
//     assets: PropTypes.object,
//     component: PropTypes.node,
//     store: PropTypes.object
//   };

//   render() {
//     const head = Helmet.rewind();

//     return (
//       <html lang="en-us">
//         <head>
//           {head.base.toComponent()}
//           {head.title.toComponent()}
//           {head.meta.toComponent()}
//           {head.link.toComponent()}
//           {head.script.toComponent()}

//           <meta name="viewport" content="width=device-width, initial-scale=1" />

//           <link
//             type="text/css"
//             rel="stylesheet"
//             href="/css/style.css"
//             media="screen,projection"
//           />
//         </head>
//         <body>
//           <div id="client" />

//           <script src="https://unpkg.com/react@16/umd/react.development.js" />
//           <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />
//           <script src="http://localhost:8080/dist/bundle.js" charSet="UTF-8" />
//         </body>
//       </html>
//     );
//   }
// }
