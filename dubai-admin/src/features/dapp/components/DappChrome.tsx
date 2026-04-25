import { NavLink } from 'react-router';

import DappNavIcon, { type DappNavIconName } from '@/features/dapp/components/DappNavIcon';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';

const navItems: Array<{ label: string; to: string; icon: DappNavIconName }> = [
    { label: 'DeFi', to: '/dapp/defi', icon: 'defi' },
    { label: 'Lending', to: '/dapp/lending', icon: 'lending' },
    { label: 'Fun', to: '/dapp/fun', icon: 'fun' },
    { label: 'NFT', to: '/dapp/nft', icon: 'nft' },
    { label: 'My', to: '/dapp/my', icon: 'my' },
];

const DappChrome = () => {
    return (
        <header className="dapp-chrome" aria-label="DApp navigation">
            <div className="dapp-chrome__glass"></div>
            <div className="dapp-chrome__divider"></div>

            <NavLink className="dapp-chrome__brand" to="/">
                <img src={brandIcon} alt="GemChain logo" />
                <span>GEM</span>
            </NavLink>

            <nav className="dapp-chrome__nav" aria-label="DApp sections">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? 'dapp-chrome__nav-link dapp-chrome__nav-link--active'
                                : 'dapp-chrome__nav-link'
                        }
                        to={item.to}
                    >
                        <DappNavIcon name={item.icon} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <button className="dapp-chrome__connect" type="button">
                connect
            </button>
        </header>
    );
};

export default DappChrome;
