import { Link } from 'react-router';

import DappMobileChrome from '@/features/dapp/components/DappMobileChrome';
import DappNavIcon from '@/features/dapp/components/DappNavIcon';
import '@/styles/dapp-nft-page-mobile.scss';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';

const statusItems = [
    { value: 'COMING', label: 'Marketplace' },
    { value: 'GEM', label: 'Collectibles' },
];

const DappNftMobilePage = () => (
    <div className="nft-mobile">
        <DappMobileChrome activePath="/dapp/nft" />

        <main className="nft-mobile__main">
            <section className="nft-mobile__hero" aria-labelledby="nft-mobile-title">
                <article className="nft-mobile__card">
                    <span className="nft-mobile__icon">
                        <DappNavIcon name="nft" />
                    </span>
                    <span className="nft-mobile__eyebrow">NFT</span>
                    <h1 id="nft-mobile-title">暂未开放</h1>
                    <p>Marketplace and collectibles are being prepared.</p>

                    <div className="nft-mobile__status-grid" aria-label="NFT status">
                        {statusItems.map((item) => (
                            <div key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </main>

        <footer className="nft-mobile__footer">
            <Link className="nft-mobile__footer-brand" to="/">
                <img src={brandIcon} alt="GemChain logo" />
                <span>GEM</span>
            </Link>
            <p>© 2026 GemChain. All rights reserved.</p>
        </footer>
    </div>
);

export default DappNftMobilePage;
