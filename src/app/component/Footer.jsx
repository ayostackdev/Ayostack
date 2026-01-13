"use client";
import { FaFacebookF, FaInstagram,FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6"; // New X (Twitter) logo

export default function Footer() {
  return (
    <>
     <footer className="bg-[#17223a] text-blue-200 text-center py-8 px-4">
  <h1 className="text-xl" >Follow Me</h1>
  <div className="max-w-[600px] mx-auto">


    <div className="mt-10 flex justify-center gap-5 text-2xl">
      <a href="https://x.com/ayle_2
" className="cursor-pointer transition-transform duration-300 text-blue-200 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">    <FaXTwitter/>  </a>
    <a href="https://github.com/Ayostack-web
" className="cursor-pointer transition-transform duration-300 text-blue-200 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">    <FaGithub/>  </a>
      <a href="https://www.facebook.com/profile.php?id=100006560209278 " className="cursor-pointer transition-transform duration-300 text-blue-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">     <FaFacebookF />  </a>
      <a href="https://www.instagram.com/ayokunle_shittu/" className="cursor-pointer transition-transform duration-300 text-blue-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">         <FaInstagram /></a>
         <a href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="cursor-pointer transition-transform duration-300 text-blue-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">        <SiLinkedin />  </a>
    </div>



    <p className="mt-4 text-sm text-blue-200">
      © 2026 AYOSTACK. All rights reserved.
    </p>

  </div>
</footer>
    </>
  );
}





