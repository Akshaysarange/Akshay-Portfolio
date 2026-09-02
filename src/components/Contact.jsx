import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Mail, Send } from './icons'

export default function Contact({ darkMode }) {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="contact" className="scroll-mt-24 py-28 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4">
          Get In <span className="text-[#6c63ff]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] mx-auto mb-12 rounded-full" />

        <div className={`p-8 sm:p-12 rounded-2xl border text-center ${
          darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#6c63ff]/20 flex items-center justify-center">
            <Mail size={28} className="text-[#6c63ff]" />
          </div>

          <h3 className="text-xl font-bold mb-3">Let's Work Together</h3>
          <p className={`text-sm mb-8 max-w-md mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:akshaysarange8@gmail.com"
              className="flex items-center gap-2 px-8 py-3 bg-[#6c63ff] hover:bg-[#5a52d5] text-white rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} /> Send Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/akshay-sarange-790b7a374"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-colors ${
                darkMode
                  ? 'bg-white/10 hover:bg-white/20'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
