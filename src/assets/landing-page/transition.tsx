import { IClassName } from '../type';

export function TransitionSVG({ className }: IClassName) {
    return (
        <svg
            width="1512"
            height="50"
            viewBox="0 0 1512 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <foreignObject
                x="-2.67325"
                y="18.3268"
                width="1517.35"
                height="34.3465"
            >
                <div
                    style={{
                        backdropFilter: 'blur(1.34px)',
                        clipPath: 'url(#bgblur_0_101_56_clip_path)',
                        height: '100%',
                        width: '100%'
                    }}
                ></div>
            </foreignObject>
            <path
                data-figma-bg-blur-radius="2.67325"
                d="M1512 50V21H797.68C783.398 28.6758 777.627 44.3262 761.052 44.3262C744.538 44.326 738.459 28.6769 723.943 21H0V50H1512Z"
                fill="#DB0017"
            />
            <circle
                cx="17.0791"
                cy="17.0791"
                r="17.0791"
                transform="matrix(1 0 0 -1 745 34.1582)"
                fill="#DB0017"
            />
            <path
                d="M756.881 13.7375L762.079 18.9355L767.277 13.7375"
                stroke="#F2EAFF"
                strokeWidth="1.48514"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <clipPath
                    id="bgblur_0_101_56_clip_path"
                    transform="translate(2.67325 -18.3268)"
                >
                    <path d="M1512 50V21H797.68C783.398 28.6758 777.627 44.3262 761.052 44.3262C744.538 44.326 738.459 28.6769 723.943 21H0V50H1512Z" />
                </clipPath>
            </defs>
        </svg>
    );
}
