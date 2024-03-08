import Download from "../components/Download";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
    </>
  );
};

export default HomePage;
