import React from "react";

const Index = () => {
  return (
    <section
      className="pt-120 pb-120 bg_img"
      data-background="assets/images/bg/bg-5.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-header">
              <h2 className="section-title">
                <span className="font-weight-normal">How</span>{" "}
                <b className="base--color">Hyiplab</b>{" "}
                <span className="font-weight-normal">Works</span>
              </h2>
              <p>
                Get involved in our tremendous platform and Invest. We will
                utilize your money and give you profit in your wallet
                automatically.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-none-30">
          <div className="col-lg-4 col-md-6 work-item mb-30">
            <div className="work-card text-center">
              <div className="work-card__icon">
                <i className="las la-user base--color"></i>
                <span className="step-number">01</span>
              </div>
              <div className="work-card__content">
                <h4 className="base--color mb-3">Create Account</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 work-item mb-30">
            <div className="work-card text-center">
              <div className="work-card__icon">
                <i className="las la-hand-holding-usd base--color"></i>
                <span className="step-number">02</span>
              </div>
              <div className="work-card__content">
                <h4 className="base--color mb-3">Invest To Plan</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 work-item mb-30">
            <div className="work-card text-center">
              <div className="work-card__icon">
                <i className="las la-wallet base--color"></i>
                <span className="step-number">03</span>
              </div>
              <div className="work-card__content">
                <h4 className="base--color mb-3">Get Profit</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
