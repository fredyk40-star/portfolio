import { motion } from 'framer-motion'

export default function SkillBar({ skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </div>
  )
}