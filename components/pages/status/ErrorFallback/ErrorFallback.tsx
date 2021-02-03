import * as React from "react";
import { ErrorFallbackProps } from "./ErrorFallback.d";
import { withScope, captureException, showReportDialog } from "@sentry/browser";

// const ErrorFallback: React.FC<ErrorFallbackProps> = ({
//   error,
//   componentStack,
// }) => {
//   return (
//     <>
//       <p>
//         <strong>Oops! An error occured!</strong>
//       </p>
//       <p>Here’s what we know…</p>
//       <p>
//         <strong>Error:</strong>
//         {typeof error !== "undefined" ? error.toString() : "undefined"}
//         <a onClick={() => showReportDialog({ eventId: this.state.eventId })}>Report feedback</a>
//       </p>
//       <p>
//         <strong>Stacktrace:</strong> {componentStack}
//       </p>
//     </>
//   );
// };

class ErrorFallback extends React.Component<any, any, any> {
  constructor(props) {
    super(props);
    this.state = { error: null, eventId: null };
  }

  componentDidMount() {
    const { error } = this.props;
    this.setState({ error });
    withScope((scope) => {
      // scope.setExtras(errorInfo);
      const eventId = captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { error } = this.props;
    //render fallback UI
    return (
      <>
        <strong>Error:</strong>
        {typeof error !== "undefined" ? error.toString() : "undefined"}
        <a onClick={() => showReportDialog({ eventId: this.state.eventId })}>
          Report feedback
        </a>
      </>
    );
  }
}

export default ErrorFallback;
