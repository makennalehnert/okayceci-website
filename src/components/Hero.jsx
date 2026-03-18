import { motion } from "framer-motion";
import Socials from "./Socials";
import ceciBgImage from "./images/okayceci1.JPEG";


export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-white scroll-mt-10 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${ceciBgImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative flex flex-col items-center justify-center">
        <motion.h1
          className="font-bitcount text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          okayceci
        </motion.h1>

        <motion.p
          className="font-barlow text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          First Album Coming Soon
        </motion.p>
        <Socials/>
      </div>
    </section>
  );
}