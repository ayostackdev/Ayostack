// app/components/Projects.jsx
"use client"
import { motion } from "framer-motion"; // 1. IMPORT motion

export default function Projects() {
  const projects = [
    {
      title: "🌐 Portfolio Website",
      description:
        "A responsive, personal portfolio to showcase skills, projects, and contact info — built with clean design and smooth interactions.",
      link: "https://omogbolahan-shittu.vercel.app/",
    },
    {
      title: "🍕 Pizza Ordering Website",
      description:
        "A sleek, responsive pizza ordering platform with interactive UI, real-time selections, and a tasty user experience.",
      link: "https://pizza-heaven-pink.vercel.app/",
    },
    {
      title: "⛪Fellowship Website",
      description:
        "A responsive website for my campus fellowship to share events, announcements, and connect members.",
      link: "https://cssf-funaab.vercel.app/",
    },
  ];

  // 2. DEFINE the animation properties
  const cardVariants = {
    // Initial state (hidden) - starting position from below and transparent
    hidden: { opacity: 0, y: 50 },
    // Animated state (visible) - moving to its final position
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        // Stagger the animation based on the index (i)
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="projects" className="floating-card section tilt-card section">
      <h1 className="text-3xl font-bold my-6 text-center text-blue-200">
        Featured Projects
      </h1>
      <br />
      <div className="projects hero-text">
        {projects.map((project, index) => (
          // 3. USE motion.div and animation props
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Animate once and when 30% of the element is visible
            variants={cardVariants}
            custom={index} // Pass the index as a custom prop for the stagger effect
            className="project" // Keep the original class for styling
          >
            <p className="font-extrabold">{project.title}</p>
            <p>{project.description}</p>
            <br />
            <a
              href={project.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}