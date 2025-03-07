import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Instagram, Mail, FileText, ExternalLink } from 'lucide-react';

function App() {
  const skills = [
    { name: 'ReactJs', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'NodeJs', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Django', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
    { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    // { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
    { name: 'C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    // { name: 'NextJs', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Express', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'SQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
    // { name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
    // { name: 'RESTful API', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/RESTful_logo.svg' },
    // { name: 'OpenAI', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/OpenAI_Logo.svg' },
    { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' }
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'React JS Based Text Engine',
      image: 'https://drive.google.com/file/d/1RrkI-2MiO2JM9zHpt23dfSgJ4FnuhCzZ/view?usp=drivesdk',
      repo: 'https://github.com/info-nikhil/Text-Engine',
      live: 'https://text-engine-ashy.vercel.app/'
    },
    {
      title: 'Project 2',
      description: 'Railway Announcement System',
      image: 'https://drive.google.com/file/d/1o_Nxwl8OSOVhKMLLqE9Sdk1u2L4PCXdS/view?usp=drivesdk',
      repo: 'https://github.com/info-nikhil/Railway-Announcement-Translator',
      live: 'https://project2.com'
    },
    {
      title: 'Project 3',
      description: 'Expense Tracker Website',
      image: 'https://drive.google.com/uc?export=view&id=16CPc-3HZt2UHXS_L-hjZzrSHEXpCF6J0',
      repo: 'https://github.com/info-nikhil/NodeJs-Money-Expense-Calculator',
      live: 'https://project3.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(30,30,30,0.9)]">
      {/* Navbar */}
      <nav className="fixed w-full bg-[rgba(20,20,20,0.8)] backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-white"
            >
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <h1 className="text-5xl font-bold text-white mb-4">
                Hi, I'm <span className="text-blue-400">Nikhil Kumar</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Full Stack Developer | AI Enthusiast | Problem Solver
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:info.nikhil001@gmail.com"
                  className="glossy-btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
                >
                  <Mail className="mr-2" /> Hire Me
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1bVJakrB_JZiVT7UAj88_voAfaTADbPRb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glossy-btn bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg flex items-center"
                >
                  <FileText className="mr-2" /> Resume
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2 mt-8 md:mt-0 relative"
            >
              <div className="block">
                <img
                  src='https://drive.google.com/file/d/1K5HuKhOMEJsYB2ALd8Fs_YOpOQ2x0cG7/view?usp=drivesdk'
                  alt="Profile"
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300">
            <ul className="list-disc pl-5 space-y-4">
              <li>My name is Nikhil Kumar and i hail from Patna, Bihar.</li>
              <li>Currently i am pursuing a professional B.Tech in Computer Science and Engineering at Chandigarh Engineering College, Landran.</li>
              <li>I am Passionate about developing innovative software solutions and exploring emerging technologies.</li>
              <li>I am an active participant in tech communities and coding competitions.</li>
              <li>Committed to continuous learning and professional growth in the field of technology.</li>
              <li>Enthusiastic about collaborative projects and open-source contributions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[rgba(20,20,20,0.8)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative ambient-card bg-[rgba(40,40,40,0.9)] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white"
                    >
                      <Github className="mr-1" /> Repository
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-200"
                    >
                      <ExternalLink className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                className="relative ambient-card bg-[rgba(40,40,40,0.9)] p-4 rounded-lg shadow-md text-center"
              >
                <div className="mb-2">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-gray-300 font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-[rgba(20,20,20,0.8)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Matriculation */}
            <div className="relative flex flex-col items-center mx-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">Matriculation</h3>
                <p className="text-gray-300">2018 - 2019</p>
              </div>
            </div>
            <div className="w-1/4 h-1 bg-gray-600"></div>
            {/* Intermediate */}
            <div className="relative flex flex-col items-center mx-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                I
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">Intermediate Science (PCM)</h3>
                <p className="text-gray-300">2019 - 2021</p>
              </div>
            </div>
            <div className="w-1/4 h-1 bg-gray-600"></div>
            {/* Graduation */}
            <div className="relative flex flex-col items-center mx-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                G
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">Graduation B.Tech CSE</h3>
                <p className="text-gray-300">2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer id="contact" className="bg-[rgba(10,10,10,0.9)] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/info-nikhil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/info-nikhil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/info_nikhil001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com/i_prince___saurya_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-8 text-gray-400">
              © {new Date().getFullYear()} Nikhil. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <style>{`
        .glossy-btn {
          background: linear-gradient(45deg, #1e90ff, #00bfff);
          box-shadow: 0 4px 15px rgba(30,144,255,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .glossy-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(30,144,255,0.5);
        }
        @keyframes ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        .ambient-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          background: radial-gradient(circle, rgba(30,144,255,0.2), transparent);
          animation: cardGlow 3s infinite;
          z-index: -1;
        }
        @keyframes cardGlow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

export default App;