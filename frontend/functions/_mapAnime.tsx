import VideoCard from "@/components/Cards/VideoCard"

const mapAnime = (anime: any) => {
 return anime.map((show: any, i: number) => (
    <VideoCard 
      id={show.id}
      key={i}
      title={show.title?.english} 
      image={show.coverImage}/>
  ))
}

export default mapAnime;