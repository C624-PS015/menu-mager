import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { LayoutDashboard } from '@/layouts';
import {
  StatisticPage,
  PlansPage,
  PreferencesPage,
  RecipesPage,
  SubscriptionPage,
  LoginPage,
  AllergiesPage,
  IngredientsPage,
  NotFoundPage,
} from '@/pages';
import { SIDEBAR_ITEMS } from '@/constants';
import { PrivateRoute } from './PrivateRoute';
import { ProtectedRoute } from './ProtectedRoute';

const pageComponents = {
  'Subscription Plan': <SubscriptionPage />,
  'Meal Plans': <PlansPage />,
  Recipes: <RecipesPage />,
  Preferences: <PreferencesPage />,
  Allergies: <AllergiesPage />,
  Ingredients: <IngredientsPage />,
};

const getPageComponent = (title) => {
  return pageComponents[title] || <NotFoundPage />;
};

export const router = createBrowserRouter([
  {
    path: 'dashboard/*',
    element: (
      <Routes>
        <Route
          path="/login"
          element={<ProtectedRoute element={<LoginPage />} />}
        />
        <Route
          index
          element={
            <PrivateRoute
              element={
                <LayoutDashboard>
                  <StatisticPage />
                </LayoutDashboard>
              }
            />
          }
        />
        {SIDEBAR_ITEMS.flatMap((category) =>
          category.items.map((item) => (
            <Route
              key={item.title}
              path={item.path.replace('/dashboard', '')}
              element={<PrivateRoute element={<LayoutDashboard>{getPageComponent(item.title)}</LayoutDashboard>} />}
            />
          ))
        )}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
