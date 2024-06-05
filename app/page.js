import Image from "next/image";
import Link from "next/link";
import NotesBranchWise from "./components/NotesBranchWise";
import TestimonialCarousel from "./testimonials/page";
import ShareNotes from "./components/ShareNotes";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import Contact from "./components/Contact";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Hero/>
      </div>
      <div>
        <About/>
      </div>
      <div id="notes">
        <NotesBranchWise />
      </div>
      <div id="reviews">
        <TestimonialCarousel />
      </div>
      <div id="uploads">
        <ShareNotes />
      </div>
      <div id="contacts">
        <Contact />
      </div>
    </div>
  );
}
