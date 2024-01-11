const services = [
    { icon: InstallationIcon, name: 'Installation', desc: 'Offering hardware and software installation (Operating Systems), applications, games, and network infrastructure.' },
    { icon: WebDevIcon, name: 'Web Development', desc: 'Crafting personalized portfolio websites, institutional sites, online stores (E-commerce), academic projects, and more.' },
    { icon: DesignIcon, name: 'Design', desc: 'Creating website or app designs & prototypes, brand logos, product designs, mockups, advertisements and more.' },
    { icon: AutomationIcon, name: 'Automation', desc: 'Providing Telegram & WhatsApp BOT services to enhance online business services, scraping data, and more.' },
]

export default function ServicesList() {
    return (
        services.map((service, idx) => (
            <div key={idx} className="flex items-center gap-3 w-full lg:w-[calc(50%-10px)]">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full border-[2.5px] border-gray-700 dark:border-gray-300">
                    <service.icon />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p>{service.desc}</p>
                </div>
            </div>
        ))
    )
}

function InstallationIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512">
            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>

    )
}

function WebDevIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 576 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z" />
        </svg>
    )
}

function DesignIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512">
            <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
        </svg>
    )
}

function AutomationIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 640 512">
            <path d="M86.3 197.8a51.8 51.8 0 0 0 -41.6 20.1V156a8.2 8.2 0 0 0 -8.2-8.2H8.2A8.2 8.2 0 0 0 0 156V333.6a8.2 8.2 0 0 0 8.2 8.2H36.6a8.2 8.2 0 0 0 8.2-8.2v-8.1c11.6 13.4 25.9 19.8 41.6 19.8 34.6 0 61.9-26.2 61.9-73.8C148.3 225.5 121.2 197.8 86.3 197.8zM71.5 305.7c-9.6 0-21.2-4.9-26.7-12.5V250.2c5.5-7.6 17.2-12.8 26.7-12.8 17.7 0 31.1 13.1 31.1 34C102.6 292.6 89.3 305.7 71.5 305.7zm156.4-59a17.4 17.4 0 1 0 17.4 17.4A17.4 17.4 0 0 0 227.9 246.7zM274 156.7V112a13.3 13.3 0 1 0 -10.2 0V156.7a107.5 107.5 0 1 0 10.2 0zm86 107.4c0 30.5-40.8 55.3-91.1 55.3s-91.1-24.8-91.1-55.3 40.8-55.3 91.1-55.3S359.9 233.5 359.9 264.1zm-50.2 17.4a17.4 17.4 0 1 0 -17.4-17.4h0A17.4 17.4 0 0 0 309.8 281.5zM580.7 250.5c-14.8-2.6-22.4-3.8-22.4-9.9 0-5.5 7.3-9.9 17.7-9.9a65.6 65.6 0 0 1 34.5 10.1 8.2 8.2 0 0 0 11.3-2.5c.1-.1 .1-.2 .2-.3l8.6-14.9a8.2 8.2 0 0 0 -2.9-11.1 99.9 99.9 0 0 0 -52-14.1c-39 0-60.2 21.5-60.2 46.2 0 36.3 33.7 41.9 57.6 45.6 13.4 2.3 24.1 4.4 24.1 11 0 6.4-5.5 10.8-18.9 10.8-13.6 0-31-6.2-42.6-13.6a8.2 8.2 0 0 0 -11.3 2.5c0 .1-.1 .1-.1 .2l-10.2 16.9a8.2 8.2 0 0 0 2.5 11.1c15.2 10.3 37.7 16.7 59.4 16.7 40.4 0 64-19.8 64-46.5C640 260.6 604.5 254.8 580.7 250.5zm-95.9 60.8a8.2 8.2 0 0 0 -9.5-5.9 23.2 23.2 0 0 1 -4.2 .4c-7.8 0-12.5-6.1-12.5-14.2V240.3h20.3a8.1 8.1 0 0 0 8.1-8.1V209.5a8.1 8.1 0 0 0 -8.1-8.1H458.6V171.1a8.1 8.1 0 0 0 -8.1-8.1H422.3a8.1 8.1 0 0 0 -8.1 8.1h0v30.2H399a8.1 8.1 0 0 0 -8.1 8.1h0v22.7A8.1 8.1 0 0 0 399 240.3h15.1v63.7c0 27 15.4 41.3 43.9 41.3 12.2 0 21.4-2.2 27.6-5.4a8.2 8.2 0 0 0 4.1-9.3z" />
        </svg>
    )
}