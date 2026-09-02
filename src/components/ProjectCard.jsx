import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork } from './icons'
import { useState } from 'react'

const STATIC_REPOS = ['Amazon_clone---Static_web', 'Nayephank-Foundation', 'FUTURE_FS_03']

export default function ProjectCard({ repo, darkMode }) {
  const [imgError, setImgError] = useState(false)
  const isStatic = STATIC_REPOS.includes(repo.name)
  const liveUrl = `https://Akshaysarange.github.io/${repo.name}`

  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: '#f7df1e',
      Python: '#3776ab',
      HTML: '#e34f26',
      CSS: '#1572b6',
      Java: '#ed8b00',
      TypeScript: '#3178c6',
      C: '#555555',
      'C++': '#f34b7d',
    }
    return colors[lang] || '#8b8cf7'
  }

  return (
    <motion.div
      className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col min-h-[320px] ${
        darkMode
          ? 'bg-white/5 border-white/10 hover:border-[#6c63ff]/50 hover:bg-white/8'
          : 'bg-white border-gray-200 hover:border-[#6c63ff]/50 shadow-sm hover:shadow-md'
      }`}
      whileHover={{ y: -5 }}
    >
      {!imgError && (
        <div className="mb-4 rounded-xl overflow-hidden h-36 bg-black/20">
          <img
            src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
            alt={repo.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            onError={() => setImgError(true)}
          />
        </div>
      )}

      <h3 className="text-lg font-bold mb-2 group-hover:text-[#6c63ff] transition-colors">
        {repo.name}
      </h3>

      <p className={`text-sm mb-4 line-clamp-2 flex-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {repo.description || 'No description provided'}
      </p>

      <div className="flex items-center gap-4 mb-4 text-xs">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={12} /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={12} /> {repo.forks_count}
        </span>
      </div>

      <div className="flex gap-2">
        <motion.a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium transition-colors ${
            darkMode
              ? 'bg-white/10 hover:bg-[#6c63ff]/20 text-white'
              : 'bg-gray-100 hover:bg-[#6c63ff]/10 text-gray-700'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Github size={14} /> View Code
        </motion.a>

        {isStatic && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium bg-[#6c63ff] hover:bg-[#5a52d5] text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={14} /> Live
          </motion.a>
        )}
      </div>

      {!isStatic && (
        <p className={`mt-3 text-[11px] text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Live preview aana baaki (Netlify link)
        </p>
      )}
    </motion.div>
  )
}
