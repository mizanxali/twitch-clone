import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs'
import { BiVideo } from 'react-icons/bi'
import { CgHeart } from 'react-icons/cg'

import ChannelCard from './ChannelCard'

const SideDrawer = () => {

    const [followedChannels, setFollowedChannels] = useState([])
    const [recommendedChannels, setRecommendedChannels] = useState([])

    const [drawerCollapsed, setDrawerCollapsed] = useState(false)

    useEffect(() => {
        import('../../../data/channels.json').then((data) => setFollowedChannels(data.default.followedChannels))
        import('../../../data/channels.json').then((data) => setRecommendedChannels(data.default.recommendedChannels))
    }, [])

    return (
        drawerCollapsed ?
            <CollapsedSideDrawer
                followedChannels={followedChannels}
                recommendedChannels={recommendedChannels}
                setDrawerCollapsed={setDrawerCollapsed} />
            :
            <ExpandedSideDrawer
                followedChannels={followedChannels}
                recommendedChannels={recommendedChannels}
                setDrawerCollapsed={setDrawerCollapsed} />
    )
}

const CollapsedSideDrawer = (props) => {
    return (
        <div className='text-white w-12 bg-gray-light py-2 h-full text-center overflow-auto'>
            <BsArrowBarRight className='text-xl cursor-pointer mx-auto mt-1 mb-6' onClick={() => props.setDrawerCollapsed(false)} />
            <CgHeart className='text-xl mx-auto my-3 text-gray-mute' />
            {props.followedChannels.map(channel => (
                <Link href="/">
                    <div className='cursor-pointer text-center my-2'>
                        <Image className='mx-auto rounded-full block' src={channel.imageURL} width={32} height={32} />
                    </div>
                </Link>
            ))}

            <BiVideo className='text-xl mx-auto my-3 text-gray-mute' />
            {props.recommendedChannels.map(channel => (
                <Link href="/">
                    <div className='cursor-pointer text-center my-2'>
                        <Image className='mx-auto rounded-full block' src={channel.imageURL} width={32} height={32} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

const ExpandedSideDrawer = (props) => {
    return (
        <div className='text-white w-72 bg-gray-light py-2 h-full overflow-auto'>
            <div className='flex justify-between items-center pl-2 pr-3 my-2'>
                <h1 className='text-sm uppercase font-semibold'>Followed Channels</h1>
                <BsArrowBarLeft className='text-xl cursor-pointer' onClick={() => props.setDrawerCollapsed(true)} />
            </div>
            {props.followedChannels.map(channel => (
                <ChannelCard
                    isLive={channel.isLive}
                    title={channel.title}
                    subtitle={channel.subtitle}
                    viewers={channel.viewers}
                    imageURL={channel.imageURL} />
            ))}

            <h1 className='pl-2 pr-3 text-sm uppercase mt-3 mb-2 font-semibold'>Recommended Channels</h1>
            {props.recommendedChannels.map(channel => (
                <ChannelCard
                    isLive={channel.isLive}
                    title={channel.title}
                    subtitle={channel.subtitle}
                    viewers={channel.viewers}
                    imageURL={channel.imageURL} />
            ))}
        </div>
    )
}

export default SideDrawer
