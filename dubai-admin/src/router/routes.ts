import { createElement } from 'react';
import { Navigate } from 'react-router';

import DappPage from '@/views/DappPage';
import HomePage from '@/views/HomePage';
import RegisterPage from '@/views/RegisterPage';

const LegacyDefiRoute = () => createElement(Navigate, { to: '/dapp/defi', replace: true });
const LegacyFunRoute = () => createElement(Navigate, { to: '/dapp/fun', replace: true });
const LegacyLendingRoute = () => createElement(Navigate, { to: '/dapp/lending', replace: true });
const LegacyProfileRoute = () => createElement(Navigate, { to: '/dapp/my', replace: true });

export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/dapp/*',
        component: DappPage,
    },
    {
        path: '/defi',
        component: LegacyDefiRoute,
    },
    {
        path: '/fun',
        component: LegacyFunRoute,
    },
    {
        path: '/lending',
        component: LegacyLendingRoute,
    },
    {
        path: '/register',
        component: RegisterPage,
    },
    {
        path: '/profile',
        component: LegacyProfileRoute,
    },
];
