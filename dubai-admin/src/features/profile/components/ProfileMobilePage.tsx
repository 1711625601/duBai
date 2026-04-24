import MobilePageShell from '@/components/mobile/MobilePageShell';

import '@/styles/profile-page-mobile.scss';

import avatarRing from '@/assets/images/profile-avatar-frame-ring.png';
import headerAvatarRing from '@/assets/images/profile-header-avatar-ring.png';
import copyIcon from '@/assets/images/profile-id-copy-icon.png';

const accountDetails = [
    { label: 'Nickname', value: '116***@qq.com' },
    { label: 'Wallet address', value: '0x23b1...98E4' },
    { label: 'Birthday', value: 'June 20' },
    { label: 'Change password', value: '***********' },
];

const ProfileMobilePage = () => {
    return (
        <MobilePageShell
            activePath="/profile"
            eyebrow="Personal Center"
            title="Welcome back"
            description="The profile mobile experience turns the desktop account board into stacked profile, balance, and settings cards."
            headerAction={{ label: 'Home', to: '/' }}
            primaryAction={{ label: 'Deposit', to: '/defi' }}
            secondaryAction={{ label: 'Withdraw', to: '/lending' }}
            metrics={[
                { label: 'Account', value: '116***@qq.com' },
                { label: 'Member ID', value: '827909863266554048' },
            ]}
            heroMedia={
                <div className="profile-mobile__hero-visual">
                    <img
                        className="profile-mobile__hero-ring"
                        src={headerAvatarRing}
                        alt="Profile avatar ring"
                    />
                </div>
            }
        >
            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Profile</p>
                    <h2>Account information</h2>
                </div>
                <article className="mobile-shell__panel profile-mobile__summary-card">
                    <div className="profile-mobile__identity">
                        <span className="profile-mobile__avatar">
                            <img src={avatarRing} alt="Profile avatar" />
                        </span>
                        <div className="mobile-shell__table-cell">
                            <strong>welcome, 116***@qq.com</strong>
                            <span>Personal dashboard</span>
                        </div>
                    </div>
                    <div className="mobile-shell__info-row">
                        <div className="mobile-shell__table-cell">
                            <strong>827909863266554048</strong>
                            <span>Member ID</span>
                        </div>
                        <button
                            className="mobile-shell__surface-button profile-mobile__copy-button"
                            type="button"
                        >
                            <img src={copyIcon} alt="Copy ID" />
                        </button>
                    </div>
                </article>
                <div className="mobile-shell__table">
                    {accountDetails.map((detail) => (
                        <article key={detail.label} className="mobile-shell__info-row">
                            <div className="mobile-shell__table-cell">
                                <strong>{detail.value}</strong>
                                <span>{detail.label}</span>
                            </div>
                            <button className="mobile-shell__surface-button" type="button">
                                Revise
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Wallet</p>
                    <h2>Balance actions</h2>
                </div>
                <article className="mobile-shell__panel">
                    <span className="mobile-shell__field-label">USDT balance</span>
                    <strong className="profile-mobile__wallet-balance">988830.93</strong>
                    <div className="mobile-shell__action-row mobile-shell__section-grid--two">
                        <button
                            className="mobile-shell__button mobile-shell__button--primary"
                            type="button"
                        >
                            Deposit
                        </button>
                        <button
                            className="mobile-shell__button mobile-shell__button--ghost"
                            type="button"
                        >
                            Withdraw
                        </button>
                    </div>
                </article>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Session</p>
                    <h2>Leave safely</h2>
                </div>
                <button
                    className="mobile-shell__button mobile-shell__button--primary"
                    type="button"
                >
                    Log out
                </button>
            </section>
        </MobilePageShell>
    );
};

export default ProfileMobilePage;
