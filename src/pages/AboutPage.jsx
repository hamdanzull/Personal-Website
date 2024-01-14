import { text } from "../components/About/AboutContent"
import Card from "../components/About/Card"
import SkillsContent from "../components/About/SkillsContent"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function AboutPage() {
    return (
        <>
            <Header />
            <section>
                <div className='pt-5 pb-8 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                    <h2 className='font-bold text-xl tracking-wide'>About Me</h2>
                    {text.map((paragraph, index) => (
                        <p key={index} className="mt-3 whitespace-pre-line">
                            {paragraph}
                        </p>
                    ))}
                    <br />
                    <Card title={"Skills"}>
                        <SkillsContent />
                    </Card>
                    <br />
                    <h2 className='font-bold text-xl tracking-wide'>Lorem</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate maxime amet modi optio tempora dolorem quibusdam earum? Modi error quae culpa dignissimos dicta tenetur maiores dolores minus impedit voluptatibus voluptatum dolor officia, ab sequi? Fugiat impedit voluptatum quis consequatur molestias tempora, provident ad possimus accusamus recusandae assumenda! Tenetur, doloremque!</p>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora molestiae praesentium delectus illum sint id et laborum ipsum quasi, ad possimus consequuntur architecto aperiam dignissimos perspiciatis quas facilis ipsam ex nostrum voluptate! Sint itaque molestiae facilis quae placeat fuga distinctio, neque illo labore nesciunt doloremque eaque, sed fugiat illum optio nemo amet maiores! Quae amet pariatur explicabo voluptatem? Quas laborum error at unde in, enim aut earum praesentium dolor, dignissimos quo a architecto eum.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}