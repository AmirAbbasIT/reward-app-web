import { useStoreState } from "easy-peasy";
import React from "react";
import { useSelector } from "react-redux";
import Plan from "../../components/plan/Plan";

const Index = () => {
  const { plans } = useStoreState<any>((state) => state.plans);

  console.log("pp", plans);
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-header">
              <h2 className="section-title">
                <span className="font-weight-normal">Investment</span>{" "}
                <b className="base--color">Plans</b>
              </h2>
              <p>
                To make a solid investment, you have to know where you are
                investing. Find a plan which is best for you.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-none-30">
          {plans && plans?.length ? (
            <>
              <div className="row justify-content-center mb-none-30">
                {plans.map((plan: any, index: any) => (
                  <>
                    {console.log(plan, index, "nooo")}
                    <Plan
                      planId={index + 1}
                      title={plan.title}
                      investment={plan.investment}
                      profit={plan.profit}
                      return_p={plan.return}
                      validity_months={plan.validity_months}
                    />
                  </>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/* <div className="row mt-50">
          <div className="col-lg-12 text-center">
            <a href="#0" className="cmn-btn">View All Packages</a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Index;
