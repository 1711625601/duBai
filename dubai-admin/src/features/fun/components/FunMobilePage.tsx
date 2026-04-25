import { Link } from 'react-router';

import DappMobileChrome from '@/features/dapp/components/DappMobileChrome';
import '@/styles/fun-page-mobile.scss';

import brandIcon from '@/assets/images/defi-header-brand-icon.png';
import actionArrowIcon from '@/assets/images/fun-action-arrow.png';
import campaignIllustration from '@/assets/images/fun-campaign-card-illustration.png';
import copyIconOne from '@/assets/images/fun-referral-copy-icon-one.png';
import copyIconTwo from '@/assets/images/fun-referral-copy-icon-two.png';
import primaryArrowIcon from '@/assets/images/fun-primary-button-arrow.png';
import searchIcon from '@/assets/images/fun-search-icon.png';
import shareLinkIcon from '@/assets/images/fun-share-link-icon.png';

const referralStats = [
    { value: '0', label: 'Total Earned XP' },
    { value: '0', label: 'Total Earned AP' },
    { value: '0', label: 'Total Referred Users' },
    { value: '10%', label: 'Reward Rate', highlight: true },
];

const howItWorks = [
    {
        step: '1',
        title: 'SHARE YOUR LINK',
        description: 'Copy and share your unique referral link',
    },
    {
        step: '2',
        title: 'FRIENDS JOIN',
        description: 'They sign up and start earning using your link',
    },
    { step: '3', title: 'EARN REWARDS', description: 'Get 10% of their XP & AP earnings' },
];

const campaigns = [
    {
        title: '$RIVER Is Live On Hyperliquid',
        description: 'Trade and hold to earn from a $3,000 RIVER + 300K RIVER pts.',
        badge: '13 days left',
    },
    {
        title: 'S4 Airdrop',
        description: 'Earn by staking $RIVER and using satUSD across ecosystems.',
        badge: '24 days left',
    },
    {
        title: '$RIVER Staking',
        description: 'Stake $RIVER and claim your rewards weekly.',
        badge: 'Dec 20-',
    },
];

const tasks = [
    { id: 'discord-go', task: 'Joining and linking Discord', state: 'go', award: '983.50' },
    { id: 'discord-done-one', task: 'Joining and linking Discord', state: 'done', award: '983.50' },
    { id: 'discord-done-two', task: 'Joining and linking Discord', state: 'done', award: '983.50' },
];

const rankings = [
    { rank: '1', account: '1165959102@qq.com', weekly: '888.88', total: '12945.50' },
    { rank: '2', account: '1165959102@qq.com', weekly: '843.93', total: '12833.50' },
    { rank: '3', account: '1165959102@qq.com', weekly: '793.40', total: '12694.50' },
    { rank: '4', account: '1165959102@qq.com', weekly: '740.30', total: '1220.50' },
];

