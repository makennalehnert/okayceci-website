import { useState } from "react";
import { motion } from "framer-motion";
import { SiSpotify, SiApplemusic, SiYoutubemusic } from "react-icons/si";
import MusicModal from "./MusicModal";
import feeluCover from "./covers/feelu.jpg";
import lackofyouCover from "./covers/lackofyou.jpg"
import idoluvuCover from "./covers/idoluvu.jpg"
import fallingonmeCover from "./covers/fallingonme.jpg"
import lovebugCover from "./covers/lovebug.jpg"
import tellmeifudoCover from "./covers/tellmeifudo.jpg"
import iwantyourloveCover from "./covers/iwantyourlove.jpg"
import pursebottleCover from "./covers/pursebottle.jpg"
import notequieroCover from "./covers/notequiero.jpg"


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
  {
    title: "i do luv u",
    cover: idoluvuCover,
    links: {
      spotify: "https://open.spotify.com/track/6LCSYQNqqXMVNWPoc2q8UE?si=6a320545496f4ce6",
      apple: "https://music.apple.com/us/song/i-do-luv-u/1683014026",
      youtubeMusic: "https://music.youtube.com/watch?v=hMJf0C1X1Qs&si=2VQhesVaS4GhAZut"
    },
  },
  {
    title: "falling on me",
    cover: fallingonmeCover,
    links: {
      spotify: "https://open.spotify.com/track/3QM8PmpJ8JgQH5nuJJvpHZ?si=2370bfe88f8b41f2",
      apple: "https://music.apple.com/us/album/falling-on-me-single/1611669251",
      youtubeMusic: "https://music.youtube.com/watch?v=cWg4s2wHJV8&si=QrmdewfPqAwDKdmI"
    },
  },
  {
    title: "love bug",
    cover: lovebugCover,
    links: {
      spotify: "https://open.spotify.com/track/04fe8arELvF9WbPVSq1tPj?si=261d67e975a34f13",
      apple: "https://music.apple.com/us/album/love-bug-single/1574414359",
      youtubeMusic: "https://music.youtube.com/watch?v=SncjB5iqekY&si=S_RWTZhkHiOxQ2Vr"
    },
  },
  {
    title: "tell me if u do?",
    cover: tellmeifudoCover,
    links: {
      spotify: "https://open.spotify.com/track/1EbEVDuEznpaP5qI98qBun?si=3c6c92a31d774347",
      apple: "https://music.apple.com/us/album/tell-me-if-u-do-single/1606466946",
      youtubeMusic: "https://music.youtube.com/watch?v=q5c2OF5QEto&si=0sRdh1NLLyzTeZ2K"
    },
  },
  {
    title: "i want your love",
    cover: iwantyourloveCover,
    links: {
      spotify: "https://open.spotify.com/track/1m2kxpgXCKdnuic2126pWc?si=8846a4b7f4d94c8d",
      apple: "https://music.apple.com/us/album/i-want-your-love-single/1690239335",
      youtubeMusic: "https://music.youtube.com/watch?v=G7BDpP93sqg&si=N6cJ7SXK1QaOm1U-"
    },
  },
  {
    title: "purse bottle",
    cover: pursebottleCover,
    links: {
      spotify: "https://open.spotify.com/track/6HiKdGFLwymQyYG67Ztgk6?si=1df2fdf6f90a43da",
      apple: "hhttps://music.apple.com/us/album/purse-bottle-single/1619561602",
      youtubeMusic: "https://music.youtube.com/watch?v=rynOLkXAzYQ&si=tnIgNb_21t_ImNs-"
    },
  },
  {
    title: "no te quiero",
    cover: notequieroCover,
    links: {
      spotify: "https://open.spotify.com/track/2fWQTndCKvnG29fo6fRZUf?si=b1a101223a6e4f31",
      apple: "https://music.apple.com/us/album/no-te-quiero-single/1709564323",
      youtubeMusic: "https://music.youtube.com/watch?v=Pvq_CXLrzbc&si=CbVemi8fh0-C2J5s"
    },
  },
  // add more songs here
];
const [selectedSong, setSelectedSong] = useState(null);

  return (
    <section id="music" className="min-h-screen scroll-mt-10 bg-black text-white font-barlow p-10">
      <h2 className="text-4xl font-bitcount font-bold mb-10 text-center">Music</h2>
      <div className = "flex justify-center items-center" >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((song, index) => (
  <motion.div
    key={song.title}
    className={`relative group cursor-pointer overflow-hidden rounded-lg 
      ${songs.length % 2 === 1 && index === songs.length - 1 
        ? "col-span-2 md:col-span-1 flex justify-center md:block" 
        : ""}
    `}
    whileHover={{ scale: 1.05 }}
    onClick={() => setSelectedSong(song)}
  >
    <div className="w-full max-w-[180px] sm:max-w-xs md:max-w-none transition-all">
      <img
        src={song.cover}
        alt={song.title}
        className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg"
      />
    </div>

    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold text-sm sm:text-lg text-center px-2">
        Listen to {song.title}
      </span>
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
      </div>
      <p className="text-center pt-10">Listen to More okayceci</p>
      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <a 
        href="https://open.spotify.com/artist/1NCMfKfYXbyLqsChnYNd3P?si=I7KomRSESHG16OHaE7bbzw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#1DB954] text-white px-5 py-3 rounded-full">
        <SiSpotify />
          Spotify
        </a>

        <a 
        href="https://music.apple.com/us/artist/okayceci/1481077454"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full border border-white">
        <SiApplemusic />
          Apple Music
        </a>

        <a 
        href="https://music.youtube.com/channel/UC40mUODD7F5XWTN87OPjFpA?si=2bn1i-bvYrb9a7tQ"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full">
        <SiYoutubemusic />
          YouTube Music
        </a>
      </div>
    </section>
  );
}