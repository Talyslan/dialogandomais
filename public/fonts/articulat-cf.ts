import localFont from 'next/font/local';

export const articulatCF = localFont({
    src: [
        {
            path: './Articulat-CF-normal.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './Articulat-CF-medium.otf',
            weight: '500',
            style: 'medium'
        },
        {
            path: './Articulat-CF-demi-bold.otf',
            weight: '600',
            style: 'demibold'
        },
        {
            path: './Articulat-CF-bold.otf',
            weight: '700',
            style: 'bold'
        }
    ],
    variable: '--font-articulatCF',
    display: 'swap'
});
