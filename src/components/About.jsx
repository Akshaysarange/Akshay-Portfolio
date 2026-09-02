import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function About({ darkMode }) {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="about" className="scroll-mt-24 py-28 px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4">
          About <span className="text-[#6c63ff]">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#6c63ff] to-[#00d4ff] flex items-center justify-center text-5xl font-bold mb-6">
                AS
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Akshay Sarange</h3>
              <p className="text-[#6c63ff] text-center text-sm mb-4">Computer Science Student</p>
              <p className={`text-sm leading-relaxed text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Passionate about technology and its ability to solve real-world problems. Always eager to learn new things and take on challenging projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">A bit about me</h3>
            <p className={`leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              I'm a Computer Science student who enjoys the process of turning ideas into functional software. 
              From debugging late at night to finally seeing code run perfectly — every project teaches me something new.
            </p>
            <p className={`leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Currently exploring web development, open source, and looking for opportunities to grow as a developer.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Akshay Sarange' },
                { label: 'From', value: 'India' },
                { label: 'Study', value: 'Computer Science' },
                { label: 'Focus', value: 'Web Development' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
