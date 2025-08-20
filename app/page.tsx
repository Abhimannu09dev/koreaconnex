import Image from "next/image";
import Navbar from "@/app/component/navBar";
import ProfileSetup from "@/app/component/profileSetupDashboard";
import Footer from "@/app/component/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <ProfileSetup />
      <Footer />
    </>
  );
}
