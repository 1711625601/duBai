import { useState } from 'react';
import { Link } from 'react-router';

import aboutBlockchainIcon from '@/assets/images/home-about-blockchain-cube-icon.png';
import aboutNetworkIcon from '@/assets/images/home-about-network-icon.png';
import aboutTokenizedIcon from '@/assets/images/home-about-tokenized-asset-icon.png';
import brandIcon from '@/assets/images/home-header-brand-icon.png';
import newsFeatureCard from '@/assets/images/home-news-feature-card-cover.png';
import newsSideCardBottom from '@/assets/images/home-news-side-card-bottom-cover.png';
import newsSideCardTop from '@/assets/images/home-news-side-card-top-cover.png';
import heroCoin from '@/assets/images/shared-gem-coin.png';
import '@/styles/home-page-mobile.scss';

const aboutCards = [
    'GemChain enables the digital representation of every gem.',
    'GemChain enables the digital representation of every gem.',
    'GemChain enables the digital representation of every gem.',
    'GemChain enables the digital representation of every gem.',
];

const roadmapItems = [
    {
        period: 'Q1 2026',
        title: 'Title',
        text: 'The global gemstone market has long been limited by fragmented supply chains, lack of transparency, and restricted access to investment opportunities.',
    },
    {
        period: 'Q2 - Q3 2026',
        title: 'Title',
        text: 'TGemChain was founded to bring a new level of trust, transparency, and accessibility to this industry. ',
    },
    {
        period: 'Q1 - Q4 2027',
        title: 'Title',
        text: 'Originating from Dubai — one of the world’s most important gemstone trading hubs GemChain combines decades of expertise in gemstone trading with cutting-edge blockchain technology.',
    },
    {
        period: 'Q1 2026',
        title: 'Title',
        text: 'TGemChain was founded to bring a new level of trust, transparency, and accessibility to  ',
    },
];

const featureItems = [
    {
        title: 'Transparent Asset Verification',
        text: 'Every gemstone in the ecosystem can be verified through blockchain records, ensuring authenticity and traceability.',
        image: aboutTokenizedIcon,
    },
    {
        title: '',
        text: 'GemChain connects physical gemstones with blockchain technology, creating a trusted digital representation of real-world assets.',
        image: aboutBlockchainIcon,
    },
    {
        title: 'Global Digital Marketplace',
        text: 'Users from around the world can access gemstone-related digital assets through a decentralized ecosystem.',
        image: aboutNetworkIcon,
    },
];

const newsItems = [
    {
        title: 'Mining economics are facing a structural test.',
        description:
            'According to a recent report from trading firm Wintermute, the current cycle has',
        image: newsFeatureCard,
        featured: true,
    },
    {
        title: 'Mining economics are facing a structural test.',
        image: newsSideCardBottom,
        featured: false,
    },
    {
        title: 'Mining economics are facing a structural test.',
        image: newsSideCardTop,
        featured: false,
    },
];

const faqItems = [
    {
        question: 'What is GemChain?',
        answer: 'GemChain is a Web3 infrastructure that brings real-world gemstones on-chain through tokenization and verification.',
    },
    {
        question: 'Are the gemstones real?',
        answer: 'Yes. Every gemstone is physically verified, certified, and securely stored before being represented on-chain.',
    },
    {
        question: 'How can I participate?',
        answer: 'You can participate by joining the marketplace, holding tokens, or investing in tokenized gemstone assets.',
    },
    {
        question: 'Will there be a token?',
        answer: 'Yes — the GemChain token will power the ecosystem, governance, and marketplace transactions.',
    },
];

const footerColumns = [
    {
        title: 'Home',
        items: ['Blog', 'Brand', 'FAQ', 'Help & Support', 'Governance'],
    },
    {
        title: 'Mall',
        items: ['Audit', 'Case Studies', 'Documentation', 'Technical Paper'],
    },
    {
        title: 'DeFi',
        items: ['Build', 'Case Studies', 'Documentation', 'Technical Paper', 'Security'],
    },
    {
        title: 'NFT',
        items: ['Terms of Service', 'Contact', 'Press', 'Manage Account'],
    },
];

