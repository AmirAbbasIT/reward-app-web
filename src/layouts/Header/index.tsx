import PreLoadeer from "@/components/loaders/PreLoadeer";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  const { authUser, loading, signOut } = useFirebaseAuth();

  return (
    <header className="header">
      <div className="header__bottom" style={{ padding: "0px" }}>
        <div className="container">
          <nav className="navbar navbar-expand-xl p-0 align-items-center">
            <a
              className="site-logo site-title"
              href="#"
              onClick={() => router.push("/")}
            >
              <img
                src="/logo.png"
                alt="site-logo"
                style={{ width: "247px", height: "105px" }}
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
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu-toggle"></span>
            </button>
            <div
              className="collapse navbar-collapse"
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
  );
};

export default index;
