import Download from "../components/Download";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
