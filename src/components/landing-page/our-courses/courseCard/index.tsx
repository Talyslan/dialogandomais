import { IconHomeNet, IconCheck } from '@/assets/icons';
import { ICourse } from './interface';

export function CourseCard({ title, description }: ICourse) {
    return (
        <div className="border border-[#E6E6E6] rounded-4xl flex flex-col">
            <div className="py-8 px-6 flex items-center gap-3">
                <IconHomeNet className="overflow-visible border border-[#E6E6E6] rounded-xl p-4 w-14 h-14" />
                <h3 className="text-sm font-semibold">{title}</h3>
            </div>
            <div className="px-14 py-12 flex items-center gap-3 border-t border-[#E6E6E6]">
                <IconCheck className="overflow-visible border border-[#E6E6E6] rounded-full p-2 w-8 h-8" />
                <p className="text-[#7E7E7E]">{description}</p>
            </div>
        </div>
    );
}
