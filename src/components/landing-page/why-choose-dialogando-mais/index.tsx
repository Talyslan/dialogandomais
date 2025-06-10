import { IconGraphic } from '@/assets/icons/graphic';
import { IconSearch } from '@/assets/icons/search';
import { IconStatistic } from '@/assets/icons/statistic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WhyChooseDialogandoMais() {
    const cardClassesComum =
        'flex flex-col gap-5 bg-transparent gap-5 border-none shadow-none rounded-[50px] w-4/5 min-w-[250px]';
    const cardHeaderClassesComum = 'flex flex-col gap-5';
    const iconClassesComum =
        'bg-background rounded-full w-14 h-14 p-4 overflow-visible';
    const cardTitleClassesComum = 'font-semibold';

    return (
        <div className="grid md:grid-cols-2 py-10 gap-10 grid-cols-1 justify-items-center">
            <Card
                className={`${cardClassesComum} bg-main text-background -mt-12`}
            >
                <CardHeader className={cardHeaderClassesComum}>
                    <IconStatistic className={iconClassesComum} />
                    <CardTitle className={cardTitleClassesComum}>
                        Aprenda do jeito certo
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        A partir de uma abordagem humanizada e contextualizada
                        você pode falar desde a primeira aula.
                    </p>
                </CardContent>
            </Card>
            <Card className={cardClassesComum}>
                <CardHeader className={cardHeaderClassesComum}>
                    <IconGraphic className={iconClassesComum} />
                    <CardTitle className={cardTitleClassesComum}>
                        Resultados comprovados
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Nossos alunos demonstram confiança para falar em inglês
                        já nas primeiras aulas.
                    </p>
                </CardContent>
            </Card>
            <Card className={cardClassesComum}>
                <CardHeader className={cardHeaderClassesComum}>
                    <IconSearch className={iconClassesComum} />
                    <CardTitle className={cardTitleClassesComum}>
                        Flexibilidade e acessibilidade
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Estude de onde quiser, no seu ritmo, com planos
                        acessíveis e prática diária garantida.
                    </p>
                </CardContent>
            </Card>
            <Card className={cardClassesComum}>
                <CardHeader className={cardHeaderClassesComum}>
                    <IconStatistic className={iconClassesComum} />
                    <CardTitle className={cardTitleClassesComum}>
                        Metodologia inovadora
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Nosso ensino é dinâmico, interativo e focado na
                        aplicação prática do inglês.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
