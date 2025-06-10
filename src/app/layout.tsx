import type { Metadata } from 'next';
import Head from 'next/head';
import { articulatCF } from '../../public/fonts/articulat-cf';
import '../styles/globals.css';

export const metadata: Metadata = {
    title: 'Dialogando Mais',
    description:
        'Plataforma inclusiva para diálogo e participação cidadã. Descubra temas, participe de enquetes e faça sua voz ser ouvida.',
    keywords: [
        'aprender Inglês com a bíblia',
        'inglês com Jesus',
        'inglês com o senhor',
        'inglês com a bíblia',
        'curso de inglês',
        'aprendendo inglês',
        'aprender inglês',
        'aprender',
        'english',
        'inglês',
        'participação cidadã',
        'diálogo social',
        'democracia digital',
        'enquetes públicas',
        'Dialogando Mais'
    ],
    authors: [{ name: 'Talyslan Canabarro' }, { name: 'Carlos Anyel' }],
    creator: 'Talyslan Canabarro e Carlos Anyel',
    robots: 'index, follow',
    openGraph: {
        title: 'Dialogando Mais - Conectando Vozes e Ideias',
        description:
            'Participe de enquetes e debates que impactam sua comunidade.',
        url: 'https://dialogandomais.com',
        siteName: 'Dialogando Mais',
        images: [
            {
                url: 'https://dialogandomais.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Imagem de capa do Dialogando Mais'
            }
        ],
        locale: 'pt_BR',
        type: 'website'
    }
    // twitter: {
    //     card: 'summary_large_image',
    //     title: 'Dialogando Mais',
    //     description: 'Participe das discussões que importam.',
    //     creator: '@seu_twitter',
    //     images: ['https://dialogandomais.com/og-image.png']
    // }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <body
                className={`${articulatCF.className} antialiased`}
                cz-shortcut-listen="true"
            >
                {children}
            </body>
        </html>
    );
}
