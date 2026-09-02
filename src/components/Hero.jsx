import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram } from './icons'

const roles = ['Developer', 'Designer', 'Problem Solver', 'Tech Enthusiast']

export default function Hero({ darkMode }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1)
          )
        },
        isDeleting ? 50 : 100
      )
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center relative overflow-hidden px-6 sm:px-10 lg:px-16 pt-24 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6c63ff]/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, Math.random() * -300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-sm sm:text-base tracking-[0.3em] uppercase mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          Welcome to my world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-[#6c63ff] via-[#00d4ff] to-[#6c63ff] bg-clip-text text-transparent">
            AKSHAY SARANGE
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-10 mb-6"
        >
          <span className={`text-lg sm:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a{' '}
            <span className="text-[#00d4ff] font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          Computer Science student who likes building things, experimenting with code, and learning along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://github.com/Akshaysarange"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/akshay-sarange-790b7a374"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/akshay_sarange04"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram size={22} />
          </motion.a>
        </motion.div>

        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 text-[#6c63ff] text-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll Down <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  )
}
