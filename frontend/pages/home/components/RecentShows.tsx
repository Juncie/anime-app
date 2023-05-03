import AnimeList from '@/components/Lists/AnimeLists';
import mapAnime from '@/functions/_mapAnime';

interface Props { data: any, title: string}

export default function RecentAnimeList({ data, title }: Props): JSX.Element {
  let newAnime = [];

  // Loop through recent anime data and create a new object with only the data we need
  for(let i = 0; i < data.length; i++) {
    console.log(data[i].anime.title.userPreferred);
    
    let newAnimeObj = {
      title: data[i].anime.title.userPreferred || data[i].anime.title?.english || 'No Title',
      coverImage: data[i].anime.coverImage, 
      id: data[i].anime.id
    }
    newAnime.push(newAnimeObj)
  }

  // console.table(newAnime)

  let mappedAnime = mapAnime(newAnime);
  

	return <AnimeList title={title} children={mappedAnime} />;
}