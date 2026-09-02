import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18.5" fill="currentColor" />
            <path
                d="M10.5 26.5c4.4-1.1 6.6-5.4 8.3-9.2 1.7-3.9 4-6.8 10.7-7.8M19 17.2c3.1.2 6.1 2.4 8.6 6.7"
                fill="none"
                stroke="#f7f3ea"
                strokeLinecap="round"
                strokeWidth="2"
            />
            <circle cx="10.5" cy="26.5" r="2" fill="#c7795d" />
            <circle cx="29.5" cy="9.5" r="2" fill="#b7cbbf" />
            <circle cx="27.6" cy="23.9" r="2" fill="#f7f3ea" />
        </svg>
    );
}
