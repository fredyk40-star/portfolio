import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  // REPLACE THIS WITH YOUR REAL PROJECTS
  const projects = [
    {
      id: 1,
  title: 'Best Brain Quiz System',
  description: 'A secure, role-based academic assessment platform engineered with PHP and MySQL. Features include a custom "Browser Lockdown" anti-cheat system, automated grading algorithms with custom scales, bulk CSV grade management, and dynamic generation of PDF Terminal Reports.',
  tags: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'Security Architecture', 'CSS3'],
  image: '/images/projects/quiz-platform.jpg',
  github: 'https://github.com/fredyk40-star/best-brain-quiz-system',
  live: '',
  category: 'full-stack'
},
    // Add more projects here...
  ]

  const categories = ['all', 'frontend', 'full-stack', 'mobile']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here is some of my recent work. Each project represents 
            a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${filter === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}