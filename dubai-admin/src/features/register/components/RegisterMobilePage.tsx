import MobilePageShell from '@/components/mobile/MobilePageShell';

import '@/styles/register-page-mobile.scss';

import chainBoxIcon from '@/assets/images/register-chain-box-icon.png';
import emailIcon from '@/assets/images/register-email-icon.png';
import heroCoin from '@/assets/images/shared-gem-coin.png';
import walletIcon from '@/assets/images/register-wallet-icon.png';

const onboardingSteps = [
    'Use your email for a recent sign-in shortcut.',
    'Connect a wallet to unlock protocol and campaign access.',
    'Keep your passkey ready for faster follow-up logins.',
];

const RegisterMobilePage = () => {
    return (
        <MobilePageShell
            activePath="/register"
            eyebrow="Register"
            title="Join GemChain"
            description="The mobile onboarding flow keeps the dark modal feeling from desktop while simplifying the steps into a clear stacked form."
            headerAction={{ label: 'Home', to: '/' }}
            primaryAction={{ label: 'Register now', to: '/profile' }}
            secondaryAction={{ label: 'Profile', to: '/profile' }}
            heroMedia={
                <div className="register-mobile__hero-visual">
                    <img
                        className="register-mobile__hero-coin"
                        src={heroCoin}
                        alt="GemChain coin"
                    />
                    <div className="mobile-shell__token-stack">
                        <span className="mobile-shell__token-badge">
                            <img src={chainBoxIcon} alt="Chain box icon" />
                        </span>
                        <span className="mobile-shell__token-badge">
                            <img src={walletIcon} alt="Wallet icon" />
                        </span>
                    </div>
                </div>
            }
        >
            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Auth</p>
                    <h2>Register now</h2>
                </div>
                <article className="mobile-shell__panel">
                    <div className="mobile-shell__field">
                        <span className="mobile-shell__field-label">Recent email</span>
                        <div className="register-mobile__field-row">
                            <span className="mobile-shell__icon-badge">
                                <img src={emailIcon} alt="Email icon" />
                            </span>
                            <strong className="mobile-shell__field-value">your@email.com</strong>
                        </div>
                    </div>
                    <div className="mobile-shell__field">
                        <span className="mobile-shell__field-label">Wallet</span>
                        <div className="register-mobile__field-row">
                            <span className="mobile-shell__icon-badge">
                                <img src={walletIcon} alt="Wallet icon" />
                            </span>
                            <strong className="mobile-shell__field-value">Wallet Connect</strong>
                        </div>
                    </div>
                    <p className="mobile-shell__field-note">I have a passkey</p>
                    <button
                        className="mobile-shell__button mobile-shell__button--primary"
                        type="button"
                    >
                        Register now
                    </button>
                </article>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Preview</p>
                    <h2>Connected ecosystem access</h2>
                    <p className="mobile-shell__section-copy">
                        The mobile register page still hints at the DeFi experience that opens up
                        after onboarding.
                    </p>
                </div>
                <div className="mobile-shell__section-grid mobile-shell__section-grid--two">
                    <article className="mobile-shell__detail-card">
                        <strong>From</strong>
                        <span>ETH on BNB Chain</span>
                    </article>
                    <article className="mobile-shell__detail-card">
                        <strong>To</strong>
                        <span>BNBY on BNB Chain</span>
                    </article>
                    <article className="mobile-shell__detail-card">
                        <strong>Favorite DEX</strong>
                        <span>Instant swaps across 10 chains</span>
                    </article>
                    <article className="mobile-shell__detail-card">
                        <strong>Get Started</strong>
                        <span>Unlock access after account creation</span>
                    </article>
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Checklist</p>
                    <h2>What to expect</h2>
                </div>
                <div className="mobile-shell__list">
                    {onboardingSteps.map((step, index) => (
                        <article key={step} className="mobile-shell__list-item">
                            <div className="mobile-shell__list-topline">
                                <span className="mobile-shell__list-index">{index + 1}</span>
                                <strong>{step}</strong>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </MobilePageShell>
    );
};

export default RegisterMobilePage;
