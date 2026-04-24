import type { CSSProperties, ReactNode } from 'react';

import './page-frame.css';

import { useViewportWidth } from './useViewportWidth';

type PageFrameProps = {
    frameId: string;
    frameClassName: string;
    designHeight: number;
    designWidth?: number;
    mobileBreakpoint?: number;
    mobileFallback?: ReactNode;
    children: ReactNode;
};

const PageFrame = ({
    frameId,
    frameClassName,
    designHeight,
    designWidth = 1920,
    mobileBreakpoint = 768,
    mobileFallback,
    children,
}: PageFrameProps) => {
    const viewportWidth = useViewportWidth();
    const isMobileViewport = viewportWidth < mobileBreakpoint;
    const shouldScaleCanvas = viewportWidth < designWidth && !isMobileViewport;
    const scale = shouldScaleCanvas ? viewportWidth / designWidth : 1;
    const stageWidth = designWidth * scale;
    const stageHeight = designHeight * scale;

    if (mobileFallback && isMobileViewport) {
        return <div className="page-frame-shell page-frame-shell--mobile">{mobileFallback}</div>;
    }

    const viewportStyle = {
        minWidth: `${stageWidth}px`,
    } satisfies CSSProperties;

    const stageStyle = {
        width: `${stageWidth}px`,
        height: `${stageHeight}px`,
    } satisfies CSSProperties;

    const canvasStyle = {
        width: `${designWidth}px`,
        transform: `scale(${scale})`,
    } satisfies CSSProperties;

    return (
        <div className="page-frame-shell">
            <div className="scroll-container page-frame-shell__scroll">
                <div className="page-frame-shell__viewport" style={viewportStyle}>
                    <div className="page-frame-shell__stage" style={stageStyle}>
                        <div
                            id={frameId}
                            className={`${frameClassName} page-frame-shell__canvas`}
                            style={canvasStyle}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageFrame;
