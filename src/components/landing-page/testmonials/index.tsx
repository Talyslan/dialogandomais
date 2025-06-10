import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';

export function Testemonials() {
    const testemonials = [
        {
            image: '/favicon.ico',
            name: 'Mariana Souza',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti quod pariatur, qui veniam distinctio in nobis eum odio ad vero animi laborum officia quia dignissimos alias ratione non illum.'
        },
        {
            image: '/favicon.ico',
            name: 'Mariana Souza',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti quod pariatur, qui veniam distinctio in nobis eum odio ad vero animi laborum officia quia dignissimos alias ratione non illum.'
        },
        {
            image: '/favicon.ico',
            name: 'Mariana Souza',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti quod pariatur, qui veniam distinctio in nobis eum odio ad vero animi laborum officia quia dignissimos alias ratione non illum.'
        },
        {
            image: '/favicon.ico',
            name: 'Mariana Souza',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti quod pariatur, qui veniam distinctio in nobis eum odio ad vero animi laborum officia quia dignissimos alias ratione non illum.'
        }
    ];

    return (
        <Carousel
            className="max-w-6xl w-full flex justify-center p-4 overflow-visible"
            opts={{
                align: 'start',
                duration: 10,
                slidesToScroll: 1 // 👈 importante deixar 1 aqui!
            }}
        >
            <CarouselContent className="flex gap-3 p-5">
                {testemonials.map((testemonial, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-full lg:basis-1/2 flex items-center justify-center gap-10 bg-card-background px-6 py-14 rounded-2xl transition-all duration-300"
                    >
                        <Image
                            src={'/favicon.ico'}
                            alt={'Foto de ' + testemonial.name}
                            width={70}
                            height={70}
                            className="rounded-full mb-4 md:block hidden "
                        />
                        <div className="text-start">
                            <h3 className="text-xl font-semibold mb-2">
                                {testemonial.name || 'Nome'}
                            </h3>
                            <p className="text-gray-500">
                                {testemonial.description ||
                                    'Texto do depoimento aqui.'}
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:inline-flex bg-gray-200 text-gray-700 hover:text-background hover:cursor-pointer hover:bg-main transition" />
            <CarouselNext className="hidden md:inline-flex bg-gray-200 text-gray-700 hover:cursor-pointer hover:bg-main hover:text-background transition" />
        </Carousel>
    );
}
