/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const text = [`Hi everyone 👋\nI'm Muhammad Hamdan Zulfa, a 20-year-old Software Engineer and a student at AMIKOM University based in Yogyakarta, Indonesia. Every day, I'm immersed in writing lines of code. Bugs and errors seem to be my constant companions.`, `I'm always curious to learn something new, especially in web technology and design. I fall in love with JavaScript and TypeScript. Not just coding, I also took care of what I wrote. Writing clean code and make me comfortable.`]

export function AboutContent({ aboutToggle }) {
    const [typing] = useTypewriter({
        words: text,
        loop: 0,
        typeSpeed: 20,
        deleteSpeed: 20,
        delaySpeed: 3000
    })
    return (
        <>
            <p>hamdanzull@Host:~$ node aboutMe.js</p>
            <p className='whitespace-pre-line mt-2 leading-6'>
                {aboutToggle ? typing : 'See you 👋'}
                <Cursor />
            </p>
        </>
    )
}