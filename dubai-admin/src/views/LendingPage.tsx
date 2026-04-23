import PageFrame from '@/components/layout/PageFrame';
import LendingAssetTableSection from '@/features/lending/components/LendingAssetTableSection';
import LendingChrome from '@/features/lending/components/LendingChrome';
import LendingSummarySection from '@/features/lending/components/LendingSummarySection';
import '@/styles/lending-page.scss';

const LendingPage = () => {
    return (
        <PageFrame frameId="1050_3981" frameClassName="dubai-frame-1050_3981">
            <LendingChrome />
            <LendingSummarySection />
            <LendingAssetTableSection />
        </PageFrame>
    );
};

export default LendingPage;
