/* eslint-disable function-paren-newline */
import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom';
import { LayoutDashboard } from '@/layouts';
import {
  StatisticPage,
  DeliveriesPage,
  PlansPage,
  PreferencesPage,
  RecipesPage,
  SubscriptionPage,
  UsersPage,
  LoginPage,
} from '@/pages';
import { SIDEBAR_ITEMS } from '@/constants';

const getPageComponent = (title) => {
  switch (title) {
    case 'Subscriptions':
      return <SubscriptionPage />;
    case 'Deliveries':
      return <DeliveriesPage />;
    case 'Users':
      return <UsersPage />;
    case 'Plans':
      return <PlansPage />;
    case 'Recipes':
      return <RecipesPage />;
    case 'Preferences':
      return <PreferencesPage />;
    default:
      return (
        <div>
          <h1>Not Found</h1>
        </div>
      );
  }
};

export const router = createBrowserRouter([
  {
    path: 'dashboard/*',
    element: (
      <Routes>
        <Route
          index
          element={
            <LayoutDashboard>
              <StatisticPage />
            </LayoutDashboard>
          }
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        {SIDEBAR_ITEMS.flatMap((category) =>
          category.items.map((item) => (
            <Route
              key={item.title}
              path={item.path.replace('/dashboard', '')}
              element={<LayoutDashboard>{getPageComponent(item.title)}</LayoutDashboard>}
            />
          ))
        )}
      </Routes>
    ),
  },
  {
    path: '/*',
    element: <Navigate to="/dashboard" />,
  },
]);
