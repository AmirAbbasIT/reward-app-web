import React from "react";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthUserProvider } from "../context/firebaseContext";
import { useRouter } from "next/router";
import VertexLoader from "@/components/loaders/VertexLoader";

export default function App({ Component, pageProps }: AppProps) {
  const { authUser, loading } = useFirebaseAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);

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
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}
