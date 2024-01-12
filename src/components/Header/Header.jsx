import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import NavList from './NavList';

export default function Header() {
    const [menuToggle, setMenuToggle] = useState(false);
    const handleMenu = () => setMenuToggle(!menuToggle);

    return (
        <header className='sticky inset-0 z-10'>
            <div className='h-[55px] bg-[rgba(229,231,235,0.75)] dark:bg-[rgba(26,36,50,0.85)] flex items-center border-b-2 border-gray-300 dark:border-gray-700 drop-shadow-[-1px_3px_3px_rgba(0,0,0,0.03)] backdrop-blur-[5px]'>
                <div className='flex items-center justify-between py-3.5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                    <a href="/">
                        <h1 className='font-[Pacifico] font-medium tracking-wide text-2xl'>
                            hamdanzull
                        </h1>
                    </a>
                    <NavList menuToggle={menuToggle} />

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
            </div>
        </header>
    )
}