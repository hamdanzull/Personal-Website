/* eslint-disable react/prop-types */
export default function Thumbnail({ image, title }) {
    return (
        <div className='w-full md:w-[60%] p-5 bg-gray-200 dark:bg-transparent flex items-center justify-center'>
            <img src={image} alt={title}
                className='drop-shadow-[3px_3px_3px_rgba(0,0,0,0.2)]' />
        </div>
    )
}