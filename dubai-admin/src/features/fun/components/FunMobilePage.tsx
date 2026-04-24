import MobilePageShell from '@/components/mobile/MobilePageShell';

import '@/styles/fun-page-mobile.scss';

import campaignIllustration from '@/assets/images/fun-campaign-card-illustration.png';
import completeIconOne from '@/assets/images/fun-ranking-complete-icon-one.png';
import completeIconTwo from '@/assets/images/fun-ranking-complete-icon-two.png';
import shareLinkIcon from '@/assets/images/fun-share-link-icon.png';

const metrics = [
    { label: 'Total Earned XP', value: '0' },
    { label: 'Total Earned AP', value: '0' },
    { label: 'Referred Users', value: '0' },
    { label: 'Reward Rate', value: '10%' },
];

const howItWorks = [
    {
        step: '01',
        title: 'Share your link',
        description:
            'Copy and share your unique referral link to bring new users into the campaign.',
    },
    {
        step: '02',
        title: 'Friends join',
        description:
            'They sign up and start earning through the GemChain ecosystem using your code.',
    },
    {
        step: '03',
        title: 'Earn rewards',
        description:
            'Receive 10% of the XP and AP that your referrals generate while participating.',
    },
];

const campaigns = [
    {
        title: '$RIVER is live on Hyperliquid',
        description: 'Trade and hold to earn from a $3,000 RIVER bonus and 300K River points.',
        status: '13 days left',
    },
    {
        title: 'S4 Airdrop',
        description: 'Earn by staking $RIVER and using satUSD across ecosystems.',
        status: '24 days left',
    },
    {
        title: '$RIVER Staking',
        description: 'Stake $RIVER and claim your rewards weekly through the campaign dashboard.',
        status: 'Dec 20~',
    },
];

const rankings = [
    { rank: '1', account: '1165959102@qq.com', weekly: '888.88', total: '12945.50' },
    { rank: '2', account: '1165959102@qq.com', weekly: '843.93', total: '12833.50' },
    { rank: '3', account: '1165959102@qq.com', weekly: '793.40', total: '12694.50' },
    { rank: '4', account: '1165959102@qq.com', weekly: '740.30', total: '1220.50' },
];

const tasks = [
    { task: 'Join and link Discord', activity: 'Social onboarding', award: '983.50', done: true },
    { task: 'Invite 3 friends', activity: 'Growth activation', award: '983.50', done: true },
    {
        task: 'Complete staking tutorial',
        activity: 'Protocol education',
        award: '983.50',
        done: false,
    },
];

const FunMobilePage = () => {
    return (
        <MobilePageShell
            activePath="/fun"
            eyebrow="Fun"
            title="Referral Program"
            description="Invite friends and earn XP and AP through stacked campaigns, rankings, and quick participation tasks."
            headerAction={{ label: 'Register', to: '/register' }}
            primaryAction={{ label: 'Open referral', to: '/register' }}
            secondaryAction={{ label: 'View DeFi', to: '/defi' }}
            metrics={metrics}
            heroMedia={
                <div className="fun-mobile__hero-visual">
                    <img src={campaignIllustration} alt="Referral campaign illustration" />
                </div>
            }
        >
            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Share</p>
                    <h2>Your referral link</h2>
                    <p className="mobile-shell__section-copy">
                        The mobile version keeps the original share, stats, and guide flow in a
                        stacked card layout.
                    </p>
                </div>
                <article className="mobile-shell__panel">
                    <span className="mobile-shell__field-label">Link</span>
                    <strong className="mobile-shell__field-value">
                        https://app.termmax.ts.finance/alpha
                    </strong>
                    <div className="mobile-shell__action-row mobile-shell__section-grid--two">
                        <button
                            className="mobile-shell__button mobile-shell__button--primary"
                            type="button"
                        >
                            Copy Link
                        </button>
                        <button className="mobile-shell__surface-button" type="button">
                            Code: CRCR6BQX
                        </button>
                    </div>
                    <div className="mobile-shell__icon-row">
                        <span className="mobile-shell__icon-badge">
                            <img src={shareLinkIcon} alt="Share link icon" />
                        </span>
                        <p className="mobile-shell__card-copy">
                            Statistics may have a 1-2 hour delay while campaign activity syncs.
                        </p>
                    </div>
                </article>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Guide</p>
                    <h2>How it works</h2>
                </div>
                <div className="mobile-shell__list">
                    {howItWorks.map((item) => (
                        <article key={item.step} className="mobile-shell__list-item">
                            <div className="mobile-shell__list-topline">
                                <span className="mobile-shell__list-index">{item.step}</span>
                                <strong>{item.title}</strong>
                            </div>
                            <p className="mobile-shell__card-copy">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Campaigns</p>
                    <h2>Featured opportunities</h2>
                </div>
                <div className="mobile-shell__list">
                    {campaigns.map((campaign, index) => (
                        <article key={campaign.title} className="mobile-shell__list-item">
                            {index === 0 ? (
                                <div className="fun-mobile__campaign-media">
                                    <img src={campaignIllustration} alt="Campaign visual" />
                                </div>
                            ) : null}
                            <div className="mobile-shell__list-topline">
                                <strong>{campaign.title}</strong>
                                <span className="mobile-shell__status-pill">{campaign.status}</span>
                            </div>
                            <p className="mobile-shell__card-copy">{campaign.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Rankings</p>
                    <h2>Weekly rewards board</h2>
                </div>
                <div className="mobile-shell__table">
                    {rankings.map((entry, index) => (
                        <article key={entry.rank} className="mobile-shell__table-row">
                            <div className="mobile-shell__table-cell">
                                <strong>#{entry.rank}</strong>
                                <span>{entry.account}</span>
                            </div>
                            <div className="mobile-shell__table-cell">
                                <strong>{entry.weekly}</strong>
                                <span>Weekly</span>
                            </div>
                            <div className="mobile-shell__table-cell">
                                <strong>{entry.total}</strong>
                                <span>Total</span>
                            </div>
                            <span className="mobile-shell__icon-badge">
                                <img
                                    src={index % 2 === 0 ? completeIconOne : completeIconTwo}
                                    alt="Ranking status icon"
                                />
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mobile-shell__section">
                <div className="mobile-shell__section-head">
                    <p className="mobile-shell__section-tag">Tasks</p>
                    <h2>Requirements and tasks</h2>
                </div>
                <div className="mobile-shell__table">
                    {tasks.map((task) => (
                        <article key={task.task} className="mobile-shell__table-row">
                            <div className="mobile-shell__table-cell">
                                <strong>{task.task}</strong>
                                <span>{task.activity}</span>
                            </div>
                            <div className="mobile-shell__table-cell">
                                <strong>{task.award}</strong>
                                <span>Award</span>
                            </div>
                            <button
                                className={
                                    task.done
                                        ? 'mobile-shell__surface-button fun-mobile__done-button'
                                        : 'mobile-shell__button mobile-shell__button--primary'
                                }
                                type="button"
                            >
                                {task.done ? 'Completed' : 'Go'}
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </MobilePageShell>
    );
};

export default FunMobilePage;
