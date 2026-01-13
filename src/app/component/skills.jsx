/*   
"use client";
import { 
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiGit, SiGithub, SiPostgresql, SiDocker, SiVercel, SiRedis, 
  SiFastapi,
  SiRabbitmq,
  SiPrisma,
  SiNestjs
} from "react-icons/si";
import { 
  FaNodeJs, FaBolt, FaBroadcastTower, FaDatabase, FaCubes, FaNetworkWired 
} from "react-icons/fa";

export default function Skills() {
  const categories = {
    Frontend: [
      { name: "HTML5", icon: <SiHtml5 className="w-6 h-6" color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 className="w-6 h-6" color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" color="#3178C6" /> },
      { name: "React.js", icon: <SiReact className="w-6 h-6" color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" color="#38BDF8" /> },
      { name: "shadcn/ui", icon: <FaCubes className="w-6 h-6" color="#A855F7" /> }, // 🎨 fallback
    ],
    Backend: [
      { name: "Python", icon: <SiPython className="w-6 h-6" color="#3776AB" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" color="#339933" /> },
      { name: "Express", icon: <FaBolt className="w-6 h-6" color="#FFFFFF" /> }, // fallback
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6" color="#3178c6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" color="#4169E1" /> },
      { name: "Nest.js", icon: <SiNestjs className="w-6 h-6" color="#D82C20" /> },
    ],
    "Realtime / Messaging": [
      { name: "Socket.io", icon: <FaBroadcastTower className="w-6 h-6" color="#DF0000" /> },
      { name: "WebSocket", icon: <FaNetworkWired className="w-6 h-6" color="#22C55E" /> }, // 🔗 fallback
      { name: "Redis Streams", icon: <SiRedis className="w-6 h-6" color="#D82C20" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-6 h-6" color="#F05032" /> },
    ],
    "Other Tools": [
      { name: "Git", icon: <SiGit className="w-6 h-6" color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Docker", icon: <SiDocker className="w-6 h-6" color="#2496ED" /> },
    ],
  };

  return (
    <section id="skills" className="py-12 px-6 bg-[#071026] dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-blue-100 text-center">🛠 Skills</h2>

      <div className="space-y-10">
        {Object.entries(categories).map(([category, skills], i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 text-blue-200 shadow-white bg-[#071026] 
                             dark:bg-gray-800 rounded-lg font-bold shadow-md transform transition 
                             duration-300 hover:-translate-y-1 hover:bg-gray-500 dark:hover:bg-gray-700"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

 */


"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiGit, SiGithub, SiPostgresql, SiDocker, SiVercel, SiRedis, 
  SiFastapi, SiRabbitmq, SiPrisma, SiNestjs, SiSupabase, SiGraphql 
} from "react-icons/si";
import { 
  FaNodeJs, FaBolt, FaBroadcastTower, FaDatabase, FaCubes, FaNetworkWired 
} from "react-icons/fa";

export default function Skills() {
  const categories = {
    Frontend: [
      { name: "HTML5", icon: <SiHtml5 className="w-6 h-6" color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 className="w-6 h-6" color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" color="#3178C6" /> },
      { name: "React.js", icon: <SiReact className="w-6 h-6" color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" color="#38BDF8" /> },
      { name: "shadcn/ui", icon: <FaCubes className="w-6 h-6" color="#A855F7" /> },
    ],
    Backend: [
      { name: "Python", icon: <SiPython className="w-6 h-6" color="#3776AB" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" color="#339933" /> },
      { name: "Nest.js", icon: <SiNestjs className="w-6 h-6" color="#D82C20" /> },
      { name: "Supabase", icon: <SiSupabase className="w-6 h-6" color="#3ECF8E" /> },
      { name: "GraphQL", icon: <SiGraphql className="w-6 h-6" color="#E10098" /> },
      { name: "REST API", icon: <FaBolt className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6" color="#3178c6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" color="#4169E1" /> },
    ],
    "Realtime / Messaging": [
      { name: "Socket.io", icon: <FaBroadcastTower className="w-6 h-6" color="#DF0000" /> },
      { name: "WebSocket", icon: <FaNetworkWired className="w-6 h-6" color="#22C55E" /> },
      { name: "Redis Streams", icon: <SiRedis className="w-6 h-6" color="#D82C20" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-6 h-6" color="#F05032" /> },
    ],
    "Other Tools": [
      { name: "Git", icon: <SiGit className="w-6 h-6" color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6" color="#FFFFFF" /> },
      { name: "Docker", icon: <SiDocker className="w-6 h-6" color="#2496ED" /> },
    ],
  };

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-12 px-6 bg-[#071026] dark:bg-gray-900">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-blue-100 text-center"
      >
        🛠 Skills
      </motion.h2>

      <div className="space-y-10">
        {Object.entries(categories).map(([category, skills], i) => (
          <div key={i}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-4 text-blue-200"
            >
              {category}
            </motion.h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-4 text-blue-200 shadow-white bg-[#071026] 
                             dark:bg-gray-800 rounded-lg font-bold shadow-md transform transition 
                             duration-300 hover:bg-gray-500 dark:hover:bg-gray-700"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}