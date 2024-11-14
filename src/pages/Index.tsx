import { motion } from 'framer-motion';
import MeteorShower from '../components/MeteorShower';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const skills = [
    {
      title: 'Laravel',
      level: 90,
      description: 'Expert in Laravel framework with extensive experience in building scalable applications',
    },
    {
      title: 'CI/CD Pipeline',
      level: 85,
      description: 'Proficient in setting up and maintaining CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions',
    },
    {
      title: 'DevOps',
      level: 80,
      description: 'Experienced in Docker, Kubernetes, and cloud platforms (AWS, GCP)',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce platform built with Laravel and Vue.js',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      imageUrl: '/placeholder.svg',
      githubUrl: 'https://github.com',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Automated deployment pipeline for microservices architecture',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
      imageUrl: '/placeholder.svg',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MeteorShower />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Backend Engineer
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Specializing in Laravel, CI/CD, and DevOps
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-lg"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Index;