import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Sidebar, HeaderPage } from '@/components';
import { SIDEBAR_ITEMS } from '@/constants';

export function LayoutDashboard({ children }) {
  const currPath = useLocation().pathname;
  const currentTitle = SIDEBAR_ITEMS.find((group) => group.items.some((item) => item.path === currPath)).items.find(
    (item) => item.path === currPath
  ).title;

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content ml-0 lg:ml-64">
        <HeaderPage />
        <main className="overflow-y-auto px-6 py-5 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary mb-5">{currentTitle}</h1>
          {children}
        </main>
      </div>
      <Sidebar
        items={SIDEBAR_ITEMS}
        active={currentTitle}
      />
    </div>
  );
}

LayoutDashboard.propTypes = {
  children: PropTypes.node.isRequired,
};
