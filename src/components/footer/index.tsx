import { LogoIcon } from '@/assets/logo/logo-icon';
import Link from 'next/link';

const footerLinks = [
    {
        title: 'Produção',
        associated: [
            {
                name: 'Web Design',
                path: 'https://www.instagram.com/layupp.studio/',
                target: '_blank'
            },
            {
                name: 'Dialogando Mais',
                path: 'https://www.instagram.com/dialogandomais/',
                target: '_blank'
            }
        ]
    },
    {
        title: 'Links Rápidos',
        associated: [
            {
                name: 'Início',
                path: '#inicio',
                target: '_self'
            },
            {
                name: 'Nossos Cursos',
                path: '#nossos-cursos',
                target: '_self'
            },
            {
                name: 'Sobre Nós',
                path: '#sobre-nos',
                target: '_self'
            }
        ]
    },
    {
        title: 'Contato',
        associated: [
            {
                name: '(82) 98721-6750',
                path: 'https://wa.me/82987216750?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20dialogando%20mais.',
                target: '_blank'
            }
        ]
    }
];

export function Footer() {
    return (
        <footer className="w-full px-6 md:px-20 pb-4 pt-16 bg-[#F6F6F6] flex flex-col gap-12 items-center">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-10">
                <div className="flex flex-col gap-5 text-center md:text-left">
                    <LogoIcon className="mx-auto md:mx-0" />
                    {/* <p className="text-sm text-muted-foreground !max-w-[25ch]">
                        Some customers indicate that consumer responses to
                        marketing have become less predictable.
                    </p> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center w-2/4 md:text-left">
                    {footerLinks.map((link, i) => (
                        <div key={i} className="flex flex-col gap-3">
                            <h3 className="font-bold">{link.title}</h3>
                            <ul className="space-y-2">
                                {link.associated.map((item, j) => (
                                    <li key={j}>
                                        <Link
                                            href={item.path}
                                            target={item.target}
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:underline"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <span className="text-foreground border-t-1 w-full text-center pt-4 font-medium text-sm">
                Copyright © 2025 Dialogando Mais. Todos os Direitos Reservados.
            </span>
        </footer>
    );
}
