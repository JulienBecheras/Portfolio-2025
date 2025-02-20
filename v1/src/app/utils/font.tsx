import {Montserrat_Alternates} from 'next/font/google'

export const montserrat_init = Montserrat_Alternates({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
    weight: '800'
});

export const montserrat = montserrat_init.variable;