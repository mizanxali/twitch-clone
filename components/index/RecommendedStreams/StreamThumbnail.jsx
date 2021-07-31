import Image from 'next/image'
import Link from 'next/link'

const StreamThumbnail = (props) => {
    return (
        <div className='w-full'>
            <div className='w-full h-40 relative'>
                <span className='z-10 absolute top-2 left-2 rounded bg-red text-white font-semibold py-0.5 px-1.5 text-2xs'>LIVE</span>
                <Image
                    src={props.stream.thumbnailURL}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='mt-2 flex items-start'>
                <Image src={props.stream.channelImageURL} className='rounded-full' width={38} height={38} />
                <div className='ml-3'>
                    <h1 className='text-xs font-semibold text-white'>{props.stream.title}</h1>
                    <h3 className='text-xs text-gray-mute'>{props.stream.channel}</h3>
                    <h3 className='text-xs text-gray-mute'>{props.stream.content}</h3>
                    <div className='my-1 flex flex-wrap'>
                        <span className='text-2xs bg-gray-lightest px-3 py-0.5 rounded-full text-gray-mute font-semibold my-0.5 mx-0.5'>Esports</span>
                        <span className='text-2xs bg-gray-lightest px-3 py-0.5 rounded-full text-gray-mute font-semibold my-0.5 mx-0.5'>English</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreamThumbnail
