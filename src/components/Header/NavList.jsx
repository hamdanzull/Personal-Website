/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';


const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/services', text: 'Services' },
];

export default function NavList({ menuToggle }) {
    return (
        <nav className={`font-medium rounded-b-xl md:rounded-none overflow-hidden bg-[#dcdfe4] dark:bg-[#16212e] text-gray-500 dark:text-gray-400 md:bg-transparent dark:md:bg-transparent absolute md:static left-0 top-full transition-[max-height] duration-500 ease-linear ${!menuToggle ? 'max-h-0 md:max-h-full' : 'max-h-[500px] md:max-h-full'}`}>
            <ul className='flex items-center md:gap-6 lg:gap-10 flex-col md:flex-row justify-evenly md:justify-start z-[1]'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.to} className={
                            ({ isActive }) => `block cursor-pointer text-center w-screen md:w-auto py-3 md:py-0 transition-colors duration-300 ${isActive ? 'text-red-500 dark:text-sky-500 bg-[#d6d9de] dark:bg-[#121c2a] md:bg-transparent dark:md:bg-transparent' : 'hover:text-gray-700 dark:hover:text-gray-300'}`
                        }>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}