// import Image from "next/image";

import NavBar from "@/components/1-navBar/nav";
import Hero from "@/components/2-hero/hero";
import Camp from "@/components/3-camp/camp";
import Guide from "@/components/4-guide/guide";
import Features from "@/components/5-features/features";
import GetApp from "@/components/6-getApp/getApp";
import FooTer from "@/components/7-footer/footer";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <Camp />
      <Guide/>
      <Features />
      <GetApp />
      <FooTer />
    </main>
  );
}
