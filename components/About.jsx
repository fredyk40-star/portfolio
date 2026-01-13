import { motion } from 'framer-motion'
import SkillBar from './SkillBar'

export default function About() {
  const skills = [
    { name: 'JavaScript', level: 80, color: '#f7df1e' },
    { name: 'React', level: 50, color: '#61dafb' },
    { name: 'Node.js', level: 50, color: '#339933' },
    { name: 'TypeScript', level: 30, color: '#3178c6' },
    { name: 'Next.js', level: 55, color: '#000000' },
    { name: 'Tailwind CSS', level: 50, color: '#06b6d4' },
    { name: 'MySQL', level: 50, color: '#430fbbff' },
  ]

  const tools = [
    'Git & GitHub', 'VS Code',  'Postman', 'MongoDB', 'Firebase',
    'Docker', 'ESLint', 'Prettier',
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I'm a passionate web developer currently
                building digital products. My journey started with simple HTML/CSS websites and currently
               evolving into full-stack development using the MERN stack.
              </p>
              <p>
                I specialize in creating responsive, performant, and accessible web 
                applications. I believe in writing clean, maintainable code and always 
                staying updated with industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                blog posts.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: '3 and Incoming', label: 'Projects Completed' },
                { number: 'Currently', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Learning Mindset' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-6 mb-8">
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>

            {/* Tools & Technologies */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}