import Image from "next/image";
import Link from "next/link";
import NotesBranchWise from "./components/NotesBranchWise";
import TestimonialCarousel from "./testimonials/page";
import ShareNotes from "./components/ShareNotes";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
// import TempHero from "./tempHero/page";

export default function Home() {
  return (
    <div>
      <NavBar/>
      {/* <TempHero/> */}
      <NotesBranchWise/>
      <TestimonialCarousel/>
      <ShareNotes/>
      <Footer/>
    </div>
  );
}
