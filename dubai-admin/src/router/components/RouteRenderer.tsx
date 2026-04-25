import { Route, Routes } from 'react-router';
import { routes } from '../routes';

const RouteRenderer = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
        </Routes>
    );
};

export default RouteRenderer;
