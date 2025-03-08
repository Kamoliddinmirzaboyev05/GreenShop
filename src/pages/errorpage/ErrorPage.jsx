import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="page">
      <div className="errorpage">
        <div className="container">
          <div className="goHomeBtn">
            <Link to={"/"}>
              <button>Go Home</button>
            </Link>
          </div>
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-animation-download-in-lottie-json-gif-static-svg-file-formats--page-not-found-response-server-pack-seo-web-animations-4699349.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
