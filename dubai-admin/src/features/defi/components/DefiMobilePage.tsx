import type { SVGProps } from 'react';
import { Link } from 'react-router';

import DappMobileChrome from '@/features/dapp/components/DappMobileChrome';
import '@/styles/defi-page-mobile.scss';

import bnbTokenIcon from '@/assets/images/defi-bnb-token-icon.png';
import brandIcon from '@/assets/images/defi-header-brand-icon.png';
import ctaEthIcon from '@/assets/images/defi-cta-token-eth-icon.png';
import primaryCubeIcon from '@/assets/images/defi-primary-action-cube-icon.png';
import secondaryCubeIcon from '@/assets/images/defi-secondary-action-cube-icon.png';
import ethTokenIcon from '@/assets/images/defi-swap-token-eth-icon.png';
import arrowMarkIcon from '@/assets/images/shared-chain-logo-arrow-mark.png';
import cornerMarkIcon from '@/assets/images/shared-chain-logo-corner-mark.png';
import gradientBarsIcon from '@/assets/images/shared-chain-logo-gradient-bars.png';
import outlineLoopIcon from '@/assets/images/shared-chain-logo-outline-loop.png';
import stripedOrbIcon from '@/assets/images/shared-chain-logo-striped-orb.png';

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

const ArrowDownIcon = ({ size = 14, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="M12 5v14m0 0 6-6m-6 6-6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const ArrowRightIcon = ({ size = 16, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="M5 12h14m0 0-6-6m6 6-6 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const chainIcons = [
    { label: 'ETH', background: 'rgba(62, 91, 242, 1)', icon: ctaEthIcon, mark: 'eth' },
    { label: 'BNB', background: 'rgba(240, 185, 11, 1)', icon: primaryCubeIcon, mark: 'cube' },
    { label: 'Arrow', background: 'rgba(54, 103, 247, 1)', icon: arrowMarkIcon, mark: 'arrow' },
    { label: 'Corner', background: 'rgba(131, 220, 252, 1)', icon: cornerMarkIcon, mark: 'corner' },
    { label: 'Square', background: 'rgba(0, 82, 255, 1)', mark: 'square' },
    { label: 'Orb', background: 'rgba(106, 213, 170, 1)', icon: stripedOrbIcon, mark: 'orb' },
    { label: 'Bars', backgroundImage: gradientBarsIcon, mark: 'bars' },
    { label: 'BNB secondary', background: 'rgba(240, 185, 11, 1)', icon: secondaryCubeIcon, mark: 'cube' },
    { label: 'Loop', background: 'rgba(34, 13, 86, 1)', icon: outlineLoopIcon, mark: 'loop' },
];

const partners = ['OPTIMISM', 'KUCOIN', 'Selini', 'AMBER'];

const stats = [
    { value: '$4.0T', label: 'All Time Volume' },
    { value: '$2.6B', label: 'Total Value Locked' },
    { value: '119.0M', label: 'All Time Swappers' },
    { value: '$1.4B', label: '24H Swap Volume', accent: true },
];

const DefiMobilePage = () => {
    return (
        <div className="defi-mobile">
            <DappMobileChrome activePath="/dapp/defi" />

            <main className="defi-mobile__main">
                <section className="defi-mobile__hero">
                    <div className="defi-mobile__hero-content">
                        <h1>
                            <span>EVERYONE'S</span>
                            <span>FAVORITE DEX</span>
                        </h1>
                        <p>TRADE CRYPTO INSTANTLY ACROSS 10 CHAINS</p>

                        <div className="defi-mobile__chain-icons" aria-label="Supported chains">
                            {chainIcons.map((chain) => (
                                <span
                                    key={chain.label}
                                    className={`defi-mobile__chain-icon defi-mobile__chain-icon--${chain.mark}`}
                                    style={{
                                        backgroundColor: chain.background,
                                        backgroundImage: chain.backgroundImage
                                            ? `url(${chain.backgroundImage})`
                                            : undefined,
                                    }}
                                >
                                    {chain.icon ? <img src={chain.icon} alt="" aria-hidden="true" /> : null}
                                </span>
                            ))}
                        </div>

                        <div className="defi-mobile__swap-card">
                            <span className="defi-mobile__swap-label">FROM</span>
                            <div className="defi-mobile__token-panel defi-mobile__token-panel--from">
                                <div className="defi-mobile__token-info">
                                    <span className="defi-mobile__token-icon defi-mobile__token-icon--eth">
                                        <img src={ethTokenIcon} alt="" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <strong>
                                            ETH <ArrowDownIcon size={12} />
                                        </strong>
                                        <span>BNB Chain</span>
                                    </div>
                                </div>
                                <div className="defi-mobile__token-amount">
                                    <strong>0.00</strong>
                                    <span>~ 0 USD</span>
                                </div>
                            </div>

                            <div className="defi-mobile__swap-action">
                                <button type="button" aria-label="Swap tokens">
                                    <ArrowDownIcon />
                                </button>
                            </div>

                            <span className="defi-mobile__swap-label">TO</span>
                            <div className="defi-mobile__token-panel">
                                <div className="defi-mobile__token-info">
                                    <span className="defi-mobile__token-icon defi-mobile__token-icon--bnb">
                                        <img src={bnbTokenIcon} alt="" aria-hidden="true" />
                                    </span>
                                    <div>
                                        <strong>
                                            BNB <ArrowDownIcon size={12} />
                                        </strong>
                                        <span>BNB Chain</span>
                                    </div>
                                </div>
                                <div className="defi-mobile__token-amount">
                                    <strong>0.00</strong>
                                    <span>~ 0 USD</span>
                                </div>
                            </div>
                        </div>

                        <Link className="defi-mobile__primary-action" to="/register">
                            Get Started
                        </Link>
                    </div>
                </section>

                <section className="defi-mobile__partners">
                    <p>PARTNERS</p>
                    <div className="defi-mobile__partner-grid">
                        {partners.map((partner) => (
                            <span key={partner}>{partner}</span>
                        ))}
                    </div>
                </section>

                <section className="defi-mobile__protocol">
                    <div className="defi-mobile__protocol-content">
                        <h2>
                            DEFI'S LEADING
                            <br />
                            PROTOCOL
                        </h2>
                        <h3>POWERING TRILLIONS</h3>

                        <p className="defi-mobile__stats-label">Uniswap Protocol Stats</p>
                        <div className="defi-mobile__stats-grid">
                            {stats.map((stat) => (
                                <article
                                    key={stat.label}
                                    className={
                                        stat.accent
                                            ? 'defi-mobile__stat-card defi-mobile__stat-card--accent'
                                            : 'defi-mobile__stat-card'
                                    }
                                >
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </article>
                            ))}
                        </div>

                        <p className="defi-mobile__protocol-copy defi-mobile__protocol-copy--strong">
                            UNISWAP LABS DELIVERS EVERY PIECE OF THE ONCHAIN ECONOMY IN ONE
                            PLATFORM
                        </p>
                        <p className="defi-mobile__protocol-copy">
                            GET NO-FEES TRADING, PROVEN SECURITY, AND DEEP LIQUIDITY, ALL BACKED BY
                            CRYPTO'S MOST TRUSTED DEX
                        </p>

                        <Link className="defi-mobile__secondary-action" to="/register">
                            Trade without fees
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </section>

                <section className="defi-mobile__notice">
                    <button type="button">IMPORTANT NOTICE &amp; TERMS OF SERVICE</button>
                </section>
            </main>

            <footer className="defi-mobile__footer">
                <div>
                    <Link className="defi-mobile__footer-brand" to="/">
                        <img src={brandIcon} alt="GemChain logo" />
                        <span>GEM</span>
                    </Link>
                </div>
                <p>© 2026 GemChain. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DefiMobilePage;
