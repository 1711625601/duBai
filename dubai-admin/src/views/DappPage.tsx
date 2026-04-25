import type { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router';

import PageFrame from '@/components/layout/PageFrame';
import DappChrome from '@/features/dapp/components/DappChrome';
import DappNftMobilePage from '@/features/dapp/components/DappNftMobilePage';
import DappNftPlaceholder from '@/features/dapp/components/DappNftPlaceholder';
import DefiMobilePage from '@/features/defi/components/DefiMobilePage';
import DefiProtocolSection from '@/features/defi/components/DefiProtocolSection';
import DefiSwapSection from '@/features/defi/components/DefiSwapSection';
import FunCommunitySections from '@/features/fun/components/FunCommunitySections';
import FunMobilePage from '@/features/fun/components/FunMobilePage';
import FunReferralSection from '@/features/fun/components/FunReferralSection';
import LendingAssetTableSection from '@/features/lending/components/LendingAssetTableSection';
import LendingMobilePage from '@/features/lending/components/LendingMobilePage';
import LendingSummarySection from '@/features/lending/components/LendingSummarySection';
import ProfileAccountSections from '@/features/profile/components/ProfileAccountSections';
import ProfileMobilePage from '@/features/profile/components/ProfileMobilePage';
import ProfileWalletSection from '@/features/profile/components/ProfileWalletSection';
import '@/styles/defi-page.scss';
import '@/styles/fun-page.scss';
import '@/styles/lending-page.scss';
import '@/styles/profile-page.scss';
import '@/styles/dapp-page.scss';

type DappSection = 'defi' | 'lending' | 'fun' | 'nft' | 'my';

const sectionConfig = {
    defi: {
        frameClassName: 'dubai-frame-848_2',
        designHeight: 2473,
        mobileFallback: <DefiMobilePage />,
        content: (
            <>
                <DefiSwapSection />
                <DefiProtocolSection />
                <p className="dapp-terms-link">Important Notice &amp; Terms of Service</p>
            </>
        ),
    },
    fun: {
        frameClassName: 'dubai-frame-955_2',
        designHeight: 4125,
        mobileFallback: <FunMobilePage />,
        content: (
            <>
                <FunReferralSection />
                <FunCommunitySections />
            </>
        ),
    },
    lending: {
        frameClassName: 'dubai-frame-1050_3981',
        designHeight: 1870,
        mobileFallback: <LendingMobilePage />,
        content: (
            <>
                <div id="1050_4880" className="stroke-wrapper-1050_4880">
                    <div className="dubai-rectangle-1050_4880"></div>
                    <div className="stroke-1050_4880"></div>
                </div>
                <LendingSummarySection />
                <LendingAssetTableSection />
            </>
        ),
    },
    nft: {
        frameClassName: 'dapp-frame-nft',
        designHeight: 1080,
        mobileFallback: <DappNftMobilePage />,
        content: <DappNftPlaceholder />,
    },
    my: {
        frameClassName: 'dubai-frame-1005_197',
        designHeight: 1064,
        mobileFallback: <ProfileMobilePage />,
        content: (
            <>
                <div className="dapp-my-background-decor" aria-hidden="true"></div>
                <ProfileAccountSections />
                <ProfileWalletSection />
            </>
        ),
    },
} satisfies Record<
    DappSection,
    {
        frameClassName: string;
        designHeight: number;
        mobileFallback: ReactElement;
        content: ReactElement;
    }
>;

const resolveSection = (pathname: string): DappSection | null => {
    const section = pathname.split('/').filter(Boolean)[1];

    if (section === undefined) {
        return null;
    }

    if (
        section === 'defi' ||
        section === 'lending' ||
        section === 'fun' ||
        section === 'nft' ||
        section === 'my'
    ) {
        return section;
    }

    return null;
};

const DappPage = () => {
    const { pathname } = useLocation();

    if (pathname === '/dapp' || pathname === '/dapp/') {
        return <Navigate to="/dapp/defi" replace />;
    }

    const section = resolveSection(pathname);

    if (!section) {
        return <Navigate to="/dapp/defi" replace />;
    }

    const config = sectionConfig[section];

    return (
        <PageFrame
            frameId={`dapp-${section}`}
            frameClassName={config.frameClassName}
            designHeight={config.designHeight}
            mobileFallback={config.mobileFallback}
        >
            <DappChrome />
            {config.content}
        </PageFrame>
    );
};

export default DappPage;
