/* eslint-disable react/prop-types */
export default function Card({ children, title }) {
    return (
        <div className='flex-1 font-[Ubuntu] tracking-wide text-sm rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700'>
            <div className='header relative font-semibold bg-[#e5e7ebbf] dark:bg-[rgba(26,36,50,0.85)] border-b border-gray-300 dark:border-gray-700 h-8 flex items-center justify-center'>
                <p>{title}</p>
                <div className=' absolute right-3 gap-1 flex'>
                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                </div>
            </div>
            <div className='bg-[#e5e7eb40] dark:bg-[#1a243240] p-3 h-[250px] overflow-y-auto'>
                {children}
            </div>
        </div>
    )
}