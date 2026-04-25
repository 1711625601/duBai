import PageFrame from '@/components/layout/PageFrame';
import HomeAboutSection from '@/features/home/components/HomeAboutSection';
import HomeChrome from '@/features/home/components/HomeChrome';
import HomeCommunitySections from '@/features/home/components/HomeCommunitySections';
import HomeIntroSections from '@/features/home/components/HomeIntroSections';
import HomeMobilePage from '@/features/home/components/HomeMobilePage';
import HomeTimelineSection from '@/features/home/components/HomeTimelineSection';
import '@/styles/home-page.scss';

const HomePage = () => {
    return (
        <div className="home-page-route">
            <PageFrame
                frameId="584_300"
                frameClassName="dubai-frame-584_300"
                designHeight={6260}
                mobileFallback={<HomeMobilePage />}
            >
                <HomeIntroSections />
                <HomeChrome />
                <HomeCommunitySections />
                <HomeTimelineSection />
                <HomeAboutSection />
            </PageFrame>
        </div>
    );
};

export default HomePage;
