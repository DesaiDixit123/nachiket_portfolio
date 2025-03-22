import { NavLink } from "react-router-dom";
import logo from "../assets/Nachiket_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <>

            <div className="bg-white shadow-[0px_0px_20px_2px_#718096] py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Personal Information */}
                        <div>
                            <img src={logo} alt="" className="w-[300px]" />

                            <p className="pt-[40px] text-[20px]">Location: Nadiad , Gujarat</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li><a href="/about" className="hover:text-blue-400">About Me</a></li>
                                {/* <li><a href="/projects" className="hover:text-blue-400">Projects</a></li> */}
                                <li><a href="/nachiket_resume..pdf" target="_blank"
                            rel="noopener noreferrer" className="hover:text-blue-400">Resume</a></li>
                                <li><a href="/skills" className="hover:text-blue-400">Skills</a></li>
                                <li><a href="/contact" className="hover:text-blue-400">Contact Me</a></li>
                                <li><a href="story" className="hover:text-blue-400">Story</a></li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-3">
                            <a href="https://www.linkedin.com/in/nachiket-shah-b28b66350"    target="_blank"
              rel="noopener noreferrer">
                                    <div className="group w-[150px] h-[45px] flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#2A3386] to-[#00659A] hover:shadow-[0px_0px_10px_2px_#718096]     text-white relative overflow-hidden">
                                        <span className="pr-[5px] text-[20px]"><FaLinkedin /></span>
                                        <button className="font-semibold text-[18px] z-10">
                                            Linked-In
                                        </button>

                                    </div>
                                </a>
                        
                            </div>
                        </div>
                    </div>
                    {/* Copyright and Legal Info */}
                    <div className="mt-10 text-center text-sm text-black">
                        <p>© 2025 Nachiket Shah. All Rights Reserved.</p>
                    
                    </div>
                </div>
            </div>

        </>
    )
}