import Image from "next/image";
import Hero from "@/components/HeroSection";
import Card from "@/components/Card";
import MakeDifference from "@/components/MakeDifference";
import Features from "@/components/Features";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Features />
      <MakeDifference/>
    </main>
  );
}
