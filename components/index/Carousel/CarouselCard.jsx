import Image from 'next/image'
import Link from 'next/link'

const CarouselCard = () => {
    return (
        <div className='flex mx-auto w-2/3 h-72'>
            <div className='w-3/4 relative'>
            <Image
                src='https://images.unsplash.com/photo-1627745004802-e563b758999f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                layout='fill'
                objectFit='cover'
            />
            </div>
            
            <div className='w-1/4 p-3 bg-gray-light'>
                <div className='flex items-center'>
                    <Image src='https://pbs.twimg.com/profile_images/1400120292807254017/VRTlxmXk_400x400.jpg' className='rounded-full' width={48} height={48} />
                    <div className='ml-2'>
                        <h1 className='text-xs font-semibold text-purple'>BLASTtv</h1>
                        <h3 className='text-xs text-purple'>Apex Legends</h3>
                        <h3 className='text-xs '>15.3K viewers</h3>
                    </div>
                </div>
                <div className='my-2 flex flex-wrap'>
                    <span className='text-2xs bg-gray-lightest px-3 py-0.5 rounded-full text-gray-mute font-semibold my-0.5 mx-0.5'>Esports</span>
                    <span className='text-2xs bg-gray-lightest px-3 py-0.5 rounded-full text-gray-mute font-semibold my-0.5 mx-0.5'>English</span>
                </div>
                <p className='text-xs'>Featuring the top 20 teams from BLAST Titans Battle Royale, facing each other in the first tier one Apex Legends event to showcase the brand new Arenas mode.</p>
            </div>
        </div>
    )
}

export default CarouselCard
