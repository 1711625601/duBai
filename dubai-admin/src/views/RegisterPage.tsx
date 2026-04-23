import PageFrame from '@/components/layout/PageFrame';
import RegisterAuthSection from '@/features/register/components/RegisterAuthSection';
import RegisterChrome from '@/features/register/components/RegisterChrome';
import RegisterPreviewSection from '@/features/register/components/RegisterPreviewSection';
import '@/styles/register-page.scss';

const RegisterPage = () => {
    return (
        <PageFrame frameId="988_4" frameClassName="dubai-frame-988_4">
            <RegisterPreviewSection />
            <RegisterChrome />
            <RegisterAuthSection />
        </PageFrame>
    );
};

export default RegisterPage;
