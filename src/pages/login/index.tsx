import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./login.module.css";
import { motion } from "framer-motion";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { useRouter } from "next/router";
import VertexLoader from "@/components/loaders/VertexLoader";
import { signInWithGoogle } from "@/configs/firebaseinit";
import { FcGoogle } from "react-icons/fc";
import PreLoadeer from "@/components/loaders/PreLoadeer";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please type a valid email.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
});

const index = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (email && password) signInWithEmailAndPassword(email, password);
    },
  });

  const { signInWithEmailAndPassword, authUser, loading } = useFirebaseAuth();

  const { email, password } = formik.values;
  const { handleChange, errors, touched, handleBlur } = formik;

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (authUser) {
      router.push("/dashboard");
    }
  }, [authUser]);

  if (loading) {
    return (
      <>
        <PreLoadeer />
      </>
    );
  }

  return (
    <>
      <div
        className="account-section bg_img"
        data-background="assets/images/bg/bg-5.jpg"
      >
        <motion.div
          className="container"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.5 },
          }}
        >
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
                  <div className="m-4">
                    <motion.button
                      onClick={(e) => {
                        e?.preventDefault();
                        signInWithGoogle();
                      }}
                      className={` btn google-btn text-white`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <FcGoogle size={60} className="mr-4" />
                      SignIn with Google
                    </motion.button>
                  </div>
                </div>
                <div className="account-card__body">
                  <h3 className="text-center">Login</h3>
                  {/* <form className="mt-4"> */}
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={email}
                      className="form-control"
                      placeholder="Enter email"
                    />
                    <span className="error text-danger font-bold">
                      {errors?.email && touched?.email ? errors.email : ""}
                    </span>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={password}
                      type={"password"}
                      className="form-control"
                      placeholder="Enter password"
                    />
                    <span className="error text-danger font-bold">
                      {errors?.password && touched?.password
                        ? errors.password
                        : ""}
                    </span>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6 ">
                      <p className="f-size-14">
                        Haven't an account?{" "}
                        <a href="registration.html" className="base--color">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <motion.button
                      onClick={(e) => {
                        e?.preventDefault();
                        formik.handleSubmit();
                      }}
                      className="cmn-btn"
                    >
                      Login Now
                    </motion.button>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className="bg-yellow-500 h-[100vh] font-sans">
        <div className="login-container flex items-center justify-center h-full">
          <motion.form
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.5 },
            }}
            className="w-[800px] -mt-24 mx-4"
          >
            <div className="input-group flex flex-col my-4 md:my-6">
              <label className="form-label text-white text-lg font-bold">
                Email Address
              </label>
              <motion.input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={email}
                type="email"
                className={`w-full form-control py-2 md:py-4 rounded px-2 md:px-4 outline-yellow-600`}
                placeholder="Enter Email Address"
                whileFocus={{ scale: 1.02 }}
              />
              <span className="error text-red-600 font-bold">
                {errors?.email && touched?.email ? errors.email : ""}
              </span>
            </div>

            <div className="input-group flex flex-col my-4 md:my-6">
              <label className="form-label text-white md:text-lg font-bold">
                Password
              </label>
              <div className="wrap-icon-right">
                <motion.input
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={password}
                  type={"password"}
                  className={`w-full form-control py-2 md:py-4 rounded px-2 md:px-4 outline-yellow-600`}
                  placeholder="****"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <span className="error text-red-600 font-bold">
                {errors?.password && touched?.password ? errors.password : ""}
              </span>
            </div>
            <div className="col flex items-center justify-center  mt-6 md:mt-12">
              <motion.button
                onClick={(e) => {
                  e?.preventDefault();
                  formik.handleSubmit();
                }}
                className={`bg-green-600 hover:bg-green-800 w-[100%] py-2 md:py-4  text-white text-xl font-bold  rounded `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Log in
              </motion.button>
            </div>
            <div className="col flex items-center justify-center  mt-6 md:mt-12">
              <motion.button
                onClick={(e) => {
                  e?.preventDefault();
                  signInWithGoogle();
                }}
                className={`bg-orange-600 hover:bg-orange-700 w-[100%] py-4 md:py-6  text-white text-xl font-bold  rounded flex flex-row items-center justify-center `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FcGoogle size={60} className="mr-4" />
                SignIn with Google
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div> */}
    </>
  );
};

export default index;
