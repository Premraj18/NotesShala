import Link from "next/link";
const Members=()=>{
return(
    <div className="w-full mt-32 h-full">
        <div className="w-[80%] mx-auto">
            <h1 className="text-center font-bold text-xl mb-6">DESIGNED BY</h1>
            <ul className="">
            <li className="mx-auto w-[60vw] md:w-[14.5vw] h-[40vh] bg-[#40c6f615] border">
                <img className="w-32 h-32 rounded-full object-cover object-center mx-auto mt-5" src="prem_tudu.jpeg" alt="" />
                <div className="">
                <p className="text-center font-bold mt-4">Prem Kumar Tudu</p>
                <p className="text-center">UI/UX Designer</p></div>
                <p className="mt-4 text-center"><Link href="https://www.linkedin.com/in/prem-kumar-tudu-59387727a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="border-[2px] border-[#312e2e6c] rounded-md  px-6 py-1">LinkedIn</Link></p>
                </li>
            </ul>

            <h1 className="text-center font-bold text-xl mt-6 mb-6">DEVELOPED BY</h1>
            <ul className="flex gap-6 w-full m-[auto] mb-6 flex-wrap">
                
             
                <li className="mx-auto w-[60vw] md:w-[14.5vw] h-[40vh] bg-[#40c6f615] border">
                <img className="w-32 h-32 rounded-full object-cover object-center mx-auto mt-5" src="prem_raj.png" alt="" />
                <div className="">
                <p className="text-center font-bold mt-4">Prem Raj Prasad</p>
                <p className="text-center">Web Developer</p></div>
                <p className="mt-4 text-center"><Link href="https://www.linkedin.com/in/prem-raj-a802682a7/" className="border-[2px] border-[#312e2e6c] rounded-md  px-6 py-1">LinkedIn</Link></p>
                </li>
                <li className="mx-auto w-[60vw] md:w-[14.5vw] h-[40vh] bg-[#40c6f615] border">
                <img className="w-32 h-32 rounded-full object-cover object-center mx-auto mt-5" src="/basundhara_img.jpg" alt="img" />
                <div className="">
                <p className="text-center font-bold mt-4">Basundhara Singhdeo</p>
                <p className="text-center">Web Developer</p></div>
                <p className="mt-4 text-center"><Link href="https://www.linkedin.com/in/basundhara-singhdeo-b5a74925b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="border-[2px] border-[#312e2e6c] rounded-md  px-6 py-1">LinkedIn</Link></p>
                </li>
                <li className="mx-auto w-[60vw] md:w-[14.5vw] h-[40vh] bg-[#40c6f615] border">
                <img className="w-32 h-32 rounded-full object-cover object-center mx-auto mt-5" src="kaushiki.jpg" alt="" />
                <div className="">
                <p className="text-center font-bold mt-4">Kaushiki Bhattacharya</p>
                <p className="text-center">Web Developer</p></div>
                <p className="mt-4 text-center"><Link href="https://www.linkedin.com/in/kaushiki-bhattacharyya-63556524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="border-[2px] border-[#312e2e6c] rounded-md  px-6 py-1">LinkedIn</Link></p>
                </li>
                <li className="mx-auto w-[60vw] md:w-[14.5vw] h-[40vh] bg-[#40c6f615] border">
                <img className="w-32 h-32 rounded-full object-cover object-center mx-auto mt-5" src="swarnim.jpg" alt="" />
                <div className="">
                <p className="text-center font-bold mt-4">Swarnim Kumari</p>
                <p className="text-center">Web Developer</p></div>
                <p className="mt-4 text-center"><Link href="https://www.linkedin.com/in/swarnim-kumari-6098a6254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="border-[2px] border-[#312e2e6c] rounded-md  px-6 py-1">LinkedIn</Link></p>
                </li>
                <li className="mx-auto w-[60vw] md:w-[14.5vw] h-[40vh] bg-[#40c6f615] border">
                <img className="w-32 h-32 rounded-full object-cover object-center mx-auto mt-5" src="ayush.png" alt="" />
                <div className="">
                <p className="text-center font-bold mt-4">Ayush Raj</p>
                <p className="text-center">Web Developer</p></div>
                <p className="mt-4 text-center"><Link href="https://www.linkedin.com/in/ayush-raj-338407279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="border-[2px] border-[#312e2e6c] rounded-md  px-6 py-1">LinkedIn</Link></p>
                </li>
            </ul>
        </div>
    </div>
)
}

export default Members;