import Testimony from "@/components/Testimony";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimony />
      <Features />
      <Newsletter />
    </>
  );
}