const HomeMobilePage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="home-mobile">
            <div className="home-mobile__device">
                <header className="home-mobile__header">
                    <Link className="home-mobile__brand" to="/">
                        <img src={brandIcon} alt="GemChain logo" />
                        <span>GEM</span>
                    </Link>
                </header>

                <main className="home-mobile__main">
                    <section className="home-mobile__hero">
                        <div className="home-mobile__hero-copy">
                            <h1>GEMCHAIN</h1>
                            <p className="home-mobile__hero-title">
                                BRINGING REAL-WORLD
                                <br />
                                GEMSTONES ON-CHAIN
                            </p>
                        </div>

                        <div className="home-mobile__hero-media">
                            <img src={heroCoin} alt="GemChain coin" />
                        </div>

                        <Link
                            className="home-mobile__primary-action"
                            to="/dapp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>Explore the Ecosystem</span>
                            <ArrowRightIcon />
                        </Link>
                    </section>

                    <section className="home-mobile__section home-mobile__section--about">
                        <div className="home-mobile__section-label">— ABOUT GEMCHAIN —</div>
                        <h2 className="home-mobile__about-title">
                            <span className="home-mobile__about-title-accent">
                                GEMCHAIN IS A WEB3 INFRASTRUCTURE
                            </span>{' '}
                            DESIGNED TO BRIDGE THE GAP BETWEEN PHYSICAL GEMSTONES AND BLOCKCHAIN
                            TECHNOLOGY.
                        </h2>

                        <div className="home-mobile__about-cards">
                            {aboutCards.map((item, index) => (
                                <div key={`${item}-${index}`} className="home-mobile__about-card">
                                    <span className="home-mobile__about-dot" aria-hidden="true" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="home-mobile__section home-mobile__section--roadmap">
                        <h2 className="home-mobile__section-title">
                            <span>THE PAST &amp; FUTURE OF </span>
                            <em>GEMCHAIN</em>
                        </h2>

                        <div className="home-mobile__roadmap">
                            {roadmapItems.map((item, index) => (
                                <article
                                    key={`${item.period}-${item.title}-${index}`}
                                    className="home-mobile__roadmap-item"
                                >
                                    <div className="home-mobile__roadmap-node" aria-hidden="true" />
                                    <div className="home-mobile__roadmap-period">{item.period}</div>
                                    <div className="home-mobile__roadmap-heading">
                                        <ClockIcon />
                                        <span>{item.title}</span>
                                    </div>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="home-mobile__section home-mobile__section--features">
                        <h2 className="home-mobile__section-title home-mobile__section-title--stacked">
                            <span>WHY CHOOSE</span>
                            <em>GEMCHAIN</em>
                        </h2>

                        <div className="home-mobile__feature-list">
                            {featureItems.map((item) => (
                                <article
                                    key={`${item.title}-${item.text}`}
                                    className="home-mobile__feature-card"
                                >
                                    <div className="home-mobile__feature-icon" aria-hidden="true">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="home-mobile__feature-copy">
                                        {item.title ? <h3>{item.title}</h3> : null}
                                        <p>{item.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="home-mobile__section home-mobile__section--news">
                        <h2 className="home-mobile__section-title">
                            <span>LATEST FROM </span>
                            <em>GEMCHAIN</em>
                        </h2>

                        <div className="home-mobile__news-list">
                            {newsItems.map((item) => (
                                <article
                                    key={`${item.title}-${item.image}`}
                                    className={`home-mobile__news-card${item.featured ? ' home-mobile__news-card--featured' : ''}`}
                                >
                                    <img src={item.image} alt={item.title} />
                                    <div className="home-mobile__news-copy">
                                        <h3>{item.title}</h3>
                                        {item.featured ? (
                                            <>
                                                <p className="home-mobile__news-description">
                                                    {item.description}
                                                </p>
                                                <Link
                                                    className="home-mobile__news-link"
                                                    to="/dapp/fun"
                                                >
                                                    <span>View Details</span>
                                                    <ArrowRightIcon />
                                                </Link>
                                            </>
                                        ) : (
                                            <Link
                                                className="home-mobile__news-arrow"
                                                to="/dapp/fun"
                                                aria-label={`View details for ${item.title}`}
                                            >
                                                <ArrowRightIcon />
                                            </Link>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="home-mobile__section home-mobile__section--faq">
                        <h2 className="home-mobile__faq-title">FAQs</h2>

                        <div className="home-mobile__faq-list">
                            {faqItems.map((item, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        key={item.question}
                                        className={`home-mobile__faq-item${isOpen ? ' home-mobile__faq-item--open' : ''}`}
                                    >
                                        <button
                                            className="home-mobile__faq-button"
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq((current) =>
                                                    current === index ? null : index,
                                                )
                                            }
                                        >
                                            <span>{item.question.toUpperCase()}</span>
                                            {isOpen ? <MinusIcon /> : <PlusIcon />}
                                        </button>
                                        {isOpen ? (
                                            <div className="home-mobile__faq-answer">
                                                {item.answer}
                                            </div>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="home-mobile__contact">
                            <p>HAVE ANY QUESTIONS LEFT?</p>
                            <p>SEND US A MESSAGE</p>
                            <Link className="home-mobile__contact-link" to="/register">
                                <span>Contact us</span>
                                <ArrowRightIcon />
                            </Link>
                        </div>
                    </section>
                </main>

                <footer className="home-mobile__footer">
                    <Link className="home-mobile__brand home-mobile__brand--footer" to="/">
                        <img src={brandIcon} alt="GemChain logo" />
                        <span>GEM</span>
                    </Link>

                    <p className="home-mobile__footer-copy">
                        By leveraging blockchain and tokenization, GemChain unlocks the digital
                        representation of real-world gemstones, allowing users to participate in a
                        new gemstone and global marketplace.
                    </p>

                    <div className="home-mobile__footer-grid">
                        {footerColumns.map((column) => (
                            <section key={column.title} className="home-mobile__footer-column">
                                <h3>{column.title}</h3>
                                <ul>
                                    {column.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>

                    <p className="home-mobile__footer-note">
                        © 2026 GemChain. All rights reserved. PoweredBy Lovable
                    </p>
                </footer>
            </div>
        </div>
    );
};

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M5 12H19M13 6L19 12L13 18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
            />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path
                d="M12 7.8V12.2L14.8 14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
            />
        </svg>
    );
}

function PlusIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 5V19M5 12H19"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
            />
        </svg>
    );
}

function MinusIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M5 12H19"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
            />
        </svg>
    );
}

export default HomeMobilePage;
