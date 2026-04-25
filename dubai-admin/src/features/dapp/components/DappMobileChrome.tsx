import { Link } from 'react-router';

import '@/styles/dapp-mobile-chrome.scss';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';
import defiIcon from '@/assets/images/defi-header-defi-icon.png';
import nftIcon from '@/assets/images/defi-header-nft-icon.png';

type DappMobileChromeProps = {
    activePath: string;
};

const navItems = [
    { label: 'DeFi', to: '/dapp/defi', icon: defiIcon },
    { label: 'Lending', to: '/dapp/lending' },
    { label: 'Fun', to: '/dapp/fun' },
    { label: 'NFT', to: '/dapp/nft', icon: nftIcon },
    { label: 'My', to: '/dapp/my' },
];

const DappMobileChrome = ({ activePath }: DappMobileChromeProps) => {
    return (
        <>
            <header className="dapp-mobile-chrome__header">
                <Link className="dapp-mobile-chrome__brand" to="/">
                    <img src={brandIcon} alt="GemChain logo" />
                    <span>GEM</span>
                </Link>
                <div className="dapp-mobile-chrome__header-actions">
                    <Link className="dapp-mobile-chrome__connect" to="/register">
                        Connect
                    </Link>
                </div>
            </header>

            <nav className="dapp-mobile-chrome__tabs" aria-label="DApp navigation">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                className={
                                    item.to === activePath
                                        ? 'dapp-mobile-chrome__tab dapp-mobile-chrome__tab--active'
                                        : 'dapp-mobile-chrome__tab'
                                }
                                to={item.to}
                            >
                                {item.icon ? <img src={item.icon} alt="" aria-hidden="true" /> : null}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default DappMobileChrome;
