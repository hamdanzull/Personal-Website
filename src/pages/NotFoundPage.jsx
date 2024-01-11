import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/Header/ThemeToggle";

export default function NotFoundPage() {
    const direct = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-dvh">
            <div className="absolute top-3 right-3">
                <ThemeToggle />
            </div>
            <h1 className="text-center text-8xl font-bold">404</h1>
            <h1 className="text-center text-3xl font-semibold pt-3 pb-8">Page Not Found</h1>
            <button onClick={() => direct('/')} className="font-semibold flex items-center gap-1 text-red-500 dark:text-sky-500 px-4 py-1.5 rounded-full border-[2.5px] border-red-500 dark:border-sky-500 ring-red-300 dark:ring-sky-800 active:ring-4">
                <HomeIcon />
                Back To Home
            </button>
        </div>
    )
}

function HomeIcon() {
    return (
        <svg className="fill-red-500 dark:fill-sky-500" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 576 512">
            <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
        </svg>
    )
}