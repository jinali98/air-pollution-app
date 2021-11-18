import React from "react";
import { ErrorMsgContainer } from "./ErrorMsgStyle";

const ErrorMsg = ({ allowLocation, loading, error, view }) => {
  let message = null;
  // error handling
  if (!allowLocation) {
    message = "Permission denied! Cannot get Location";
  }
  if (loading) {
    message = "Loading...";
  }

  if (!view) {
    message = "Something Went Wrong!";
  }

  if (error) {
    message = error;
  }

  return (
    <React.Fragment>
      {message && (
        <ErrorMsgContainer>
          <div>
            <p className="msg">{message}</p>
          </div>
        </ErrorMsgContainer>
      )}
      ;
    </React.Fragment>
  );
};

export default ErrorMsg;
