import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface IChooseCard {
    children: React.ReactNode;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

export function ChooseCard({ children, Icon, className }: IChooseCard) {
    return (
        <Card className={cn('flex flex-col gap-5', className)}>
            <Icon className="bg-background rounded-full w-14 h-14 p-4 overflow-visible" />
            {children}
        </Card>
    );
}
