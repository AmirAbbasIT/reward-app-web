import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "../layouts/Header/index";
import Hero from "../layouts/Hero/Index";
import Footer from "../layouts/Footer/Index";
import HowItWorks from "../layouts/HowItWorks/Index";
import InvestmentPlans from "../layouts/InvestmentPlans/Index";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InvestmentPlans />
      <HowItWorks />
      <Footer />
    </>
  );
}
