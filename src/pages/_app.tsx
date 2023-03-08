import React from "react";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthUserProvider } from "../context/firebaseContext";
import { useRouter } from "next/router";
import VertexLoader from "@/components/loaders/VertexLoader";
import PreLoadeer from "@/components/loaders/PreLoadeer";

export default function App({ Component, pageProps }: AppProps) {
  const { authUser, loading } = useFirebaseAuth();
  const router = useRouter();

  // React.useEffect(() => {
  //   if (!loading && !authUser) router.push("/login");
  // }, [authUser, loading]);
  console.log("user", authUser);
  if (loading) {
    return (
      <>
        <PreLoadeer />
      </>
    );
  }

  return (
    <AuthUserProvider>
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
    </AuthUserProvider>
  );
}
