import MobilePageShell from '@/components/mobile/MobilePageShell';

import '@/styles/lending-page-mobile.scss';

import assetLogoFive from '@/assets/images/lending-asset-logo-five.png';
import assetLogoOne from '@/assets/images/lending-asset-logo-one.png';
import assetLogoThree from '@/assets/images/lending-asset-logo-three.png';
import assetLogoTwo from '@/assets/images/lending-asset-logo-two.png';
import badgeCoin from '@/assets/images/lending-overview-badge-coin.png';
import overviewCoin from '@/assets/images/lending-overview-brand-coin.png';

const metrics = [
    { label: 'Total Market Size', value: '$33.56B' },
    { label: 'Total Available', value: '$19.11B' },
    { label: 'Total Borrows', value: '$13.45B' },
    { label: 'Core Instance', value: 'V3' },
];

const assets = [
    {
        name: 'Ethereum',
        symbol: 'ETH',
        supplied: '2.93M / $6.41B',
        supplyApy: '1.81%',
        borrowed: '2.66M / $5.83B',
        borrowApy: '2.35%',
        icon: assetLogoOne,
    },
    {
        name: 'Wrapped BTC',
        symbol: 'WBTC',
        supplied: '688.4K / $4.92B',
        supplyApy: '1.27%',
        borrowed: '418.2K / $2.98B',
        borrowApy: '2.08%',
        icon: assetLogoTwo,
    },
    {
        name: 'USD Coin',
        symbol: 'USDC',
        supplied: '9.82B / $9.82B',
        supplyApy: '3.41%',
        borrowed: '5.60B / $5.60B',
        borrowApy: '5.12%',
        icon: assetLogoThree,
    },
    {
        name: 'Tether',
        symbol: 'USDT',
        supplied: '8.64B / $8.64B',
        supplyApy: '3.02%',
        borrowed: '4.93B / $4.93B',
        borrowApy: '4.78%',
        icon: assetLogoFive,
    },
];

const LendingMobilePage = () => {
    return (
        <MobilePageShell
            activePath="/lending"
            eyebrow="Lending"
            title="Core Assets"
            description="The mobile lending view centers the Ethereum market summary, key yields, and a more scannable asset list."
            headerAction={{ label: 'DeFi', to: '/defi' }}
            primaryAction={{ label: 'View details', to: '/defi' }}
            secondaryAction={{ label: 'Open register', to: '/register' }}
            metrics={metrics}
            heroMedia={
                <div className="lending-mobile__hero-visual">
                    <img
                        className="lending-mobile__hero-coin"
                        src={overviewCoin}
                        alt="Lending overview coin"
                    />
                    <img
                        className="lending-mobile__hero-badge"
                        src={badgeCoin}
                        alt="Overview badge coin"
                    />
                </div>
            }
        >
            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Overview</p>
                    <h2>Save with sGHO</h2>
                    <p className="mobile-shell__section-copy">
                        GHO yield with instant withdraws, adapted into a summary card that reads
                        well on mobile.
                    </p>
                </div>
                <article className="mobile-shell__panel">
                    <div className="mobile-shell__list-topline">
                        <strong>Total deposited</strong>
                        <span className="mobile-shell__status-pill">Live</span>
                    </div>
                    <strong className="lending-mobile__big-number">$295.17M</strong>
                    <div className="mobile-shell__info-row lending-mobile__apy-row">
                        <div className="mobile-shell__table-cell">
                            <strong>4.82%</strong>
                            <span>APY</span>
                        </div>
                        <button
                            className="mobile-shell__button mobile-shell__button--primary"
                            type="button"
                        >
                            View details
                        </button>
                    </div>
                </article>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Filters</p>
                    <h2>Find an asset fast</h2>
                </div>
                <div className="mobile-shell__section-grid mobile-shell__section-grid--two">
                    <div className="mobile-shell__field">
                        <span className="mobile-shell__field-label">Category</span>
                        <strong className="mobile-shell__field-value">All Categories</strong>
                    </div>
                    <div className="mobile-shell__field">
                        <span className="mobile-shell__field-label">Search</span>
                        <strong className="mobile-shell__field-value">
                            Asset name, symbol, or address
                        </strong>
                    </div>
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Assets</p>
                    <h2>Core asset list</h2>
                    <p className="mobile-shell__section-copy">
                        Rebuilt as individual cards so the table stays readable on smaller screens.
                    </p>
                </div>
                <div className="mobile-shell__list">
                    {assets.map((asset) => (
                        <article key={asset.symbol} className="mobile-shell__list-item">
                            <div className="mobile-shell__list-topline">
                                <div className="lending-mobile__asset-heading">
                                    <span className="mobile-shell__icon-badge">
                                        <img src={asset.icon} alt={`${asset.name} logo`} />
                                    </span>
                                    <div className="mobile-shell__table-cell">
                                        <strong>{asset.name}</strong>
                                        <span>{asset.symbol}</span>
                                    </div>
                                </div>
                                <button className="mobile-shell__surface-button" type="button">
                                    Details
                                </button>
                            </div>
                            <div className="mobile-shell__section-grid mobile-shell__section-grid--two">
                                <div className="mobile-shell__detail-card">
                                    <strong>{asset.supplied}</strong>
                                    <span>Total supplied</span>
                                </div>
                                <div className="mobile-shell__detail-card">
                                    <strong>{asset.supplyApy}</strong>
                                    <span>Supply APY</span>
                                </div>
                                <div className="mobile-shell__detail-card">
                                    <strong>{asset.borrowed}</strong>
                                    <span>Total borrowed</span>
                                </div>
                                <div className="mobile-shell__detail-card">
                                    <strong>{asset.borrowApy}</strong>
                                    <span>Borrow APY</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </MobilePageShell>
    );
};

export default LendingMobilePage;
