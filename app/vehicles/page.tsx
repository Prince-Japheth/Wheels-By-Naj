import type { Metadata } from "next";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import SidebarModal from "../components/SidebarModal";
import VehiclesContent from "../components/VehiclesContent";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Vehicles - RentQ",
  description: "Browse our premium fleet of rental vehicles.",
};

export default function VehiclesPage() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <SidebarModal />
      <VehiclesContent />
      <Footer />
    </div>
  );
}
