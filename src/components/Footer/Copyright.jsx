/* eslint-disable react/prop-types */
export default function Copyright({ visitorCount }) {

    return (
        <>
            <p className="text-center">This site has been visited <span className="font-medium">{visitorCount}</span> times. &copy; 2023-2024 <a className="font-semibold text-red-500 dark:text-sky-500 hover:opacity-[.85]" href="/">hamdanzull</a> - All Rights Reserved.</p>
        </>
    )
}