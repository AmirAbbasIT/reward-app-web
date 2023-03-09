import PreLoadeer from "@/components/loaders/PreLoadeer";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const { authUser, loading, signOut } = useFirebaseAuth();
  const [showCollapse, setShowCollapse] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__bottom" style={{ paddingBlock: "20px" }}>
          <div className="container">
            <nav
              className="navbar navbar-expand-xl p-0 align-items-center"
              // style={{ minHeight: "90px" }}
            >
              <a
                className=" site-title"
                href="#"
                onClick={() => router.push("/")}
              >
                <img
                  src="/logo.png"
                  alt="site-logo"
                  className="header-logo"
                  style={{
                    width: "330px",
                    height: "175px",
                    position: "absolute",
                    top: "-40px",
                  }}
                />
              </a>
              <ul className="account-menu mobile-acc-menu">
                <li className="icon">
                  <a href="login.html">
                    <i className="las la-user"></i>
                  </a>
                </li>
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={showCollapse}
                aria-label="Toggle navigation"
                onClick={() => setShowCollapse(!showCollapse)}
              >
                <span className="menu-toggle"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  showCollapse ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav main-menu m-auto">
                  <li>
                    {" "}
                    <a href="#" onClick={() => router.push("/")}>
                      Home
                    </a>
                  </li>
                  {/* <li>
                  {" "}
                  <a onClick={() => router.push("/about")}>About Us</a>
                </li> */}
                  <li>
                    {" "}
                    <a href="#" onClick={() => router.push("/plans")}>
                      Plan
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => router.push("/dashboard")}>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => router.push("/contactUs")}>
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="nav-right">
                  <ul className="account-menu ml-3">
                    <li className="icon">
                      {!authUser ? (
                        <a href="#" onClick={() => router.push("/login")}>
                          <i className="las la-user"></i>
                        </a>
                      ) : (
                        <a href="#" onClick={() => signOut(router)}>
                          Logout
                        </a>
                      )}
                      {/* <a href="#" onClick={() => router.push("/login")}>
                      <i className="las la-user"></i>
                    </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
