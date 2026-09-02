import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Heart } from './icons'

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-20 px-6 sm:px-10 lg:px-16 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            AS.
          </motion.a>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/Akshaysarange' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/akshay-sarange-790b7a374' },
              { icon: Instagram, href: 'https://www.instagram.com/akshay_sarange04' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className={`text-xs flex items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with <Heart size={12} className="text-red-500" /> by Akshay Sarange &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
