import { Link } from 'react-router';

import aboutBlockchainIcon from '@/assets/images/home-about-blockchain-cube-icon.png';
import aboutNetworkIcon from '@/assets/images/home-about-network-icon.png';
import aboutTokenizedIcon from '@/assets/images/home-about-tokenized-asset-icon.png';
import brandIcon from '@/assets/images/home-header-brand-icon.png';
import faqBrandIcon from '@/assets/images/home-faq-section-brand-icon.png';
import featureArrow from '@/assets/images/home-news-feature-cta-arrow.png';
import featureCover from '@/assets/images/home-news-feature-card-cover.png';
import footerDivider from '@/assets/images/home-footer-top-divider-line.png';
import heroCoin from '@/assets/images/shared-gem-coin.png';
import markerIconFour from '@/assets/images/home-roadmap-marker-icon-four.png';
import markerIconOne from '@/assets/images/home-roadmap-marker-icon-one.png';
import markerIconThree from '@/assets/images/home-roadmap-marker-icon-three.png';
import markerRingFour from '@/assets/images/home-roadmap-marker-ring-four.png';
import markerRingOne from '@/assets/images/home-roadmap-marker-ring-one.png';
import markerRingThree from '@/assets/images/home-roadmap-marker-ring-three.png';
import primaryArrow from '@/assets/images/home-primary-cta-arrow.png';
import sideCardBottomArrow from '@/assets/images/home-news-side-card-bottom-arrow.png';
import sideCardBottomCover from '@/assets/images/home-news-side-card-bottom-cover.png';
import sideCardTopArrow from '@/assets/images/home-news-side-card-top-arrow.png';
import sideCardTopCover from '@/assets/images/home-news-side-card-top-cover.png';

const featureItems = [
    {
        title: 'Transparent Asset Verification',
        description:
            'Every gemstone in the ecosystem can be verified through blockchain records, ensuring authenticity and traceability.',
        icon: aboutTokenizedIcon,
    },
    {
        title: 'GemChain connects physical gemstones with blockchain technology, creating a trusted digital representation of real-world assets.',
        description: '',
        icon: aboutBlockchainIcon,
    },
    {
        title: 'Global Digital Marketplace',
        description:
            'Users from around the world can access gemstone-related digital assets through a decentralized ecosystem.',
        icon: aboutNetworkIcon,
    },
];

const roadmapItems = [
    {
        phase: 'Q1 2026',
        description:
            'The global gemstone market has long been limited by fragmented supply chains, lack of transparency, and restricted access to investment opportunities.',
        ring: markerRingOne,
        icon: markerIconOne,
    },
    {
        phase: 'Q2 - Q3 2026',
        description:
            'TGemChain was founded to bring a new level of trust, transparency, and accessibility to this industry.',
        ring: markerRingThree,
        icon: markerIconThree,
    },
    {
        phase: 'Q1 - Q4 2027',
        description:
            'Originating from Dubai — one of the world’s most important gemstone trading hubs GemChain combines decades of expertise in gemstone trading with cutting-edge blockchain technology.',
        ring: markerRingFour,
        icon: markerIconFour,
    },
];

const latestStories = [
    {
        title: 'mining economics are facing a structural test.',
        description:
            'According to a recent report from trading firm Wintermute, the current cycle has',
        image: featureCover,
        cta: 'View Details',
        arrow: featureArrow,
        featured: true,
    },
    {
        title: 'mining economics are facing a structural test.',
        description: '',
        image: sideCardTopCover,
        cta: '',
        arrow: sideCardTopArrow,
        featured: false,
    },
    {
        title: 'mining economics are facing a structural test.',
        description: '',
        image: sideCardBottomCover,
        cta: '',
        arrow: sideCardBottomArrow,
        featured: false,
    },
];

const faqItems = [
    'What is GemChain?',
    'Are the gemstones real?',
    'How can I participate?',
    'Will there be a token?',
];

