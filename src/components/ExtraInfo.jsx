import { useState } from "react";
import personal_info from "../assets/personal-infothumb.png";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function ExtraInfo() {
    // State to track the active section
    const [activeSection, setActiveSection] = useState("about");

    const sectionContent = {
        about: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>About Me</h1>
                </div>
                <div className="text-[20px] pt-[15px]">
                    <p>I am Nachiket Shah, a passionate Cyber Security expert with over 2+ year of experience. I specialize in securing applications and systems by implementing best security practices and conducting vulnerability assessments.</p>
                </div>
                {/* Add About specific details */}
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
                    {/* Email */}
                    <div className="group bg-white w-full h-[120px] flex flex-col justify-center px-6 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">Email</h3>
                        <NavLink>
                            <p className="pt-2 text-black group-hover:text-white transition-all duration-300 break-words">nachiketshah809@gmail.com</p>
                        </NavLink>
                    </div>
        
                    {/* Phone */}
                    <div className="group bg-white w-full h-[120px] flex flex-col justify-center px-6 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">Phone</h3>
                        <NavLink>
                            <p className="pt-2 text-black group-hover:text-white transition-all duration-300">+91 8401792503</p>
                        </NavLink>
                    </div>
        
                    {/* Address */}
                    <div className="group bg-white w-full h-[120px] flex flex-col justify-center px-6 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">Address</h3>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">Ahmedabad, Gujarat</p>
                    </div>
        
                    {/* Social Media */}
                    <div className="group bg-white w-full h-[120px] flex flex-col justify-center px-6 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Follow Me</h3>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/nachiket-shah-b28b66350" target="_blank" rel="noopener noreferrer" className="text-[#2A3386] text-2xl group-hover:text-white">
                                <FaLinkedin />
                            </a>
                          
                        </div>
                    </div>
                </div>
            </>
        ),
        
        experience: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>Experience</h1>
                </div>   
                <div className="text-[20px] pt-[15px]">
                    <p> 2 YEARS EXPERINCE OF CYBER SECURITY FACULTY & L1 HARDWARE ENGINEER
                    </p>
                </div>
                {/* Add Experience specific details */}
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-5 px-4">
    {/* HNB Computer Education (Full-time, April 2023 - April 2025) */}
    <div className="group bg-white w-full h-auto flex flex-col justify-center px-6 py-4 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
            H&B Computer Education (Full-time, April 2023 - April 2025)
        </h3>
        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
       
        </p>
    </div>
</div>

            </>
        ),
        
        education: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>Education</h1>
                </div>
                <div className="text-[20px] pt-[15px]">
                    <p>Here's a brief overview of my education background:</p>
                </div>
        
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
                    {/* 10th Education */}
                    <div className="group bg-white w-full h-auto flex flex-col justify-center px-6 py-4 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
                            S.S.C <br /> Gujarat Secondary and Higher Secondary Education Board
                        </h3>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            School: New English School Nadiad
                        </p>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            Year: 2018
                        </p>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            Percentage: 53%
                        </p>
                    </div>
        
                    {/* Diploma Education */}
                    <div className="group bg-white w-full h-auto flex flex-col justify-center px-6 py-4 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
                            Diploma in Computer Engineering <br /> Gujarat Technological University (GTU)
                        </h3>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            College: D.A Diploma Engineering & Technology
                        </p>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            Year: 2023
                        </p>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            CGPA: 8.11
                        </p>
                    </div>
        
                    {/* B.E Education */}
                    <div className="group bg-white w-full h-auto flex flex-col justify-center px-6 py-4 rounded-lg border-2 border-transparent hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] p-1 transition-all duration-300 hover:shadow-lg">
                        <h3 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
                            B.E Computer Engineering <br /> Monark University
                        </h3>
                        <p className="pt-2 text-black group-hover:text-white transition-all duration-300">
                            Year: Pursuing
                        </p>
                    </div>
                </div>
            </>
        ),
        
        skills: (
            <>
                <div className="text-[40px] font-bold">
                    <h1>Skills</h1>
                </div>
                <div className="text-base md:text-lg lg:text-xl pt-4 md:pt-6 px-4 md:px-8">
                    {/* First Point */}
                    <p className="flex items-start gap-4 mb-4">
                        <FaArrowRight className="text-blue-900 text-2xl md:text-3xl" />
                        <span>
                            I have developed strong expertise in <strong>Cyber Security</strong>, specializing in <strong>Network Security</strong>, <strong>Ethical Hacking</strong>, and <strong>Penetration Testing</strong>. I am proficient in identifying vulnerabilities, securing web applications, and implementing security best practices.
                        </span>
                    </p>
        
                    {/* Second Point */}
                    <p className="flex items-start gap-4 mb-4">
                        <FaArrowRight className="text-blue-900 text-2xl md:text-3xl" />
                        <span>
                            My skills include working with <strong>Firewalls</strong>, <strong>Intrusion Detection Systems (IDS)</strong>, and <strong>SIEM (Security Information and Event Management)</strong>. I have experience in conducting <strong>Vulnerability Assessments</strong> and <strong>Penetration Testing</strong> to strengthen security measures.
                        </span>
                    </p>
        
                  
                </div>
            </>
        ),
        

    };

    return (
        <>
            <div className="h-full py-[50px] bg-gray-200">

                <div className="flex justify-center py-[30px] gap-[40px] flex-wrap">
                    {['about', 'experience', 'education', 'skills'].map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`w-[180px] text-[20px] font-semibold rounded-[14px] h-[50px] flex justify-center items-center transition-all duration-300 ${activeSection === section
                                ? "bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white"
                                : "bg-[#F7F7F7] text-black hover:bg-gradient-to-r hover:from-[#2A3386] hover:to-[#00659A] hover:text-white"
                                }`}
                        >
                            {section.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 px-[20px] sm:px-[40px] md:px-[80px] py-[50px]">
                    <div className="mb-6 md:mb-0">
                        <img src={personal_info} alt="Personal Info" className="pr-8" />
                    </div>

                    <div className="pt-[20px]">
                        {sectionContent[activeSection]}
                        <div className="py-[40px] grid grid-cols-2 gap-5">
                            {/* Follow Me Section */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
