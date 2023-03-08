import React from "react";

import Header from "../../layouts/Header/index";
import Footer from "../../layouts/Footer/Index";

const Index = () => {
  return (
    <>
      <Header />
      <div className="container inner-hero">
        <div className="card m-2 mt-8 p-4 bg-white text-black">
          <p>Hello</p>
          <h3>World</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
