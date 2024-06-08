"use client"
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="slide-container">
      <div className='h-[80vh] sm:h-[90vh] bg-cover bg-center bg-no-repeat'
     style={{
       backgroundImage: "url('/bg.png')",
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
     }}>

        <div className='flex flex-col justify-start items-center h-full w-full'>
          <motion.div className='flex text-black items-center justify-center pt-28 md:pt-36'
                      variants={variants}
                      initial='initial'
                      whileInView='animate'>
            <div className='flex flex-col items-center justify-center'>
              <motion.h3 className='text-xl sm:text-3xl font-medium' variants={variants}>WELCOME TO NOTESHAALA</motion.h3>
              <motion.h2 className='text-4xl sm:text-7xl font-semibold my-6 sm:my-10' variants={variants}>GET FREE NOTES</motion.h2>
              <motion.p className='px-5 md:px-0 md:w-3/5 text-center sm:mb-10 mb-1 sm:text-lg' variants={variants}>
                Your digital companion for academic excellence. Get ready to revolutionize your study experience!
              </motion.p>
              <motion.button className='bg-[#29b5f6d5] hover:bg-[#29b5f686] hover:scale-[1.02] sm:w-40 p-2 py-1 sm:py-2 mt-5 rounded-md' variants={variants}>Sign up</motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
