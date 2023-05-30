import React from 'react';

import {
  IndexView,
  Home as HomeView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  WebBasic as WebBasicView,
  Ecommerce as EcommerceView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/portfolio',
    renderer: (params = {}) => <CoworkingView {...params} />,
  },
  {
    path: '/e-learning',
    renderer: (params = {}) => <ElearningView {...params} />,
  },
  {
    path: '/web-basic',
    renderer: (params = {}) => <WebBasicView {...params} />,
  },
  {
    path: '/e-commerce',
    renderer: (params = {}) => <EcommerceView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}) => <CompanyTermsView {...params} />,
  },
  {
    path: '/contact-sidebar-map',
    renderer: (params = {}) => <ContactPageSidebarMapView {...params} />,
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}) => <ContactPageCoverView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutSideCoverView {...params} />,
  },
  {
    path: '/blog-search',
    renderer: (params = {}) => <BlogSearchView {...params} />,
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}) => <PasswordResetSimpleView {...params} />,
  },
  


  {
    path: '/signin-simple',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },


  {
    path: '/account-notifications',
    renderer: (params = {}) => <AccountNotificationsView {...params} />,
  },
  {
    path: '/account-security',
    renderer: (params = {}) => <AccountSecurityView {...params} />,
  },

  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
