import Image from 'next/image'
import Link from 'next/link'

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
                {props.isLive ?
                    <div className='text-sm flex items-center'><div className='inline-block h-2 w-2 rounded-full bg-red mr-1.5'></div>{props.viewers}</div>
                    :
                    <div className='text-sm'>Offline</div>
                }
            </div>
        </Link>
    )
}

export default ChannelCard