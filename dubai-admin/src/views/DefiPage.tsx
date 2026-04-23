import PageFrame from '@/components/layout/PageFrame';
import DefiChrome from '@/features/defi/components/DefiChrome';
import DefiProtocolSection from '@/features/defi/components/DefiProtocolSection';
import DefiSwapSection from '@/features/defi/components/DefiSwapSection';
import '@/styles/defi-page.scss';

const DefiPage = () => {
    return (
        <PageFrame frameId="848_2" frameClassName="dubai-frame-848_2">
            <DefiChrome />
            <DefiSwapSection />
            <DefiProtocolSection />
        </PageFrame>
    );
};

export default DefiPage;
