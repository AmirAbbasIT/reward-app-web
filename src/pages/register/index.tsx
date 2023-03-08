import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import Header from "../../layouts/Header/index";
import Footer from "../../layouts/Footer/Index";

const loginSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Fullname should be min 4 characters")
    .required("Full name is required."),
  email: Yup.string()
    .email("Please type a valid email.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
});

const Index = () => {
  const router = useRouter();
  const { createUserWithEmailAndPassword, authUser, loading } =
    useFirebaseAuth();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(fullName, email, password);
    },
  });

  const { fullName, email, password } = formik.values;
  const { handleChange, errors, touched, handleBlur } = formik;

  return (
    <>
      <Header />
      <div
        className="account-section bg_img"
        data-background="assets/images/bg/bg-5.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="account-card">
                <div
                  className="account-card__header bg_img overlay--one"
                  data-background="assets/images/bg/bg-6.jpg"
                >
                  <h2 className="section-title">
                    Welcome to <span className="base--color">Silver Coin</span>
                  </h2>
                  <p>SignIn/Signup to explore investment oppertunities.</p>
                </div>
                <div className="account-card__body">
                  <h3 className="text-center">Create an Account</h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={fullName}
                      className="form-control"
                      placeholder="Enter full name"
                    />
                    <span className="error text-danger font-bold">
                      {errors?.fullName ? errors.fullName : ""}
                    </span>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={email}
                      className="form-control"
                      placeholder="Enter email address"
                    />
                    <span className="error text-danger font-bold">
                      {errors?.email ? errors.email : ""}
                    </span>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={password}
                      className="form-control"
                      placeholder="Enter password"
                    />
                    <span className="error text-danger font-bold">
                      {errors?.password ? errors.password : ""}
                    </span>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6 ">
                      <p className="f-size-14">
                        Have an account?{" "}
                        <Link href="/login" className="base--color">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={(e) => {
                        e?.preventDefault();
                        formik.handleSubmit();
                      }}
                      className="cmn-btn"
                    >
                      SignUp Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
