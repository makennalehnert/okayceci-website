import { motion } from "framer-motion"


export default function Hero() {
  return (
    <section id="home" className="h-screen bg-pink-500 flex flex-col items-center justify-center text-white scroll-mt-10">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SingerName
      </motion.h1>
      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        New album out now!
      </motion.p>
      <motion.button
        className="bg-white text-green-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100"
        whileHover={{ scale: 1.05 }}
      >
        Listen Now
      </motion.button>
    </section>
  )
}