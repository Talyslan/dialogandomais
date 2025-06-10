import { IClassName } from '../type';

export function IconGraphic({ className }: IClassName) {
    return (
        <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16.3333 4L10.5 0L4.66667 7L0 4V17H21V4H16.3333ZM18.6667 13.95L10.5 8.5L5.83333 14L2.33333 11.6V8L5.18 9.83L10.9667 2.88L15.5167 6H18.6667V13.95Z"
                fill="#DB0017"
            />
        </svg>
    );
}
