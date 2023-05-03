import axios from 'axios';

// Need to get ID from Search
let id;
const baseUrl = `https://api.enime.moe`;

// Episodes: https://api.enime.moe/anime/${id}/episodes
// Anime: https://api.enime.moe/anime/${id} params:
// Recent: https://api.enime.moe/anime/recent params(page: number, perPage: number, language: string)

// Episode: https://api.enime.moe/eppisode/${id}
// Search: https://api.enime.moe/search/${query} parms(page: number, perPage: number, all: boolean)
// View: https://api.enime.moe/view/{animeIdentifier}/{episodeNumber}
// Popular: https://api.enime.moe/popular params(page: number, perPage: number)

// Get Anime: Get an anime object in the service with ID or slug
export const getAnime = async (id: String) => 
  await axios.get(`${baseUrl}/anime/${id}`)
  .then((res) => res.data.data)
  .catch((err) => console.log(err));

// Get Episodes: Get an anime object's episodes in the service with ID or slug
export const getAnimeEpisodes = async (id: String) => 
  await axios.get(`${baseUrl}/anime/${id}/episodes`)
  .then((res) => res.data.data)
  .catch((err) => console.log(err));

// Get an episode object with provided ID
export const getAnimeEpisode = async (id: String) => 
  await axios.get(`${baseUrl}/episode/${id}`)
  .then((res) => res.data.data)
  .catch((err) => console.log(err));

// Search Anime: Search anime based on query
export const searchAnime = async (query: String, page?: number, perPage?: number | 30, all?: Boolean) =>
  await axios.get(`${baseUrl}/search/${query}?page=${page}&perPage=${perPage}&all=${all}`)
  .then((res) => res.data.data)
  .catch((err) => console.log(err));

// View Anime: Get an episode object with provided anime ID/slug and episode number
export const viewAnime = async (animeIdentifier: String, episodeNumber: String) =>
  await axios.get(`${baseUrl}/view/${animeIdentifier}/${episodeNumber}`)
  .then((res) => res.data.data)
  .catch((err) => console.log(err))

// Get Popular: List currently releasing anime sorted by popularity
export const getPopular = async (page?: number) =>
 await axios.get(`${baseUrl}/popular`)

// Get Recent: Get recent episode releases
export const getRecent = async (page?: number, perPage?: number | 15, language?: String) =>
await axios.get(`${baseUrl}/recent`)

