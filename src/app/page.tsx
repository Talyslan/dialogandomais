import Image from 'next/image';
import Link from 'next/link';
import { IconRedirect, IconArrowLow } from '@/assets/icons';
import { LogoFull, LogoIcon } from '@/assets/logo';
import illustrativeImg from '@/assets/landing-page/illustrativeImg.png';
import aboutUs from '@/assets/landing-page/about-us.jpg';
import {
    Footer,
    Header,
    OurCourses,
    Testemonials,
    WhyChooseDialogandoMais
} from '@/components';
import { formPath } from '@/utils/path-form';
import { TransitionSVG } from '@/assets/landing-page/transition';

export default function Home() {
    return (
        <>
            <Header />
            <div
                className="w-full h-[125vh] bg-contain bg-center z-[-1] absolute top-[550px]"
                style={{
                    backgroundImage: "url('/bg-halftone-pattern.svg')"
                }}
            ></div>

            <main id="inicio" className="!mt-32 !mb-16 flex flex-col gap-32">
                <section className="!p-0">
                    <div className="flex flex-col justify-around items-center animate-in fade-in duration-3500 delay-500 md:flex-row !px-8">
                        <div className="flex flex-col justify-center md:items-start items-center gap-6 w-1/2">
                            <LogoFull className="w-1/3 min-w-[200px]" />
                            <h1 className="!font-bold md:text-start text-center !text-[3rem] sm:text-[3.5rem]">
                                Transformando <br />
                                <strong className="text-main">
                                    aprendizagem
                                </strong>
                                <br /> em diálogo
                            </h1>
                            <p className="!text-xl md:text-start text-center">
                                Aprenda inglês de forma personalizada, natural e
                                eficaz, desenvolvendo sua comunicação com
                                confiança.
                            </p>
                            <Link
                                href={formPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-main flex justify-between items-center p-2 pl-6 rounded-full md:w-fit gap-5 hover:brightness-110 transition"
                            >
                                <span className="text-white text-md">
                                    Quero minha aula grátis
                                </span>
                                <IconRedirect className="bg-background w-10 h-10 overflow-visible p-3 rounded-full" />{' '}
                            </Link>
                        </div>
                        <div className="hidden lg:block relative">
                            <LogoIcon className="absolute left-1/2 bottom-[90px] transform -translate-x-1/2 z-[-1] max-w-[400px] scale-[2.5] overflow-hidden" />
                            <Image
                                src={illustrativeImg}
                                alt="Imagem ilustrativa de uma mulher segurando um livro."
                                className="w-6xl max-w-[450px] bottom-0"
                            />
                        </div>
                    </div>
                    <div className="relative w-full lg:block hidden">
                        <TransitionSVG className="w-full absolute -top-[24px] rounded-xl" />
                    </div>
                </section>

                <section>
                    <div className="flex xl:flex-row bg-gray-100 flex-col justify-between items-center rounded-[90px] xl:px-20 px-10 py-10 w-full bg-contain bg-no-repeat bg-center xl:bg-[url('/bg-why-choose.svg')] xl:bg-transparent">
                        <h2 className="!font-medium sm:!text-6xl xl:text-start mb-10 text-center">
                            Por que <br /> escolher a <br />{' '}
                            <strong className="text-main">
                                dialogando mais?
                            </strong>
                        </h2>
                        <WhyChooseDialogandoMais />
                    </div>
                </section>

                <section
                    id="nossos-cursos"
                    className="flex flex-col items-center gap-10"
                >
                    <h2>
                        Nossos <strong className="text-main">cursos</strong>
                    </h2>
                    <OurCourses />
                </section>

                <section className="flex flex-col items-center gap-5">
                    <h2 className="text-center">
                        O que dizem{' '}
                        <strong className="text-main">nossos alunos?</strong>
                    </h2>
                    <Testemonials />
                </section>

                <section
                    id="sobre-nos"
                    className="flex justify-center md:justify-between flex-wrap items-center px-2 md:p-32 relative"
                >
                    <div className="border-10 border-main/70 rounded-full absolute w-5xl h-[650px] -left-[700px] -z-50"></div>
                    <Image
                        src={aboutUs}
                        alt={'Imagem do casal fundador da Dialogando Mais.'}
                        className="w-2/5 min-w-[250px] rounded-3xl order-1 md:-order-1 mt-10 md:mt-0"
                    />

                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="md:text-start text-center mb-10 md:mb-5">
                                Sobre <strong className="text-main">Nós</strong>
                            </h2>
                            <p className="!text-xl text-center md:text-start">
                                A Dialogando Mais nasceu com a missão de
                                democratizar o ensino de inglês e transformar
                                vidas através do aprendizado de idiomas. Com um
                                professor experiente e uma metodologia testada e
                                aprovada, oferecemos um ensino de qualidade
                                acessível a todos.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center md:justify-start gap-5">
                            <div className="flex gap-5">
                                <IconArrowLow />
                                <span className="text-sm">
                                    👨‍🏫 <strong> Andrey </strong>- Professor e
                                    fundador da Dialogando Mais.
                                </span>
                            </div>
                            <div className="flex gap-5">
                                <IconArrowLow />
                                <span className="text-sm">
                                    👩‍🏫 <strong>Fernanda</strong> - Cofundadora
                                    da Dialogando Mais.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-card-background flex justify-between items-center rounded-xl px-24 py-10 w-4/5 m-auto flex-col lg:flex-row">
                        <div className="flex flex-col gap-5 mb-10">
                            <h2 className="md:!text-7xl !font-normal md:text-start text-center">
                                Faça a sua <br />
                                <strong className="text-main">inscrição</strong>
                            </h2>
                            <Link
                                href={formPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-main rounded-md text-center md:text-2xl text-white p-2 font-medium hover:brightness-110 transition"
                            >
                                Quero fazer parte!
                            </Link>
                        </div>

                        <LogoIcon
                            className="bg-main p-2 rounded-3xl w-2/5 min-w-[200px] max-h-[200px] md:lg-auto"
                            fill="#fff"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
