import { motion } from 'framer-motion'
import { useInView } from './useInView'
import {
  Code2, Database, Globe, Terminal, Smartphone, Server,
  GitBranch, Palette
} from './icons'

const skills = [
  { name: 'JavaScript', icon: Code2, color: '#f7df1e' },
  { name: 'Python', icon: Terminal, color: '#3776ab' },
  { name: 'React', icon: Globe, color: '#61dafb' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'HTML/CSS', icon: Palette, color: '#e34f26' },
  { name: 'SQL', icon: Database, color: '#4479a1' },
  { name: 'Git', icon: GitBranch, color: '#f05032' },
  { name: 'Java', icon: Smartphone, color: '#ed8b00' },
]

export default function Skills({ darkMode }) {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="scroll-mt-24 py-44 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-16 mb-4">
          My <span className="text-[#6c63ff]">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-2xl border text-center cursor-default transition-colors ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:border-[#6c63ff]/50'
                  : 'bg-white border-gray-200 hover:border-[#6c63ff]/50 shadow-sm'
              }`}
            >
              <skill.icon size={36} style={{ color: skill.color }} className="mx-auto mb-3" />
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
