import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#E8E8EA]">

        <div className="container mx-auto px-8 ">
            <div >
                <div className="md:flex md:gap-5 md:mb-[25px] pt-16">
                    <div className="hidden md:block">
                        <div className="mb-6 ">
                            <h3 className="font-semibold text-lg text-[#181A2A] mb-3">About</h3>
                            <p className="font-normal text-base text-[#696A75] max-w-[280px] md:max-w-[320px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                            </p>
                        </div>
                        <div className="font-normal text-base text-[#3B3C4A]">
                            <div>Email : info@jstemplate.net</div>
                            <div>Phone : 880 123 456 789</div>
                        </div>
                    </div>
                    <div className="text-center mb-[30px] lg:w-[521px] md:w-[250px]">
                        <ul className="text-[#3B3C4A] font-normal text-base">
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex justify-center gap-[27px] mb-[30px]">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div className=" py-5 md:flex md:justify-between md:items-center md:border-t-[1px]">
                    <div className="flex justify-center">
                        <img src="/Footer-Logo.png" alt="" />
                        <div>
                        <p className="font-normal text-xl">
                            Meta <span className="font-extrabold text-xl">Blog</span>
                        </p>
                        <p className="font-normal text-base text-[#3B3C4A]">
                            © All Rights Reserved.
                        </p>
                        </div>
                    </div>
                    <div className="hidden md:block ">
                        <ul className="flex gap-4 font-normal text-base text-[#3B3C4A]">
                            <li className="border-r-[1px] pr-4">Terms of Use</li>
                            <li className="border-r-[1px] pr-4">Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};