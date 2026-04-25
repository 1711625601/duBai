import { NavLink } from 'react-router';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';
import defiIcon from '@/assets/images/defi-header-defi-icon.png';
import nftIcon from '@/assets/images/defi-header-nft-icon.png';

const navItems = [
    { label: 'DeFi', to: '/dapp/defi', icon: defiIcon },
    { label: 'Lending', to: '/dapp/lending' },
    { label: 'Fun', to: '/dapp/fun' },
    { label: 'NFT', to: '/dapp/nft', icon: nftIcon },
    { label: 'My', to: '/dapp/my' },
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
                        {item.icon ? <img src={item.icon} alt="" aria-hidden="true" /> : null}
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
