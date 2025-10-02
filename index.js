const animes = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Anime ${i + 1}`,
  thumbnail: `https://picsum.photos/seed/anime${i + 1}/400/600`,
  banner: `https://picsum.photos/seed/anime${i + 1}/1920/600`,
  rating: (Math.random() * 2 + 7).toFixed(1), // 7.0 - 9.9
  year: 2000 + Math.floor(Math.random() * 25), // 2000 - 2024
  totalEpisodes: Math.floor(Math.random() * 200) + 12,
  genres: ["Action", "Adventure", "Fantasy"].slice(0, Math.floor(Math.random() * 3) + 1),
  description: `This is the description of Anime ${i + 1}.`,
  status: Math.random() > 0.5 ? "Completed" : "Ongoing",
  episodes: Array.from({ length: 5 }, (_, j) => ({
    id: j + 1,
    episodeNumber: j + 1,
    title: `Episode ${j + 1}`,
    thumbnail: `https://picsum.photos/seed/anime${i + 1}ep${j + 1}/300/170`,
    duration: "24:00",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    watched: Math.random() > 0.5
  }))
}));

console.log(JSON.stringify(animes, null, 2));
