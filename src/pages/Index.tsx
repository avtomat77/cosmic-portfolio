import { motion } from 'framer-motion';
import MeteorShower from '../components/MeteorShower';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import TypedText from '../components/TypedText';
import WolfLogo from '../components/WolfLogo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const skills = [
    {
      title: 'Laravel',
      level: 90,
      description: 'Expert in Laravel framework with extensive experience in building scalable applications',
      icon: '/icons/laravel.svg'
    },
    {
      title: 'CI/CD Pipeline',
      level: 85,
      description: 'Proficient in setting up and maintaining CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions',
      icon: '/icons/cicd.svg'
    },
    {
      title: 'DevOps',
      level: 80,
      description: 'Experienced in Docker, Kubernetes, and cloud platforms (AWS, GCP)',
      icon: '/icons/devops.svg'
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
    {
      title: 'Cloud Infrastructure Management',
      description: 'Automated cloud infrastructure management system',
      technologies: ['Terraform', 'AWS', 'Python', 'Ansible'],
      imageUrl: '/placeholder.svg',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Monitoring Dashboard',
      description: 'Real-time monitoring dashboard for microservices',
      technologies: ['Grafana', 'Prometheus', 'ELK Stack', 'Node.js'],
      imageUrl: '/placeholder.svg',
      githubUrl: 'https://github.com',
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <MeteorShower />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center relative z-10"
      >
        <WolfLogo />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium mb-4 text-blue-400"
        >
          Hello, I'm Avtomat
        </motion.h2>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <TypedText 
            strings={['Backend Engineer', 'DevOps Engineer', 'System Architect']} 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          />
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-400 mb-8 animate-pulse"
        >
          Specializing in Laravel, CI/CD, and DevOps
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={scrollToProjects}
            className="group bg-blue-500 hover:bg-blue-600 transition-all duration-300"
          >
            View My Projects
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
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
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="overflow-x-auto pb-8">
            <div className="flex space-x-6 min-w-max px-4">
              {projects.map((project) => (
                <div key={project.title} className="w-[400px]">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
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

      <Footer />
    </div>
  );
};

export default Index;
