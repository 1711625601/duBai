import { type SVGProps } from 'react';
import { Link } from 'react-router';

import DappMobileChrome from '@/features/dapp/components/DappMobileChrome';
import '@/styles/lending-page-mobile.scss';

import assetLogoEight from '@/assets/images/lending-asset-logo-eight.png';
import assetLogoFive from '@/assets/images/lending-asset-logo-five.png';
import assetLogoFour from '@/assets/images/lending-asset-logo-four.png';
import assetLogoNine from '@/assets/images/lending-asset-logo-nine.png';
import assetLogoOne from '@/assets/images/lending-asset-logo-one.png';
import assetLogoSeven from '@/assets/images/lending-asset-logo-seven.png';
import assetLogoSix from '@/assets/images/lending-asset-logo-six.png';
import assetLogoTen from '@/assets/images/lending-asset-logo-ten.png';
import assetLogoThree from '@/assets/images/lending-asset-logo-three.png';
import assetLogoTwo from '@/assets/images/lending-asset-logo-two.png';
import brandIcon from '@/assets/images/defi-header-brand-icon.png';
import sghoIcon from '@/assets/images/lending-overview-badge-coin.png';
import ethIcon from '@/assets/images/lending-overview-eth-icon.png';

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

const ChevronDownIcon = ({ size = 14, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const StarIcon = ({ size = 11, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="m12 3 2.7 5.48 6.05.88-4.38 4.27 1.03 6.02L12 16.81l-5.4 2.84 1.03-6.02-4.38-4.27 6.05-.88L12 3Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
        />
    </svg>
);

const SearchIcon = ({ size = 13, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
        />
    </svg>
);

const ArrowUpDownIcon = ({ size = 9, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="m8 4-4 4m4-4 4 4M8 4v16m8 0 4-4m-4 4-4-4m4 4V4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const InfoIcon = ({ size = 9, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
            d="M12 17v-6m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const summary = [
    { label: 'Total market size', value: '$33.56B' },
    { label: 'Total available', value: '$19.11B' },
    { label: 'Total borrows', value: '$13.45B' },
];

const assetIcons = [
    assetLogoOne,
    assetLogoTwo,
    assetLogoThree,
    assetLogoFour,
    assetLogoFive,
    assetLogoSix,
    assetLogoSeven,
    assetLogoEight,
    assetLogoNine,
    assetLogoTen,
];

const assets = assetIcons.map((icon, index) => ({
    name: 'Ethereum',
    symbol: 'ETH',
    supplied: '2.93M',
    suppliedUsd: '$ 6.41B',
    supplyApy: '1.81',
    borrowed: '2.66M',
    borrowedUsd: '$ 5.83B',
    borrowApy: '2.35',
    icon,
    id: `eth-${index + 1}`,
}));

const LendingMobilePage = () => (
    <div className="lending-mobile">
        <DappMobileChrome activePath="/dapp/lending" />

        <main className="lending-mobile__main">
            <section className="lending-mobile__instance">
                <div className="lending-mobile__instance-content">
                    <div className="lending-mobile__instance-top">
                        <div className="lending-mobile__instance-title-row">
                            <span className="lending-mobile__eth-badge">
                                <img src={ethIcon} alt="" aria-hidden="true" />
                            </span>
                            <div className="lending-mobile__instance-title">
                                <h1>Core Instance</h1>
                                <span>V3</span>
                                <ChevronDownIcon />
                            </div>
                        </div>

                        <button className="lending-mobile__favorite" type="button">
                            <StarIcon />
                            Favourite
                        </button>
                    </div>

                    <p className="lending-mobile__instance-copy">
                        Main Ethereum market with the largest selection of assets and yield options
                    </p>

                    <div className="lending-mobile__summary-grid">
                        {summary.map((item) => (
                            <article key={item.label}>
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lending-mobile__assets">
                <h2>CORE ASSETS</h2>

                <div className="lending-mobile__filters">
                    <button className="lending-mobile__filter-button" type="button">
                        All Categories
                        <ChevronDownIcon />
                    </button>
                    <label className="lending-mobile__search">
                        <SearchIcon />
                        <input placeholder="Search asset name, symbol, or address" />
                    </label>
                </div>

                <article className="lending-mobile__sgho-card">
                    <div className="lending-mobile__sgho-head">
                        <span className="lending-mobile__sgho-icon">
                            <img src={sghoIcon} alt="" aria-hidden="true" />
                        </span>
                        <div>
                            <strong>Save with sGHO</strong>
                            <span>GHO yield with instant withdraws.</span>
                        </div>
                    </div>

                    <div className="lending-mobile__sgho-stats">
                        <div>
                            <strong>$295.17M</strong>
                            <span>Total deposited</span>
                        </div>
                        <div>
                            <strong>
                                4.82<span>%</span>
                            </strong>
                            <span>APY</span>
                        </div>
                        <button type="button">View details</button>
                    </div>
                </article>

                <div className="lending-mobile__asset-head">
                    <span>
                        Asset <ArrowUpDownIcon />
                    </span>
                    <span>
                        Supplied / APY <ArrowUpDownIcon />
                    </span>
                    <span>
                        Borrow APY <InfoIcon />
                    </span>
                </div>

                <ul className="lending-mobile__asset-list">
                    {assets.map((asset) => (
                        <li key={asset.id} className="lending-mobile__asset-row">
                            <div className="lending-mobile__asset-name">
                                <span>
                                    <img src={asset.icon} alt="" aria-hidden="true" />
                                </span>
                                <div>
                                    <strong>{asset.name}</strong>
                                    <em>{asset.symbol}</em>
                                </div>
                            </div>

                            <div className="lending-mobile__asset-supplied">
                                <strong>{asset.supplied}</strong>
                                <span>{asset.suppliedUsd}</span>
                                <em>{asset.supplyApy}%</em>
                            </div>

                            <div className="lending-mobile__asset-borrow">
                                <strong>
                                    {asset.borrowApy}
                                    <span>%</span>
                                </strong>
                                <button type="button">Details</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>

        <footer className="lending-mobile__footer">
            <Link className="lending-mobile__footer-brand" to="/">
                <img src={brandIcon} alt="GemChain logo" />
                <span>GEM</span>
            </Link>
            <p>© 2026 GemChain. All rights reserved.</p>
        </footer>
    </div>
);

export default LendingMobilePage;
