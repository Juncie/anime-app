import AnimeList from '@/components/Lists/AnimeLists';
import mapAnime from '@/functions/_mapAnime';

interface Props { data: any}

export default function RecentAnimeList({ data }: Props): JSX.Element {
  let newAnime = [];

  // Loop through recent anime data and create a new object with only the data we need
  for(let i = 0; i < data.length; i++) {
    let newAnimeObj = {
      title: data[i].anime.title?.english || 'No Title', 
      coverImage: data[i].anime.coverImage, 
      id: data[i].anime.id
    }
    newAnime.push(newAnimeObj)
  }

  let mappedAnime = mapAnime(newAnime);
  

	return <AnimeList title='Recently Updated' children={mappedAnime} />;
}