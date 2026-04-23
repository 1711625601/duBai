import PageFrame from '@/components/layout/PageFrame';
import HomeAboutSection from '@/features/home/components/HomeAboutSection';
import HomeChrome from '@/features/home/components/HomeChrome';
import HomeCommunitySections from '@/features/home/components/HomeCommunitySections';
import HomeIntroSections from '@/features/home/components/HomeIntroSections';
import HomeTimelineSection from '@/features/home/components/HomeTimelineSection';
import '@/styles/home-page.scss';

const HomePage = () => {
    return (
        <PageFrame frameId="584_300" frameClassName="dubai-frame-584_300">
            <HomeIntroSections />
            <HomeChrome />
            <HomeCommunitySections />
            <HomeTimelineSection />
            <HomeAboutSection />
        </PageFrame>
    );
};

export default HomePage;
