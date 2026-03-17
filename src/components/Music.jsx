import { useState } from "react";
import { motion } from "framer-motion";
import MusicModal from "./MusicModal";
import feeluCover from "./covers/feelu.jpg";
import lackofyouCover from "./covers/lackofyou.jpg"



export default function Music() {

  const songs = [
  {
    title: "feel u",
    cover: feeluCover,
    links: {
      spotify: "https://open.spotify.com/track/6042XJOCOw3U90tCNGBIPz",
      apple: "https://music.apple.com/us/album/feel-u-single/1529185550",
      youtubeMusic: "https://music.youtube.com/watch?v=Drr_imUzIyQ&si=W7bkMUvVe1cDTaib"
    },
  },
  {
    title: "lack of you",
    cover: lackofyouCover,
    links: {
      spotify: "https://open.spotify.com/track/2EGZ3LT5JG5GrunILyYGyg?si=5bdfae9180ad40fe",
      apple: "https://music.apple.com/us/song/lack-of-you/1766518666",
      youtubeMusic: "https://music.youtube.com/watch?v=jneKKmWBqEQ&si=iJE1-Rlz_cD4EmJE"
    },
  },
  // add more songs here
];
const [selectedSong, setSelectedSong] = useState(null);

  return (
    <section id="music" className="min-h-screen bg-black text-white font-barlow p-10">
      <h2 className="text-4xl font-bold mb-8 text-center">Music</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((song) => (
          <motion.div
            key={song.title}
            className="relative cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedSong(song)}
          >
            {/* Album cover */}
            <img
              src={song.cover}
              alt={song.title}
              className="w-64 h-64 object-cover rounded-md"
            />

            {/* Hover overlay */}
            <div className="absolute w-64 h-64 inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Listen to {song.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedSong && (
        <MusicModal
          isOpen={!!selectedSong}
          onClose={() => setSelectedSong(null)}
          song={selectedSong}
        />
      )}
    </section>
  );
}