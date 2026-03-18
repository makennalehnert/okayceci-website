import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Socials() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,  
      transition: {
        staggerChildren: 0.12,
        delayChildren: 1.2,
      },
    },
  };

  const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

  return (
    <motion.div
      className="flex gap-6 mt-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.a
        href="https://www.instagram.com/okayceciii/"
        target="_blank"
        variants={item}
        whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 20 },
         }}
        className="text-white text-2xl hover:text-pink-300"
      >
        <FaInstagram />
      </motion.a>

      <motion.a
        href="https://www.tiktok.com/@okayceci"
        target="_blank"
        variants={item}
        whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 20 },
         }}
        className="text-white text-2xl hover:text-pink-300"
      >
        <FaTiktok />
      </motion.a>

      <motion.a
        href="https://open.spotify.com/artist/1NCMfKfYXbyLqsChnYNd3P"
        target="_blank"
        variants={item}
        whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 20 },
         }}
        className="text-white text-2xl hover:text-pink-300"
      >
        <FaSpotify />
      </motion.a>

      <motion.a
        href="https://www.youtube.com/@okaycecii"
        target="_blank"
        variants={item}
        whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 20 },
         }}
        className="text-white text-2xl hover:text-pink-300"
      >
        <FaYoutube />
      </motion.a>
    </motion.div>
  );
}