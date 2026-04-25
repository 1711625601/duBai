import { Link } from 'react-router';

import DappMobileChrome from '@/features/dapp/components/DappMobileChrome';
import '@/styles/profile-page-mobile.scss';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';
import avatarRing from '@/assets/images/profile-avatar-frame-ring.png';
import copyIcon from '@/assets/images/profile-id-copy-icon.png';

const accountDetails = [
    { label: 'Nickname', value: '116***@qq.com' },
    { label: 'Wallet Address', value: '0x23b1...98E4' },
    { label: 'Birthday', value: 'June 20' },
    { label: 'Change Password', value: '***********' },
];

const ChevronRightIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="m9 18 6-6-6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
        />
    </svg>
);

const ProfileMobilePage = () => (
    <div className="profile-mobile">
        <DappMobileChrome activePath="/dapp/my" />

        <main className="profile-mobile__main">
            <section className="profile-mobile__welcome-section">
                <article className="profile-mobile__card profile-mobile__welcome-card">
                    <div className="profile-mobile__avatar">
                        <img src={avatarRing} alt="" aria-hidden="true" />
                    </div>

                    <div className="profile-mobile__identity">
                        <span>welcome,</span>
                        <strong>116***@qq.com</strong>
                        <div className="profile-mobile__member-id">
                            <span>827909863266554048</span>
                            <button aria-label="Copy member ID" type="button">
                                <img src={copyIcon} alt="" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <button className="profile-mobile__logout" type="button">
                        log out
                    </button>
                </article>
            </section>

            <section className="profile-mobile__balance-section">
                <article className="profile-mobile__card profile-mobile__balance-card">
                    <span>Usdt</span>
                    <strong>988830.93</strong>
                    <div>
                        <button type="button">Deposit</button>
                        <button type="button">Withdraw</button>
                    </div>
                </article>
            </section>

            <section className="profile-mobile__account-section">
                <h1>Account Information</h1>

                <div className="profile-mobile__card profile-mobile__info-card">
                    {accountDetails.map((item) => (
                        <article key={item.label}>
                            <div>
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                            <button type="button">
                                Revise
                                <ChevronRightIcon />
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </main>

        <footer className="profile-mobile__footer">
            <Link className="profile-mobile__footer-brand" to="/">
                <img src={brandIcon} alt="GemChain logo" />
                <span>GEM</span>
            </Link>
            <p>© 2026 GemChain. All rights reserved.</p>
        </footer>
    </div>
);

export default ProfileMobilePage;
