import StreamThumbnail from "./StreamThumbnail"

const StreamsRow = (props) => {
    return (
        <div className='mx-auto my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {props.streams.map(stream => <StreamThumbnail stream={stream} />)}
        </div>
    )
}

export default StreamsRow