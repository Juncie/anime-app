import AnimeList from '@/components/Lists/AnimeLists';
import mapAnime from '@/functions/_mapAnime';

interface Props { data: any}

export default function PopularAnimeList({ data }: Props): JSX.Element {
	let mappedAnime = mapAnime(data);
	return <AnimeList title='Popular' children={mappedAnime} />;
}

