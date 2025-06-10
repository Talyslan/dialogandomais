import { IClassName } from '../type';

export function IconArrowDown({ className }: IClassName) {
    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="17.0791"
                cy="17.0791"
                r="17.0791"
                transform="matrix(1 0 0 -1 0.0742188 34.1583)"
                fill="#DB0017"
            />
            <path
                d="M11.9556 13.7375L17.1536 18.9355L22.3515 13.7375"
                stroke="#F2EAFF"
                strokeWidth="1.48514"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
