import { motion, AnimatePresence } from "framer-motion";

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
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="bg-white rounded-xl p-6 max-w-sm w-40 h-80 text-center flex flex-col justify-center items-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-black"> {song.title}</h2>

              <ul className="flex flex-col gap-3">
                {song.links.spotify && (
                  <li>
                    <a
                      href={song.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
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
                      className="text-pink-400 hover:underline"
                    >
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
                      className="text-pink-400 hover:underline"
                    >
                      YouTube
                    </a>
                  </li>
                )}
              </ul>

              <button
                onClick={onClose}
                className="mt-6 px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-600"
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