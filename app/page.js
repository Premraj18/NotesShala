import Image from "next/image";
import Link from "next/link";
import NotesBranchWise from "./components/NotesBranchWise";
import TestimonialCarousel from "./testimonials/page";
import ShareNotes from "./components/ShareNotes";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <NotesBranchWise/>
      <TestimonialCarousel/>
      <ShareNotes/>
      <Footer/>
    </div>
  );
}
