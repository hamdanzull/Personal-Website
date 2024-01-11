/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import profile from '../../assets/profile-photo.png'

export default function Hero({ aboutToggle, handleAbout }) {
    return (
        <section>
            <div className='flex items-center relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 py-8 flex-col md:flex-row px-4 md:px-0 w-full mx-0 md:mx-auto max-w-2xl lg:max-w-screen-lg '>
                <div className='w-[175px] h-[175px] rounded-full overflow-hidden border-[5px] border-gray-300 dark:border-gray-400 hover:bg-sky-500 dark:hover:bg-sky-600 transition-all duration-500 ease-in-out'>
                    <img src={profile}
                        alt="Profile Photo"
                        className='w-full scale-[1.1] hover:scale-[1.2] drop-shadow-[3px_0_3px_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out cursor-pointer' />
                </div>
                <div className='w-full md:w-[calc(100%-175px)] pt-6 md:pt-0 md:px-6'>
                    <h2 className='font-bold text-2xl'>Haloo! I'm</h2>
                    <h3 className='font-bold text-3xl my-2'>Muh. Hamdan Zulfa</h3>
                    <p className='mt-2 mb-4'>A beginner enthusiast exploring modern <br />tech, especially in software development.</p>
                    <button onClick={handleAbout}
                        className='flex items-center justify-center gap-2 w-[120px] text-sm font-medium px-3 py-[3px] rounded-full border-2 text-red-500 dark:text-sky-500 border-red-500 dark:border-sky-500 active:ring ring-red-300 dark:ring-sky-800'>
                        {aboutToggle ? 'Show less' : 'Learn more'}
                        <svg className={`fill-red-500 dark:fill-sky-500 ${aboutToggle ? 'scale-y-[-1]' : ''}`} xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}