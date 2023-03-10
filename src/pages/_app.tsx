import React from "react";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthUserProvider } from "../context/firebaseContext";
import { PlansProvider } from "../context/plansContext";
import { useRouter } from "next/router";
import VertexLoader from "@/components/loaders/VertexLoader";
import PreLoadeer from "@/components/loaders/PreLoadeer";
import "toastr/build/toastr.min.css";
import Firebase, { getDb } from "@/configs/firebaseinit";
import { StoreProvider } from "easy-peasy";
import store from "@/store";
import { useDispatch } from "react-redux";
// import { getPlansData } from "@/store/slices/plans";

export default function App({ Component, pageProps }: AppProps) {
  const { authUser, loading } = useFirebaseAuth();
  // const dispatch = useDispatch();
  // const {loading,blogs}=useStoreState(state=>state.policies)
  // const {getBlogs}=useStoreActions(actions=>actions.policies)
  const router = useRouter();

  React.useEffect(() => {
    if (!store.getState().plans?.plans.length) {
      // debugger;
      store.getActions().plans.getPlans();
    }
  }, []);

  console.log(store.getState().plans);

  if (loading) {
    return (
      <>
        <PreLoadeer />
      </>
    );
  }
  return (
    <>
      <StoreProvider store={store}>
        <AuthUserProvider>
          <div className="page-wrapper">
            <Component {...pageProps} />
          </div>
        </AuthUserProvider>
      </StoreProvider>
    </>
  );
}
