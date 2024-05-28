import Image from "next/image";
import Link from "next/link";
import NotesBranchWise from "./components/NotesBranchWise";
import TestimonialCarousel from "./testimonials/page";
import ShareNotes from "./components/ShareNotes";

export default function Home() {
  return (
    <div>
      <NotesBranchWise/>
      <TestimonialCarousel/>
      <ShareNotes/>
    </div>
  );
}
