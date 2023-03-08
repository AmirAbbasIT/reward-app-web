import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="assets/css/vendor/slick.css" />
        <link rel="stylesheet" href="assets/css/vendor/dots.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </Head>
      <Script src="assets/js/vendor/jquery-3.5.1.min.js"></Script>
      <Script src="assets/js/vendor/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/vendor/slick.min.js"></Script>
      <Script src="assets/js/vendor/wow.min.js"></Script>
      <Script src="assets/js/app.js"></Script>
      <body>
        <div className="scroll-to-top">
          <span className="scroll-icon">
            <i className="fa fa-rocket" aria-hidden="true"></i>
          </span>
        </div>
        <div className="full-wh">
          <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
