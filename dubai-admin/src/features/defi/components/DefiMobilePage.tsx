import MobilePageShell from '@/components/mobile/MobilePageShell';

import '@/styles/defi-page-mobile.scss';

import bnbIcon from '@/assets/images/defi-bnb-token-icon.png';
import ethIcon from '@/assets/images/defi-cta-token-eth-icon.png';
import partnerAmber from '@/assets/images/defi-partner-logo-amber.png';
import partnerOne from '@/assets/images/defi-partner-logo-one.png';
import partnerOptimism from '@/assets/images/defi-partner-logo-optimism.png';
import partnerSelini from '@/assets/images/defi-partner-logo-selini.png';
import heroCoin from '@/assets/images/shared-gem-coin.png';

const metrics = [
    { label: '24H Swap Volume', value: '$1.4B' },
    { label: 'All Time Volume', value: '$4.0T' },
    { label: 'Total Value Locked', value: '$2.6B' },
    { label: 'All Time Swappers', value: '119.0M' },
];

const protocolHighlights = [
    'No-fee trading routes for fast onboarding.',
    'Proven security and deep cross-chain liquidity.',
    'One platform for swaps, discovery, and protocol stats.',
];

const partnerLogos = [
    { src: partnerOptimism, alt: 'Optimism logo', label: 'Optimism' },
    { src: partnerOne, alt: 'Partner logo one', label: 'Koiun' },
    { src: partnerSelini, alt: 'Selini logo', label: 'Selini' },
    { src: partnerAmber, alt: 'Amber logo', label: 'Amber' },
];

const swapCards = [
    { label: 'From', asset: 'ETH', chain: 'BNB Chain', amount: '0.00', usd: '~ 0 USD' },
    { label: 'To', asset: 'BNBY', chain: 'BNB Chain', amount: '0.00', usd: '~ 0 USD' },
];

const DefiMobilePage = () => {
    return (
        <MobilePageShell
            activePath="/defi"
            eyebrow="DeFi"
            title={"Everyone's Favorite DEX"}
            description="Trade crypto instantly across 10 chains with a faster mobile-first flow for swaps, routing, and protocol visibility."
            headerAction={{ label: 'Profile', to: '/profile' }}
            primaryAction={{ label: 'Connect wallet', to: '/register' }}
            secondaryAction={{ label: 'Explore Fun', to: '/fun' }}
            metrics={metrics}
            heroMedia={
                <div className="defi-mobile__hero-visual">
                    <img className="defi-mobile__hero-coin" src={heroCoin} alt="GemChain coin" />
                    <div className="mobile-shell__token-stack">
                        <span className="mobile-shell__token-badge">
                            <img src={ethIcon} alt="ETH token" />
                        </span>
                        <span className="mobile-shell__token-badge">
                            <img src={bnbIcon} alt="BNB token" />
                        </span>
                    </div>
                </div>
            }
        >
            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Swap Flow</p>
                    <h2>Trade crypto instantly</h2>
                    <p className="mobile-shell__section-copy">
                        A simplified mobile swap module based on the desktop quote card.
                    </p>
                </div>
                <div className="mobile-shell__inline-group">
                    {swapCards.map((card) => (
                        <article key={card.label} className="mobile-shell__panel">
                            <span className="mobile-shell__field-label">{card.label}</span>
                            <strong className="mobile-shell__card-title">{card.asset}</strong>
                            <p className="mobile-shell__card-copy">{card.chain}</p>
                            <div className="mobile-shell__info-row defi-mobile__swap-meta">
                                <div className="mobile-shell__table-cell">
                                    <strong>{card.amount}</strong>
                                    <span>{card.usd}</span>
                                </div>
                                <button className="mobile-shell__surface-button" type="button">
                                    Select
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                <button
                    className="mobile-shell__button mobile-shell__button--primary"
                    type="button"
                >
                    Get Started
                </button>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Protocol</p>
                    <h2>Powering trillions</h2>
                    <p className="mobile-shell__section-copy">
                        The mobile summary keeps the key claims from the protocol section visible at
                        a glance.
                    </p>
                </div>
                <div className="mobile-shell__list">
                    {protocolHighlights.map((item) => (
                        <article key={item} className="mobile-shell__list-item">
                            <div className="mobile-shell__list-topline">
                                <strong>{item}</strong>
                                <span className="mobile-shell__status-pill">Live</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Partners</p>
                    <h2>Trusted ecosystem network</h2>
                </div>
                <div className="defi-mobile__partner-grid">
                    {partnerLogos.map((partner) => (
                        <article key={partner.label} className="mobile-shell__detail-card">
                            <span className="mobile-shell__icon-badge">
                                <img src={partner.src} alt={partner.alt} />
                            </span>
                            <strong>{partner.label}</strong>
                        </article>
                    ))}
                </div>
            </section>
        </MobilePageShell>
    );
};

export default DefiMobilePage;
