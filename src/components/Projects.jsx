import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import ProjectCard from './ProjectCard'
import { FolderOpen } from './icons'

export default function Projects({ darkMode }) {
  const [ref, inView] = useInView(0.05)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/Akshaysarange/repos?sort=updated&per_page=20')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork))
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="scroll-mt-24 py-28 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4">
          My <span className="text-[#6c63ff]">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] mx-auto mb-4 rounded-full" />
        <p className={`text-center mb-12 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Fetched live from GitHub
        </p>

        {loading ? (
          <div className="flex justify-center">
            <motion.div
              className="w-10 h-10 border-4 border-[#6c63ff] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-12">
            <FolderOpen size={48} className="mx-auto mb-4 text-[#6c63ff]" />
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>No projects found.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ProjectCard repo={repo} darkMode={darkMode} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
