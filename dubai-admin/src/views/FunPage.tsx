import PageFrame from '@/components/layout/PageFrame';
import FunChrome from '@/features/fun/components/FunChrome';
import FunCommunitySections from '@/features/fun/components/FunCommunitySections';
import FunReferralSection from '@/features/fun/components/FunReferralSection';
import '@/styles/fun-page.scss';

const FunPage = () => {
    return (
        <PageFrame frameId="955_2" frameClassName="dubai-frame-955_2">
            <FunChrome />
            <FunReferralSection />
            <FunCommunitySections />
        </PageFrame>
    );
};

export default FunPage;
