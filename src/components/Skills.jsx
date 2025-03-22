import { motion } from "framer-motion";

export default function Skills() {
    return (
        <>
            <div className="flex justify-center text-[30px] py-[20px] font-bold google-font">
                <h1>Cyber Security Skills</h1>
            </div>

            <motion.div 
                className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {skillData.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="w-full border-2 border-black relative overflow-hidden shadow-lg shadow-gray-500 rounded-2xl"
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-center font-semibold text-[22px] border-b-2 border-black bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white rounded-t-2xl py-3">
                            {skill.title}
                        </h3>
                        <motion.div 
                            className="grid grid-cols-3 gap-4 p-6"
                            animate={{ x: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            {skill.icons.map((icon, idx) => (
                                <img key={idx} src={icon.src} alt={icon.alt} className="w-12 h-12 mx-auto" />
                            ))}
                        </motion.div>
                        <div className="px-6 pb-6">
                            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
                                {skill.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

const skillData = [
    {
        title: "Networking & Security Fundamentals",
        icons: [
            { src: "https://i0.wp.com/london-post.co.uk/wp-content/uploads/2019/09/IT-Jobs-Network-Security-Engineer.png?fit=1410%2C831&ssl=1" },
            { src: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=" },
            { src: "https://www.shutterstock.com/image-photo/advanced-communication-global-internet-network-600nw-1922521118.jpg", alt: "CCNA" },
        ],
        details: ["A+ Certification", "N+ (Network+) Certification", "CCNA (Cisco Certified Network Associate)"]
    },
    {
        title: "System Administration",
        icons: [
            { src: "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg", alt: "MCSA" },
            { src: "https://maker.pro/storage/uqdJvcr/uqdJvcrqn8mV4rZQopsdUcD87tGKoNZinxmb8lKb.jpeg", alt: "Linux" }
        ],
        details: ["MCSA (Microsoft Certified Solutions Associate)", "Windows & Linux Administration"]
    },
    {
        title: "Cloud Security & Ethical Hacking",
        icons: [
            { src: "https://i.ytimg.com/vi/T4svAhNLNfc/maxresdefault.jpg", alt: "AWS" },
            { src: "https://5.imimg.com/data5/SELLER/Default/2021/3/HI/IW/OA/55284628/cyber-security-and-ethical-hacking-training-500x500-500x500.jpg", alt: "CEH" }
        ],
        details: ["AWS (Amazon Web Services)", "CEH (Certified Ethical Hacker)", "Cloud Security & Penetration Testing"]
    }
];
