import { useEffect, useState } from "react";

export default function VisitCount() {
    const [counts, setCounts] = useState('…');
    const fetchCount = async () => {
        try {
            const response = await fetch('https://counterpro.vercel.app/count/?id=personal-website')
            const data = await response.json()
            setCounts(data.count);
        } catch (error) {
            console.error('Error fetching visitor count:', error);
        }
    }
    useEffect(() => {
        fetchCount();
    }, [])

    return (
        <p className="text-center">This website has been visited <a className="font-semibold text-red-500 dark:text-sky-500 hover:opacity-[.85]" href="/">{counts}</a> times.</p>

    )
}