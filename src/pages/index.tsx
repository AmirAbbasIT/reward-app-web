import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "../layouts/Header/index";
import Hero from "../layouts/Hero/Index";
import Footer from "../layouts/Footer/Index";
import HowItWorks from "../layouts/HowItWorks/Index";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}
