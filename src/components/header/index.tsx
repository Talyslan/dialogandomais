'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DialogHeader } from '../ui/dialog';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { formPath } from '@/utils/path-form';
import { LogoIcon } from '@/assets/logo';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Nossos cursos', href: '#nossos-cursos' },
    { label: 'Sobre nós', href: '#sobre-nos' }
];

export function Header() {
    const headerClassesComum =
        'z-9999 fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-4rem)] max-w-[1400px] px-6 py-3 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sd justify-between items-center animate-in slide-in-from-top-100 fade-in duration-1000 delay-500';
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || '#inicio');
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <>
            <header className={cn('md:flex hidden', headerClassesComum)}>
                <nav className="flex gap-6 items-center">
                    {links.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setActiveHash(href)}
                            className={`transition-colors inline-block min-w-[110px] text-center hover:font-bold ${
                                activeHash === href
                                    ? 'font-bold'
                                    : 'text-foreground'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <Link
                    href={formPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-main text-background px-6 py-2 rounded-full hover:brightness-110 transition"
                >
                    Inscreva-se!
                </Link>
            </header>

            <Sheet>
                <div className={cn('flex md:hidden', headerClassesComum)}>
                    <Link href={'/'}>
                        <LogoIcon className="max-w-[32px] max-h-[32px]" />
                    </Link>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                </div>
                <SheetContent>
                    <SheetHeader className="flex flex-col justify-center items-center h-full">
                        <SheetTitle className="text-center">
                            Dialogando mais
                        </SheetTitle>
                        <SheetDescription asChild>
                            <div className="w-full">
                                <nav className="flex flex-col items-center">
                                    {links.map(({ label, href }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            onClick={() => setActiveHash(href)}
                                            className={`transition-colors inline-block min-w-[110px] text-center hover:font-bold border-b last:border-0 w-full p-6 ${
                                                activeHash === href
                                                    ? 'font-bold'
                                                    : 'text-foreground'
                                            }`}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter className="text-foreground border-t-1 w-full text-center pt-4 font-medium text-sm">
                        <p>
                            Copyright © 2025 Dialogando Mais. <br />
                            Todos os Direitos Reservados.
                        </p>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
}
