import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PickClass from "@/components/PickClass";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Featured/>
        <PickClass/>
      </main>
      <Footer/>

    </>
  );
}
