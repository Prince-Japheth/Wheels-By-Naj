import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import SidebarModal from "./components/SidebarModal";
import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import Vehicles from "./components/Vehicles";
import WhyChooseUs from "./components/WhyChooseUs";
import SpecialDeals from "./components/SpecialDeals";
import VideoSection from "./components/VideoSection";
import PopularLocations from "./components/PopularLocations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <SidebarModal />
      <main>
        <Banner />
        <HowItWorks />
        <Vehicles />
        <WhyChooseUs />
        <SpecialDeals />
        <VideoSection />
        <PopularLocations />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTA />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
