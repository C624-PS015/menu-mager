import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { LayoutDashboard } from '@/layouts';
import {
  PlansPage,
  PreferencesPage,
  RecipesPage,
  SubscriptionPage,
  LoginPage,
  AllergiesPage,
  IngredientsPage,
  NotFoundPage,
  DashboardPage,
  LandingPage,
  ChoosePlanPage,
  FillAddressPage,
} from '@/pages';
import { DASHBOARD_URLS, USER_URLS } from '@/constants';
import { PrivateRoute } from './PrivateRoute';
import { ProtectedRoute } from './ProtectedRoute';

const pageComponents = {
  'Subscription Plan': <SubscriptionPage />,
  'Meal Plans': <PlansPage />,
  Recipes: <RecipesPage />,
  Preferences: <PreferencesPage />,
  Allergies: <AllergiesPage />,
  Ingredients: <IngredientsPage />,

  'Landing Page': <LandingPage />,
  'Select Subscription Plan': <ChoosePlanPage />,
  'Fill Address': <FillAddressPage />,
  'Select Meals': <div>Order Select Meals</div>,
  Payment: <div>Order Payment</div>,
  'Register User': <div>Register User</div>,
  'Login User': <div>Login User</div>,
};

const getPageComponent = (title) => {
  return pageComponents[title] || <NotFoundPage />;
};

export const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <Routes>
        {USER_URLS.map((item) => (
          <Route
            key={item.title}
            path={item.path}
            element={getPageComponent(item.title)}
          />
        ))}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    ),
  },
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
                  <DashboardPage />
                </LayoutDashboard>
              }
            />
          }
        />
        {DASHBOARD_URLS.flatMap((category) =>
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
]);
