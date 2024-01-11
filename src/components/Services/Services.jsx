import ServicesList from "./ServicesList"


export default function Services() {
    return (
        <section>
            <div className='pt-5 pb-8 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                <h2 className='mb-5 font-bold text-xl tracking-wide'>
                    Services
                </h2>

                <div className="flex flex-wrap gap-5">
                    <ServicesList />
                </div>
            </div>
        </section>
    )
}