const HomeMobilePage = () => {
    return (
        <div className="home-mobile">
            <header className="home-mobile__header">
                <Link className="home-mobile__brand" to="/">
                    <img src={brandIcon} alt="GemChain logo" />
                    <span>GEM</span>
                </Link>
            </header>

            <main className="home-mobile__content">
                <section className="home-mobile__hero">
                    <div className="home-mobile__hero-copy">
                        <h1>GemChain</h1>
                        <p className="home-mobile__hero-title">
                            Bringing Real-World Gemstones On-Chain
                        </p>

                        <Link className="home-mobile__primary-action" to="/defi">
                            <span>Explore the Ecosystem</span>
                            <img src={primaryArrow} alt="" aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="home-mobile__hero-media">
                        <img src={heroCoin} alt="GemChain coin" />
                    </div>
                </section>

                <section className="home-mobile__section">
                    <div className="home-mobile__section-heading">
                        <span>About GemChain</span>
                        <h2>
                            GemChain is a Web3 infrastructure designed to bridge the gap between
                            physical gemstones and blockchain technology.
                        </h2>
                    </div>
                </section>

                <section className="home-mobile__section">
                    <div className="home-mobile__section-heading">
                        <span>Why choose</span>
                        <h2>GemChain</h2>
                    </div>

                    <div className="home-mobile__feature-list">
                        {featureItems.map((item) => (
                            <article key={item.title} className="home-mobile__feature-item">
                                <span className="home-mobile__feature-icon">
                                    <img src={item.icon} alt="" aria-hidden="true" />
                                </span>
                                <div className="home-mobile__feature-copy">
                                    <h3>{item.title}</h3>
                                    {item.description ? <p>{item.description}</p> : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="home-mobile__section">
                    <div className="home-mobile__section-heading">
                        <span>The Past & Future of</span>
                        <h2>GemChain</h2>
                    </div>

                    <div className="home-mobile__timeline">
                        {roadmapItems.map((item) => (
                            <article key={item.phase} className="home-mobile__timeline-item">
                                <div className="home-mobile__timeline-marker">
                                    <img src={item.ring} alt="" aria-hidden="true" />
                                    <img src={item.icon} alt="" aria-hidden="true" />
                                </div>
                                <div className="home-mobile__timeline-copy">
                                    <strong>{item.phase}</strong>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="home-mobile__section">
                    <div className="home-mobile__section-heading">
                        <span>LATEST FROM</span>
                        <h2>GEMCHAIN</h2>
                    </div>

                    <div className="home-mobile__story-list">
                        {latestStories.map((story) =>
                            story.featured ? (
                                <article
                                    key={`${story.title}-feature`}
                                    className="home-mobile__story"
                                >
                                    <img src={story.image} alt={story.title} />
                                    <div className="home-mobile__story-copy">
                                        <h3>{story.title}</h3>
                                        <p>{story.description}</p>
                                        <Link className="home-mobile__story-link" to="/fun">
                                            <span>{story.cta}</span>
                                            <img src={story.arrow} alt="" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            ) : (
                                <article
                                    key={story.image}
                                    className="home-mobile__story home-mobile__story--compact"
                                >
                                    <img src={story.image} alt={story.title} />
                                    <div className="home-mobile__story-copy">
                                        <h3>{story.title}</h3>
                                        <Link className="home-mobile__story-link" to="/fun">
                                            <img src={story.arrow} alt="" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                </section>

                <section className="home-mobile__section">
                    <div className="home-mobile__section-heading">
                        <span>FAQs</span>
                        <h2>FAQs</h2>
                    </div>

                    <div className="home-mobile__faq-list">
                        {faqItems.map((item) => (
                            <button key={item} className="home-mobile__faq-item" type="button">
                                <span>{item}</span>
                                <span className="home-mobile__faq-plus">+</span>
                            </button>
                        ))}
                    </div>

                    <div className="home-mobile__contact">
                        <img src={faqBrandIcon} alt="" aria-hidden="true" />
                        <p>Have any questions left? Send us a message</p>
                        <Link
                            className="home-mobile__primary-action home-mobile__primary-action--small"
                            to="/register"
                        >
                            <span>Contact us</span>
                            <img src={primaryArrow} alt="" aria-hidden="true" />
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="home-mobile__footer">
                <img
                    className="home-mobile__footer-divider"
                    src={footerDivider}
                    alt=""
                    aria-hidden="true"
                />
                <div className="home-mobile__footer-brand">
                    <img src={brandIcon} alt="GemChain logo" />
                    <span>GEM</span>
                </div>
                <p className="home-mobile__footer-copy">
                    By leveraging decentralized technology, GemChain enables the digital
                    representation of real-world gemstones, allowing users to participate in a
                    transparent and global marketplace.
                </p>
                <p className="home-mobile__footer-note">
                    © 2017 by EVERPRO KITCHEN & BATH, LLC. Proudly Designed by Hanya Chang.
                </p>
            </footer>
        </div>
    );
};

export default HomeMobilePage;
