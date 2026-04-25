import type { SVGProps } from 'react';

export type DappNavIconName = 'defi' | 'lending' | 'fun' | 'nft' | 'my';

type DappNavIconProps = SVGProps<SVGSVGElement> & {
    name: DappNavIconName;
};

const iconPaths = {
    defi: (
        <>
            <path d="M12 3 5 7v10l7 4 7-4V7l-7-4Z" />
            <path d="M12 3v18M5 7l7 4 7-4" />
        </>
    ),
    lending: (
        <>
            <path d="M5 8.5 12 4l7 4.5-7 4.5L5 8.5Z" />
            <path d="M5 13.5 12 18l7-4.5M5 8.5v5M19 8.5v5" />
        </>
    ),
    fun: (
        <>
            <path d="m12 3 1.35 4.15L17.5 8.5l-4.15 1.35L12 14l-1.35-4.15L6.5 8.5l4.15-1.35L12 3Z" />
            <path d="m5 15 .75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15ZM19 13l.85 2.15L22 16l-2.15.85L19 19l-.85-2.15L16 16l2.15-.85L19 13Z" />
        </>
    ),
    nft: (
        <>
            <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
            <path d="M9 15V9l6 6V9" />
        </>
    ),
    my: (
        <>
            <path d="M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
        </>
    ),
} satisfies Record<DappNavIconName, JSX.Element>;

const DappNavIcon = ({ name, ...props }: DappNavIconProps) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
            {iconPaths[name]}
        </g>
    </svg>
);

export default DappNavIcon;
