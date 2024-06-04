"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const {user, isAuthenticated} = useKindeBrowserClient();
  return (
    <div>
      <nav className="w-full bg-slate-100 fixed top-0 left-0 right-0 z-10 font-etica">
        <div className="justify-between shadow px-4 mx-auto md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 w-full">
          
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="close" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="menu"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
    
            <Link href="/">
              <h2 className="lg:text-4xl text-2xl text-black font-bold lg:ml-4">NOTESHAALA</h2>
            </Link>
           
            {navbar && (
              <div className="mr-4 flex items-center">
                <Link href="/user-profile">
                  <Image
                    src="/user.svg"
                    width={30}
                    height={30}
                    alt="User"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              } ${navbar ? 'text-center justify-center' : ''}`}
            >
              <ul className={`h-screen md:h-auto items-center ${navbar ? 'justify-center flex-col' : 'md:flex'}`}>
                {isAuthenticated&&(
                   <li className={`pb-2 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                    navbar ? 'text-2xl my-4' : 'text-xl'
                  }`}>
                       
                    <Link href="#profiles" onClick={() => setNavbar(!navbar)}>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/user.svg"
                          width={20}
                          height={20}
                          alt="User"
                          className="cursor-pointer mr-2"
                        />
                        {user.given_name}
                      </div>
                    </Link>
                  </li>
                )
                }
               
                <li className={`pb-2 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                  navbar ? 'text-2xl my-4' : 'text-xl'
                }`}>
                  <Link href="#notes" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/notes.svg"
                        width={20}
                        height={20}
                        alt="Note"
                        className="cursor-pointer mr-2"
                      />
                      Notes
                    </div>
                  </Link>
                </li>
                <li className={`pb-2 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                  navbar ? 'text-2xl my-4' : 'text-xl'
                }`}>
                  <Link href="#reviews" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/smile.svg"
                        width={20}
                        height={20}
                        alt="Smile"
                        className="cursor-pointer mr-2"
                      />
                      Reviews
                    </div>
                  </Link>
                </li>
                <li className={`pb-2 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                  navbar ? 'text-2xl my-4' : 'text-xl'
                }`}>
                  <Link href="#uploads" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/upload.svg"
                        width={20}
                        height={20}
                        alt="Upload"
                        className="cursor-pointer mr-2"
                      />
                      Upload
                    </div>
                  </Link>
                </li>
                <li className={`pb-2 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                  navbar ? 'text-2xl my-4' : 'text-xl'
                }`}>
                  <Link href="#contacts" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/arrows.svg"
                        width={20}
                        height={20}
                        alt="Arrow"
                        className="cursor-pointer mr-2"
                      />
                      Contact
                    </div>
                  </Link>
                  
                </li>
               
                    <li className={`pb-2 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                      navbar ? 'text-2xl my-4' : 'text-xl'
                    }`}>
                   {
                  !isAuthenticated&&(
                      <LoginLink>
                        <div className="flex items-center justify-center border-[#29b5f6] py-2 px-4 rounded-lg border-[3px] ">
                        SignIn
                        </div>
                        </LoginLink>
                      )
                      }
                      {
                  isAuthenticated&&(
                      <LogoutLink>
                        <div className="flex items-center justify-center bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] py-2 px-4 rounded-lg">
                        LogOut
                        </div>
                        </LogoutLink>
                      )
                      }
                    </li>
                    
                  
                {
                  !isAuthenticated&&(
                <li className={`pb-2 py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-200 border-gray-800 md:hover:text-black ${
                      navbar ? 'text-2xl my-4' : 'text-xl'
                    }`}>
                      <RegisterLink>
                        <div className="flex items-center justify-center bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] py-2 px-2 rounded-lg ">
                        SignUp
                        </div>
                        </RegisterLink>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
