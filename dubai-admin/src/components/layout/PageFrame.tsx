import type { ReactNode } from 'react';

type PageFrameProps = {
    frameId: string;
    frameClassName: string;
    children: ReactNode;
};

const PageFrame = ({ frameId, frameClassName, children }: PageFrameProps) => {
    return (
        <div className="scroll-container">
            <div id={frameId} className={frameClassName}>
                {children}
            </div>
        </div>
    );
};

export default PageFrame;
