import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="my-3">
        Home Page
        <Link href='/uploadnotes' style={{ margin: '0 40px' }}>Upload</Link>
      </div>
      <div className="flex flex-wrap justify-center items-center lg:mt-10 mt-8 gap-10">
        <div className="flex flex-col justify-center items-center">
          <Link href='/EE'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>ELECTRICAL</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/ECE'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>ELECTRONICS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/ME'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>MECHANICAL</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/CS'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>COMPUTER SCIENCE</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/CE'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>CIVIL</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/MME'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>METALLURGY</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/PIE'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>PRODUCTION</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href='/ECM'><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
          <p>ECM</p>
        </div>
      </div>
    </div>
  );
}
