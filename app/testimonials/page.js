"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";

const TestimonialCarousel = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/testimonials');
        setUsers(response.data.testimonials);
        console.log(response);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch testimonials.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center mt-12 overflow-x-hidden">
      <h1 className="mb-8 text-[3rem] font-bold">OUR HAPPY STUDENTS</h1>

      {error && <div className="text-red-500">{error}</div>}

      <Carousel
        plugins={[Autoplay({ delay: 1500 })]}
        opts={{
          align: "start",
        }}
        className="w-[70%]"
      >
        <CarouselContent>
          {Array.isArray(users) && users.map((data, index) => (
            <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/3 lg:basis-1/4">
              <div className="flex w-[100%] flex-col h-[50vh] rounded-[2rem] items-center justify-center bg-[#29b5f6d5]">
                <span>
                  <img
                    className="aspect-square rounded-full w-[9rem] border-[2px] border-white"
                    src={data.photo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                    alt="picture"
                  />
                </span>
                <span className="text-2xl font-semibold p-2 text-white">{data.fullname}</span>
                <span className="text-lg text-center p-4 text-white">{data.message}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Link href="/userTestimonial">
        <button className="mt-12 border-white border-[2px] rounded-lg px-7 py-2 text-lg bg-[#29b5f6d5] hover:bg-[#29b5f686] hover:scale-[1.02]">
          Drop your experience
        </button>
      </Link>
    </main>
  );
};

export default TestimonialCarousel;
