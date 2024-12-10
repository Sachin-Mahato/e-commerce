"use client";
import FooterLogo from "./FooterLogo";
import Services from "./Service";
import SocialMedia from "./SocialMedia";
import Assistance from "./Assistance";

function Footer() {
  return (
    <footer className="bg-[#181313] ml-0 mr-0 pb-12">
      <div className="flex flex-col md:flex-row justify-center items-center md:grid md:grid-cols-3 md:mx-40  ">
        <FooterLogo />
        <Services />
        <Assistance />
      </div>
      <SocialMedia />
    </footer>
  );
}

export default Footer;
