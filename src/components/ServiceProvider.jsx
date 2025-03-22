import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        category: "Cyber Security",
        title: "Ethical Hacking",
        description:
            "Identifying vulnerabilities through penetration testing, ethical hacking techniques, and security audits to strengthen system defenses against cyber threats.",
    },
    {
        id: "02",
        category: "Cyber Security",
        title: "Network Security",
        description:
            "Implementing firewalls, intrusion detection systems, and encryption methods to protect networks from unauthorized access and cyber attacks.",
    },
    {
        id: "03",
        category: "Cyber Security",
        title: "Cloud Security",
        description:
            "Securing cloud infrastructures by enforcing access controls, data encryption, and continuous monitoring to prevent data breaches and cyber threats.",
    },
    {
        id: "04",
        category: "Cyber Security",
        title: "Risk Assessment & Management",
        description:
            "Conducting risk assessments, analyzing potential security threats, and implementing mitigation strategies to protect sensitive data and digital assets.",
    },
    {
        id: "05",
        category: "Cyber Security",
        title: "Incident Response & Forensics",
        description:
            "Providing rapid incident response, forensic analysis, and cyber threat intelligence to detect, analyze, and mitigate security breaches effectively.",
    },
];

export default function ServicesProvider() {
    return (
        <div className="px-4 md:px-12 lg:px-24 py-8">
            <div className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                <h1>Cyber Security Services</h1>
            </div>

            <div className="text-center text-2xl md:text-4xl lg:text-5xl font-bold my-6 text-gray-800">
                <h1>
                    Protect Your Business with <br />
                    <span className="text-blue-500">Cyber Security</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="group flex flex-col md:flex-row items-start md:items-center border-t-2 border-black py-6 px-4 hover:border-blue-300 transition-all duration-300 bg-white rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-start md:items-center mb-4 md:mb-0">
                            <p className="text-gray-500 text-lg md:text-xl mr-4">{service.id}</p>
                            <div>
                                <p className="font-medium text-gray-600">{service.category}</p>
                                <h2 className="text-lg md:text-2xl font-bold group-hover:text-blue-600">
                                    {service.title}
                                </h2>
                            </div>
                        </div>
                        <div className="text-gray-600 text-sm md:text-base mt-2 md:mt-0 md:ml-6">
                            {service.description}
                        </div>
                        <button className="bg-blue-600 p-3 rounded-md ml-auto mt-4 md:mt-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L19.5 10.5M19.5 10.5L13.5 16.5M19.5 10.5H4.5"
                                />
                            </svg>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
