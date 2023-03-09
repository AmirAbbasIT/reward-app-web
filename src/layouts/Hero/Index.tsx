import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useRouter } from "next/router";
import React from "react";

const Index = ({ ...rest }) => {
  const router = useRouter();
  const { authUser } = useFirebaseAuth();

  return (
    <section
      className="hero bg_img"
      data-background="assets/images/bg/hero.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-8">
            <div className="hero__content">
              <h2 className="hero__title">
                <span className="text-white font-weight-normal">
                  Invest for Future in Stable Platform
                </span>{" "}
                <b className="base--color">and Make Fast Money</b>
              </h2>
              <p className="text-white f-size-18 mt-3">
                Invest in an Industry Leader, Professional, and Reliable
                Company. We provide you with the most necessary features that
                will make your experience better. Not only we guarantee the
                fastest and the most exciting returns on your investments, but
                we also guarantee the security of your investment.
              </p>
              {!authUser ? (
                <a
                  href="#0"
                  onClick={() => router.push("/login")}
                  className="cmn-btn text-uppercase font-weight-600 mt-4 mr-4"
                >
                  Login
                </a>
              ) : (
                <></>
              )}

              {/* <a
                href="#0"
                className="cmn-btn text-uppercase font-weight-600 mt-4"
              >
                Sign Up
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
