import React from "react";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthUserProvider } from "../context/firebaseContext";
import { useRouter } from "next/router";
import VertexLoader from "@/components/loaders/VertexLoader";
import PreLoadeer from "@/components/loaders/PreLoadeer";
// import { ToastContainer } from "react-toastify";
// import { ToastMessage } from "react-toastr";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const { authUser, loading } = useFirebaseAuth();
  const router = useRouter();

  console.log("user", authUser);
  if (loading) {
    return (
      <>
        <PreLoadeer />
      </>
    );
  }

  return (
    <>
      <AuthUserProvider>
        <div className="page-wrapper">
          <Component {...pageProps} />
        </div>
      </AuthUserProvider>
    </>
  );
}
