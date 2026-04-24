import PageFrame from '@/components/layout/PageFrame';
import ProfileAccountSections from '@/features/profile/components/ProfileAccountSections';
import ProfileChrome from '@/features/profile/components/ProfileChrome';
import ProfileMobilePage from '@/features/profile/components/ProfileMobilePage';
import ProfileWalletSection from '@/features/profile/components/ProfileWalletSection';
import '@/styles/profile-page.scss';

const ProfilePage = () => {
    return (
        <PageFrame
            frameId="1005_197"
            frameClassName="dubai-frame-1005_197"
            designHeight={1064}
            mobileFallback={<ProfileMobilePage />}
        >
            <ProfileChrome />
            <ProfileAccountSections />
            <ProfileWalletSection />
        </PageFrame>
    );
};

export default ProfilePage;
