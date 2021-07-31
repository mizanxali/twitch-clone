import { useEffect, useState } from "react"
import StreamsRow from "./StreamsRow"

const RecommendedStreams = () => {

    const [showMore, setShowMore] = useState(false)

    const [recommendedStreams, setRecommendedStreams] = useState([])

    useEffect(() => {
        import('../../../data/recommended.json').then((data) => setRecommendedStreams(data.default.recommendedStreams))
    }, [])

    return (
        <div className='m-4 p-4'>
            <h1 className='text-white font-semibold text-lg'>Live channels we think you’ll like</h1>
            <StreamsRow streams={recommendedStreams.slice(0, 4)} />
            {!showMore && <p className='my-4 text-purple text-xs text-center cursor-pointer' onClick={() => setShowMore(true)}>Show More</p>}
            {showMore && <StreamsRow streams={recommendedStreams.slice(4, 8)} />}
        </div>
    )
}

export default RecommendedStreams
