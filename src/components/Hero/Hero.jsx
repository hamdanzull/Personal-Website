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
                    <h3 className='font-bold text-3xl my-2 flex items-center gap-2'>
                        Muh. Hamdan Zulfa
                        <svg className='' fill="rgb(0, 149, 246)" height="24" width="24" role="img" viewBox="0 0 40 40"><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"></path></svg>

                    </h3>
                    <p className='mt-2 mb-4'>A beginner enthusiast exploring modern tech, <br />especially in software development.</p>
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