const CompleteIcon = () => (
    <svg
        className="fun-mobile__complete-icon"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const FunMobilePage = () => (
    <div className="fun-mobile">
        <DappMobileChrome activePath="/dapp/fun" />

        <main className="fun-mobile__main">
            <section className="fun-mobile__referral">
                <div className="fun-mobile__referral-content">
                    <h1>REFERRAL PROGRAM</h1>
                    <p>Invite friends and earn XP & AP when they participate</p>

                    <article className="fun-mobile__card fun-mobile__share-card">
                        <span className="fun-mobile__eyebrow">SHARE</span>
                        <h2>Your Referral Link</h2>

                        <div className="fun-mobile__field-row">
                            <input readOnly value="https://app.gemmax.is.finance/Alpha" />
                            <button aria-label="Copy referral link" type="button">
                                <img src={copyIconOne} alt="" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="fun-mobile__field-row">
                            <input readOnly value="Code: CRCR68QX" />
                            <button aria-label="Copy referral code" type="button">
                                <img src={copyIconTwo} alt="" aria-hidden="true" />
                            </button>
                        </div>

                        <button className="fun-mobile__copy-action" type="button">
                            <img src={shareLinkIcon} alt="" aria-hidden="true" />
                            Copy Link
                        </button>
                    </article>

                    <article className="fun-mobile__card fun-mobile__stats-card">
                        <span className="fun-mobile__eyebrow">STATS</span>
                        <h2>Your Referrals</h2>

                        <div className="fun-mobile__stats-grid">
                            {referralStats.map((stat) => (
                                <div
                                    className={
                                        stat.highlight
                                            ? 'fun-mobile__stat fun-mobile__stat--highlight'
                                            : 'fun-mobile__stat'
                                    }
                                    key={stat.label}
                                >
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="fun-mobile__card fun-mobile__guide-card">
                        <span className="fun-mobile__eyebrow">GUIDE</span>
                        <h2>How It Works</h2>

                        <ul>
                            {howItWorks.map((item) => (
                                <li key={item.step}>
                                    <span>{item.step}</span>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="fun-mobile__card fun-mobile__history-card">
                        <span className="fun-mobile__eyebrow">HISTORY</span>
                        <div className="fun-mobile__history-head">
                            <h2>Referral History</h2>
                            <button type="button">
                                <img src={searchIcon} alt="" aria-hidden="true" />
                                Search
                            </button>
                        </div>
                        <p>*The statistics will have 1-2 hours delay.</p>
                        <div className="fun-mobile__empty-state">No referrals found</div>
                    </article>
                </div>
            </section>

            <section className="fun-mobile__section fun-mobile__campaigns">
                <div className="fun-mobile__section-head">
                    <h2>CAMPAIGNS</h2>
                    <button type="button">
                        See All
                        <img src={actionArrowIcon} alt="" aria-hidden="true" />
                    </button>
                </div>

                <ul className="fun-mobile__campaign-list">
                    {campaigns.map((campaign) => (
                        <li className="fun-mobile__campaign-card" key={campaign.title}>
                            <div className="fun-mobile__campaign-media">
                                <img src={campaignIllustration} alt="" aria-hidden="true" />
                            </div>
                            <div className="fun-mobile__campaign-body">
                                <strong>{campaign.title}</strong>
                                <p>{campaign.description}</p>
                                <span>{campaign.badge}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="fun-mobile__section fun-mobile__tasks">
                <h2>REQUIREMENTS AND TASKS</h2>

                <div className="fun-mobile__table-card">
                    <div className="fun-mobile__task-head">
                        <span>Task</span>
                        <span>Activity</span>
                        <span>Award</span>
                    </div>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <span>{task.task}</span>
                                <div>
                                    {task.state === 'go' ? (
                                        <button className="fun-mobile__go-button" type="button">
                                            go
                                            <img src={primaryArrowIcon} alt="" aria-hidden="true" />
                                        </button>
                                    ) : (
                                        <span className="fun-mobile__completed-pill">
                                            <CompleteIcon />
                                            Completed
                                        </span>
                                    )}
                                </div>
                                <strong>{task.award}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="fun-mobile__section fun-mobile__rankings">
                <h2>RANKINGS</h2>
                <p>Invite friends and earn XP & AP when they participate</p>

                <div className="fun-mobile__table-card">
                    <div className="fun-mobile__ranking-head">
                        <span>Rank</span>
                        <span>Account</span>
                        <span>Weekly</span>
                        <span>Total</span>
                    </div>
                    <ul>
                        {rankings.map((entry) => (
                            <li key={entry.rank}>
                                <strong>{entry.rank}</strong>
                                <span>{entry.account}</span>
                                <span>{entry.weekly}</span>
                                <em>{entry.total}</em>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>

        <footer className="fun-mobile__footer">
            <Link className="fun-mobile__footer-brand" to="/">
                <img src={brandIcon} alt="GemChain logo" />
                <span>GEM</span>
            </Link>
            <p>© 2026 GemChain. All rights reserved.</p>
        </footer>
    </div>
);

export default FunMobilePage;
