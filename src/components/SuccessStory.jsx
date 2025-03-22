import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import cyberSecurityJourney from "../assets/CyberSecurirty2.jpg";
import certificationImage from "../assets/CyberSecurity.jpeg";

export default function SuccessStory() {
  return (
    <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] min-h-screen py-10 px-5 flex items-center justify-center">
      <motion.div
        className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
            🔐 My Cyber Security Journey
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Starting My Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                In <span className="font-semibold text-blue-500">April 2023</span>, I embarked on my Cyber Security career at <span className="font-semibold">Cybernet IT Solution</span>. I started by learning the fundamentals of network security, penetration testing, and ethical hacking. Initially, understanding advanced security concepts and real-world vulnerabilities was a challenge, but consistent practice and hands-on experience helped me grow.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Advancing My Skills
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Over time, I gained expertise in security auditing, vulnerability assessment, and cloud security. I obtained multiple industry-recognized certifications, including <span className="font-semibold text-blue-500">A+, N+, CCNA, MCSA, AWS, and CEH</span>. These certifications strengthened my knowledge in ethical hacking, network defense, and cloud security.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Real-World Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                At <span className="font-semibold">Cybernet IT Solution</span>, I worked on multiple real-world projects involving security assessments, penetration testing, and threat analysis. This hands-on experience deepened my understanding of cyber threats and security best practices.
              </p>
            </div>

            {/* Right Side - Images */}
            <div className="lg:w-1/2 space-y-4">
              <img
                src={cyberSecurityJourney}
                alt="Cyber Security Journey"
                className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-md"
              />
              <img
                src={certificationImage}
                alt="Certifications"
                className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
              📅 Cyber Security Timeline
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> April 2023 - Started Cyber Security career at Cybernet IT Solution.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> September 2023 - Learned penetration testing and vulnerability assessment.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> March 2024 - Earned A+, N+, and CCNA certifications.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> August 2024 - Achieved AWS and MCSA certifications.
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="mr-2 text-blue-500" /> April 2025 - Gained expertise in CEH and advanced security solutions.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
