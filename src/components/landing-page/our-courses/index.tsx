import { CourseCard } from './courseCard';
import { ICourse } from './courseCard/interface';

export function OurCourses() {
    const courses: ICourse[] = [
        {
            title: 'Inglês para trabalho',
            description: 'Desenvolva sua fluência para o mundo corporativo.'
        },
        {
            title: 'Inglês para iniciantes',
            description: 'Do básico ao avançado, com foco em conversação.'
        },
        {
            title: 'Inglês para viagens',
            description:
                'Aprenda a se comunicar e explorar o mundo sem barreiras.'
        },
        {
            title: 'Inglês para cristãos',
            description:
                'Curso especializado para você aprender inglês com propósito.'
        },
        {
            title: 'Português para estrangeiros',
            description: 'Aprenda ou aperfeiçoe o idioma de forma natural.'
        },
        {
            title: 'Inglês para empresas',
            description: 'Treinamento personalizado para capacitação de equipes'
        }
    ];

    return (
        <div className="grid items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </div>
    );
}
