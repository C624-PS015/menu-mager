import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom';
import { LayoutBase } from '@/layouts';
import { StatisticPage } from '@/pages';
import { SIDEBAR_ITEMS } from '@/constants';
import {
  DeliveriesPage,
  PlansPage,
  PreferencesPage,
  RecipesPage,
  SubscriptionPage,
  UsersPage,
} from '@/pages';

export const router = createBrowserRouter([
  {
    path: 'dashboard/*',
    element: (
      <LayoutBase>
        <Routes>
          <Route
            index
            element={<StatisticPage />}
          />
          {SIDEBAR_ITEMS.flatMap((category) =>
            category.items.map((item) => (
              <Route
                key={item.path}
                path={item.path.replace('/dashboard', '')}
                element={
                  item.title === 'Subscriptions' ? (
                    <SubscriptionPage />
                  ) : item.title === 'Deliveries' ? (
                    <DeliveriesPage />
                  ) : item.title === 'Users' ? (
                    <UsersPage />
                  ) : item.title === 'Plans' ? (
                    <PlansPage />
                  ) : item.title === 'Recipes' ? (
                    <RecipesPage />
                  ) : item.title === 'Preferences' ? (
                    <PreferencesPage />
                  ) : (
                    <div>
                      <h1>Not Found</h1>
                    </div>
                  )
                }
              />
            ))
          )}
        </Routes>
      </LayoutBase>
    ),
  },
  {
    path: '/*',
    element: <Navigate to="/dashboard" />,
  },
]);
