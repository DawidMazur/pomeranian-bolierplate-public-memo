<<<<<<< HEAD
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';
import { AppCookies } from './AppCookies';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader />
        {withSidebar && <AppAside />}
        <main>
          <Outlet />
        </main>
        <AppCookies />
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
=======
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader />
        {withSidebar && <AppAside />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
>>>>>>> cb1f00eac004749a93ef0ee67a825d9663c94f75
