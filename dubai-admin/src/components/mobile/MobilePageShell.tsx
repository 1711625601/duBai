import type { ReactNode } from 'react';
import { Link } from 'react-router';

import '@/styles/mobile-page-shell.scss';

import brandIcon from '@/assets/images/home-header-brand-icon.png';

type MobilePageAction = {
    label: string;
    to: string;
    variant?: 'primary' | 'ghost';
};

type MobilePageMetric = {
    label: string;
    value: string;
};

type MobilePageShellProps = {
    activePath: string;
    eyebrow: string;
    title: string;
    description?: string;
    headerAction?: MobilePageAction;
    primaryAction?: MobilePageAction;
    secondaryAction?: MobilePageAction;
    metrics?: MobilePageMetric[];
    heroMedia?: ReactNode;
    children: ReactNode;
};

const navItems = [
    { label: 'DeFi', to: '/dapp/defi' },
    { label: 'Lending', to: '/dapp/lending' },
    { label: 'Fun', to: '/dapp/fun' },
    { label: 'NFT', to: '/dapp/nft' },
    { label: 'My', to: '/dapp/my' },
];

const MobilePageShell = ({
    activePath,
    eyebrow,
    title,
    description,
    headerAction,
    primaryAction,
    secondaryAction,
    metrics,
    heroMedia,
    children,
}: MobilePageShellProps) => {
    return (
        <div className="mobile-shell">
            <header className="mobile-shell__header">
                <Link className="mobile-shell__brand" to="/">
                    <img src={brandIcon} alt="GemChain logo" />
                    <span>GEM</span>
                </Link>
                {headerAction ? (
                    <Link className="mobile-shell__header-action" to={headerAction.to}>
                        {headerAction.label}
                    </Link>
                ) : null}
            </header>

            <main className="mobile-shell__content">
                <section className="mobile-shell__hero">
                    <div className="mobile-shell__hero-copy">
                        <p className="mobile-shell__eyebrow">{eyebrow}</p>
                        <h1>{title}</h1>
                        {description ? <p className="mobile-shell__lead">{description}</p> : null}
                    </div>

                    {heroMedia ? <div className="mobile-shell__hero-media">{heroMedia}</div> : null}

                    {primaryAction || secondaryAction ? (
                        <div className="mobile-shell__hero-actions">
                            {primaryAction ? (
                                <Link
                                    className="mobile-shell__button mobile-shell__button--primary"
                                    to={primaryAction.to}
                                >
                                    {primaryAction.label}
                                </Link>
                            ) : null}
                            {secondaryAction ? (
                                <Link
                                    className="mobile-shell__button mobile-shell__button--ghost"
                                    to={secondaryAction.to}
                                >
                                    {secondaryAction.label}
                                </Link>
                            ) : null}
                        </div>
                    ) : null}

                    {metrics?.length ? (
                        <div className="mobile-shell__metrics">
                            {metrics.map((metric) => (
                                <article key={metric.label} className="mobile-shell__metric-card">
                                    <span>{metric.label}</span>
                                    <strong>{metric.value}</strong>
                                </article>
                            ))}
                        </div>
                    ) : null}
                </section>

                <nav className="mobile-shell__nav" aria-label="Mobile page navigation">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            className={
                                item.to === activePath
                                    ? 'mobile-shell__nav-link mobile-shell__nav-link--active'
                                    : 'mobile-shell__nav-link'
                            }
                            to={item.to}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {children}
            </main>
        </div>
    );
};

export default MobilePageShell;
