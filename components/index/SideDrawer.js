import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const SideDrawer = () => {

    const [followedChannels, setFollowedChannels] = useState([])
    const [recommendedChannels, setRecommendedChannels] = useState([])

    useEffect(() => {
        import('../../data/channels.json').then((data) => setFollowedChannels(data.default.followedChannels))
        import('../../data/channels.json').then((data) => setRecommendedChannels(data.default.recommendedChannels))
    }, [])

    return (
        <div className='text-white w-60 bg-gray-light py-2 h-full'>
            <h1 className='pl-2 pr-3 text-sm uppercase my-2 font-semibold'>Followed Channels</h1>
            {followedChannels.map(channel => (
                <ChannelCard
                    title={channel.title}
                    subtitle={channel.subtitle}
                    viewers={channel.viewers}
                    imageURL={channel.imageURL} />
            ))}

            <h1 className='pl-2 pr-3 text-sm uppercase mt-3 mb-2 font-semibold'>Recommended Channels</h1>
            {recommendedChannels.map(channel => (
                <ChannelCard
                    title={channel.title}
                    subtitle={channel.subtitle}
                    viewers={channel.viewers}
                    imageURL={channel.imageURL} />
            ))}
        </div>
    )
}

const ChannelCard = (props) => {
    return (
        <Link href="/">
            <div className='pl-2 pr-3 flex py-1 justify-between items-center w-full hover:bg-gray-lightest cursor-pointer'>
                <div className='flex flex-row items-center'>
                    <Image className='rounded-full' src={props.imageURL} width={32} height={32} />
                    <div className='flex flex-col ml-4'>
                        <h1 className='text-sm font-semibold'>{props.title}</h1>
                        <h3 className='text-xs text-gray-mute'>{props.subtitle}</h3>
                    </div>
                </div>
                <span className='text-sm'>{props.viewers}</span>
            </div>
        </Link>
    )
}

export default SideDrawer
