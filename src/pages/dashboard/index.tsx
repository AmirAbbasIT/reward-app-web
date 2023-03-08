import React from "react";
import withAuth from "../../hoc/withAuth";
import Header from "../../layouts/Header/index";
import Footer from "../../layouts/Footer/Index";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";

const Index = () => {
  const { authUser, loading }: any = useFirebaseAuth();

  return (
    <>
      <Header />
      <div className="container inner-hero">
        <div className="card m-2 mt-8 p-4 dashboard-card">
          <div className="row">
            <div className="col-md-6">
              <p>Hello</p>
              <h2>{authUser?.displayName || authUser?.email} !</h2>
            </div>
            <div className="col-md-6">
              <h1>Balance: 0$</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withAuth(Index);
