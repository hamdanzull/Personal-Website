import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/services', text: 'Services' },
];

export default function Header() {
    const direct = useNavigate()
    const [menuToggle, setMenuToggle] = useState(false);
    const handleMenu = () => setMenuToggle(!menuToggle);

    return (
        <header className='sticky inset-0 z-10'>
            <nav className='h-[55px] bg-[rgba(229,231,235,0.75)] dark:bg-[rgba(26,36,50,0.85)] flex items-center border-b-2 border-gray-300 dark:border-gray-700 drop-shadow-[-1px_3px_3px_rgba(0,0,0,0.03)] backdrop-blur-[5px]'>
                <div className='flex items-center justify-between py-3.5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                    <a href="/">
                        <h1 className='font-[Pacifico] font-medium tracking-wide text-2xl'>
                            hamdanzull
                        </h1>
                    </a>
                    <ul className={`font-medium rounded-b-xl md:rounded-none overflow-hidden flex items-center md:gap-6 lg:gap-10 bg-[#dcdfe4] dark:bg-[#16212e] text-gray-600 dark:text-gray-400 md:bg-transparent absolute md:static left-0 top-full flex-col md:flex-row justify-evenly md:justify-start z-[1] transition-[max-height] duration-500 ease-linear ${!menuToggle ? 'max-h-0 md:max-h-full' : 'max-h-[500px] md:max-h-full'}`}>
                        {navLinks.map((link, index) => (
                            <li key={index} onClick={() => direct(link.to)} className='cursor-pointer text-center w-screen md:w-auto py-3 md:py-0 hover:text-red-500 dark:hover:text-sky-500 hover:bg-[#d7dadf] hover:dark:bg-[#121c2a] md:hover:bg-transparent'>
                                {link.text}
                            </li>
                        ))}
                    </ul>

                    <div className='flex gap-2 md:absolute md:top-[50%] md:translate-y-[-50%] md:right-3'>
                        <ThemeToggle />
                        {/* https://www.patrykgulas.com/hamburgers */}
                        <button onClick={handleMenu}
                            className='md:hidden active:bg-gray-300 dark:active:bg-gray-700 h-[40px] w-[40px] flex items-center justify-center rounded-full z-[2]'>
                            <div className={`tham hover:opacity-[0.85_!important] tham-e-spin tham-w-6 ${menuToggle ? 'tham-active' : ''}`} >
                                <div className="tham-box">
                                    <div className="tham-inner bg-gray-700 dark:bg-gray-100" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}