import React from "react";

// type planType = {
//   planId: Number;
//   title: string;
//   return_p: string;
//   investment: Number;
//   validity_months: Number;
//   profit: Number;
// };

const Index = ({
  planId,
  title,
  investment,
  profit,
  return_p,
  validity_months,
}: any) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
      <div
        className="package-card text-center bg_img"
        data-background="assets/images/bg/bg-4.png"
      >
        <h4 className="package-card__title base--color mb-2">{title}</h4>
        <ul className="package-card__features mt-4">
          <li>Profit {profit?.toString()} Daily</li>
          {/* <li>{return_p || "daily"}</li> */}
          <li>For {validity_months?.toString()} Months</li>
          {/* <li>
            Total 30% +{" "}
            <span className="badge base--bg text-dark">Capital</span>
          </li> */}
        </ul>
        <div className="package-card__range mt-5 base--color">
          {investment?.toString()}
        </div>
        <a href="#0" className="cmn-btn btn-md mt-4">
          Invest Now
        </a>
      </div>
    </div>
  );
};

export default Index;
