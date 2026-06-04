import { Movie } from "@/types";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Shadow Protocol",
    description: "An ex-agent uncovers a global conspiracy.",
    image: "https://example.com/images/shadow-protocol.jpg",
    videoUrl: "https://example.com/videos/shadow-protocol.mp4",
    category: "Action",
    isTrending: true,
    isPopular: true,
  },
  {
    id: "2",
    title: "Laugh Terminal",
    description: "A stand-up comic gets trapped in a smart city.",
    image: "https://example.com/images/laugh-terminal.jpg",
    videoUrl: "https://example.com/videos/laugh-terminal.mp4",
    category: "Comedy",
    isTrending: false,
    isPopular: true,
  },
  {
    id: "3",
    title: "Crimson Tidefall",
    description: "A submarine crew faces impossible odds in deep waters.",
    image: "https://example.com/images/crimson-tidefall.jpg",
    videoUrl: "https://example.com/videos/crimson-tidefall.mp4",
    category: "Action",
    isTrending: true,
    isPopular: false,
  },
  {
    id: "4",
    title: "Orbit 9",
    description: "Astronauts race to repair a failing orbital station.",
    image: "https://example.com/images/orbit-9.jpg",
    videoUrl: "https://example.com/videos/orbit-9.mp4",
    category: "Sci-Fi",
    isTrending: false,
    isPopular: true,
  },
  {
    id: "5",
    title: "Neon Streets",
    description: "A detective hunts a serial hacker in a cyberpunk city.",
    image: "https://example.com/images/neon-streets.jpg",
    videoUrl: "https://example.com/videos/neon-streets.mp4",
    category: "Thriller",
    isTrending: true,
    isPopular: true,
  },
  {
    id: "6",
    title: "The Last Orchard",
    description: "A family fights to save their legacy farm.",
    image: "https://example.com/images/the-last-orchard.jpg",
    videoUrl: "https://example.com/videos/the-last-orchard.mp4",
    category: "Drama",
    isTrending: false,
    isPopular: false,
  },
  {
    id: "7",
    title: "Midnight Manor",
    description: "Friends spend one night in a house that remembers.",
    image: "https://example.com/images/midnight-manor.jpg",
    videoUrl: "https://example.com/videos/midnight-manor.mp4",
    category: "Horror",
    isTrending: true,
    isPopular: false,
  },
  {
    id: "8",
    title: "Code Hearts",
    description: "Two rival developers create a startup together.",
    image: "https://example.com/images/code-hearts.jpg",
    videoUrl: "https://example.com/videos/code-hearts.mp4",
    category: "Romance",
    isTrending: false,
    isPopular: true,
  },
  {
    id: "9",
    title: "Deep Blue Quest",
    description: "Divers search for a lost city beneath the ice.",
    image: "https://example.com/images/deep-blue-quest.jpg",
    videoUrl: "https://example.com/videos/deep-blue-quest.mp4",
    category: "Adventure",
    isTrending: true,
    isPopular: true,
  },
  {
    id: "10",
    title: "Empire of Dust",
    description: "A historian uncovers secrets of a fallen kingdom.",
    image: "https://example.com/images/empire-of-dust.jpg",
    videoUrl: "https://example.com/videos/empire-of-dust.mp4",
    category: "History",
    isTrending: false,
    isPopular: false,
  },
  {
    id: "11",
    title: "Pulse",
    description: "A doctor uses AI to solve impossible medical mysteries.",
    image: "https://example.com/images/pulse.jpg",
    videoUrl: "https://example.com/videos/pulse.mp4",
    category: "Drama",
    isTrending: true,
    isPopular: true,
  },
];

interface MovieFilters {
  category?: string;
  type?: "trending" | "popular";
}

export function getMovies({ category, type }: MovieFilters = {}) {
  return movies.filter((movie) => {
    const matchesCategory = !category || movie.category === category;
    const matchesType =
      !type ||
      (type === "trending" ? movie.isTrending : type === "popular" ? movie.isPopular : true);

    return matchesCategory && matchesType;
  });
}

export function findMovieById(id: string) {
  return movies.find((movie) => movie.id === id);
}
