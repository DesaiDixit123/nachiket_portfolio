import { motion } from "framer-motion";
import profileImage from "../assets/nachiket.jpg";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-[#2A3386] to-[#00659A] min-h-screen flex items-center justify-center p-4 sm:p-8">
      <motion.div
        className="max-w-6xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Profile Image */}
        <div className="md:w-1/3 w-full h-64 md:h-auto p-4 flex items-center justify-center">
  <img
    src={profileImage}
    alt="Dixit Desai"
    className="object-cover w-full h-full rounded-lg"
  />
</div>


        {/* Right Side - About Content */}
        <div className="md:w-2/3 w-full p-6 sm:p-8">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
    Hello, I'm <span className="text-blue-500">Nachiket Shah</span> 👋
  </h2>
  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
    A passionate <span className="font-semibold text-blue-500">Cyber Security Expert</span> with expertise in securing digital assets and networks. I specialize in identifying vulnerabilities, implementing security measures, and ensuring data protection.
    <br />
    Additionally, I have experience working with cloud security and penetration testing to strengthen enterprise security.
  </p>

  <div className="mt-6">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
      🔐 Cyber Security Skills & Certifications
    </h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-600 dark:text-gray-300 text-sm">
      <li>A+ Certification</li>
      <li>N+ Certification</li>
      <li>CCNA (Cisco Certified Network Associate)</li>
      <li>MCSA (Microsoft Certified Solutions Associate)</li>
      <li>CEH (Certified Ethical Hacker)</li>
      <li>AWS Security</li>
      <li>Cyber Security Expert</li>
    </ul>
  </div>

  <div className="mt-6">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
      🌍 My Vision
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
      I aim to create a safer digital world by preventing cyber threats and securing sensitive data. My focus is on ethical hacking, network security, and cloud security solutions to protect organizations from cyber-attacks.
    </p>
  </div>


</div>

      </motion.div>
    </div>
  );
}
