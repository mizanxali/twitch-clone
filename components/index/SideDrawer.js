import Image from 'next/image'
import Link from 'next/link'

const SideDrawer = () => {

    const followedChannels = [
        {
            title: 'sinatraa',
            subtitle: 'VALORANT',
            viewers: '13.2K',
            imageURL: 'https://pbs.twimg.com/profile_images/1340001054373552128/tA6yFDBW_400x400.jpg'
        },
        {
            title: 'WARDELL',
            subtitle: 'VALORANT',
            viewers: '9.9K',
            imageURL: 'https://pbs.twimg.com/profile_images/1334300086189305857/var1pwN6_400x400.jpg'
        },
        {
            title: 'pokimane',
            subtitle: 'Just Chatting',
            viewers: '6.8K',
            imageURL: 'https://pbs.twimg.com/profile_images/1412683540106334217/oI91U-qO_400x400.jpg'
        }
    ]

    const recommendedChannels = [
        {
            title: 'sinatraa',
            subtitle: 'VALORANT',
            viewers: '13.2K',
            imageURL: 'https://pbs.twimg.com/profile_images/1340001054373552128/tA6yFDBW_400x400.jpg'
        },
        {
            title: 'WARDELL',
            subtitle: 'VALORANT',
            viewers: '9.9K',
            imageURL: 'https://pbs.twimg.com/profile_images/1334300086189305857/var1pwN6_400x400.jpg'
        },
        {
            title: 'pokimane',
            subtitle: 'Just Chatting',
            viewers: '6.8K',
            imageURL: 'https://pbs.twimg.com/profile_images/1412683540106334217/oI91U-qO_400x400.jpg'
        }
    ]

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
