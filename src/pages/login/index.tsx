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
      router.push("/home");
    }
  }, [authUser]);

  if (loading) {
    return (
      <>
        <div className="grid h-screen place-items-center bg-yellow-500">
          <VertexLoader />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-yellow-500 h-[100vh] font-sans">
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
      </div>
    </>
  );
};

export default index;
