import { Link } from 'react-router';

import '@/styles/dapp-mobile-chrome.scss';
import DappNavIcon, { type DappNavIconName } from '@/features/dapp/components/DappNavIcon';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';

type DappMobileChromeProps = {
    activePath: string;
};

const navItems: Array<{ label: string; to: string; icon: DappNavIconName }> = [
    { label: 'DeFi', to: '/dapp/defi', icon: 'defi' },
    { label: 'Lending', to: '/dapp/lending', icon: 'lending' },
    { label: 'Fun', to: '/dapp/fun', icon: 'fun' },
    { label: 'NFT', to: '/dapp/nft', icon: 'nft' },
    { label: 'My', to: '/dapp/my', icon: 'my' },
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
                                <DappNavIcon name={item.icon} />
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
