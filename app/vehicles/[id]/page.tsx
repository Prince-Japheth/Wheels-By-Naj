import type { Metadata } from "next";
import TopHeader from "../../components/TopHeader";
import Navbar from "../../components/Navbar";
import SidebarModal from "../../components/SidebarModal";
import VehicleDetailsContent from "../../components/VehicleDetailsContent";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Vehicle Details - RentQ",
  description: "View full details, specs, and book this vehicle.",
};

export default function VehicleDetailsPage() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <SidebarModal />
      <VehicleDetailsContent />
      <Footer />
    </div>
  );
}
