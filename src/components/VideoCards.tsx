
import { Video } from '@prisma/client';
import { type FC } from 'react'
import VideoCard from './shared/VideoCard';

interface Props {
   videos: Video[]
}

const VideoCards: FC<Props> = ({videos}) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
        {
            videos.map((video)=>(
                <VideoCard key={video.id} video={video}/>
            ))
        }
    </div>
  )
}

export default VideoCards;