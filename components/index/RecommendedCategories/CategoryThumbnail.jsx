import Image from 'next/image'
import Link from 'next/link'

const CategoryThumbnail = (props) => {
    return (
        <div className='w-full'>
            <div className='w-full h-40 relative'>
                <Image
                    src={props.category.imageURL}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='mt-2'>
                <h1 className='text-xs font-semibold text-white'>{props.category.title}</h1>
                <h3 className='text-xs text-gray-mute'>{props.category.viewers} viewers</h3>
                <div className='my-1 flex flex-wrap'>
                    {props.category.tags.map(tag => <span className='text-3xs bg-gray-lightest px-3 py-0.5 rounded-full text-gray-mute font-semibold my-0.5 mx-0.5'>{tag}</span>)}
                </div>
            </div>
        </div >
    )
}

export default CategoryThumbnail
