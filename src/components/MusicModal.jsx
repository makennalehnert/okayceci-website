import { motion, AnimatePresence } from "framer-motion";
import { SiSpotify, SiApplemusic, SiYoutubemusic } from "react-icons/si";

export default function MusicModal({ isOpen, onClose, song }) {
  return (
    <AnimatePresence>
      {isOpen && song && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 font-barlow"
            initial={{ y: 40, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.9, opacity: 0 }}
          >
            <div className="bg-pink-300 rounded-xl p-6 w-full max-w-sm max-h-[90vh] overflow-y-auto text-center flex flex-col justify-center items-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white"> {song.title}</h2>

              <ul className="flex flex-col gap-3 w-full">
                {song.links.spotify && (
                  <li>
                    <a
                      href={song.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#1DB954] text-white px-5 py-3.5 rounded-full"
                    >
                    <SiSpotify/>    
                      Spotify
                    </a>
                  </li>
                )}
                {song.links.apple && (
                  <li>
                    <a
                      href={song.links.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-black text-white px-5 py-3.5 rounded-full border border-white"
                    >
                    <SiApplemusic/>
                      Apple Music
                    </a>
                  </li>
                )}
                {song.links.youtubeMusic && (
                  <li>
                    <a
                      href={song.links.youtubeMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-red-600 text-white px-5 py-3.5 rounded-full"
                    >
                    <SiYoutubemusic/>
                      YouTube
                    </a>
                  </li>
                )}
              </ul>

              <button
                onClick={onClose}
                className="mt-6 w-full px-4 py-2 bg-white text-pink-400 rounded-lg hover:bg-pink-50"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}