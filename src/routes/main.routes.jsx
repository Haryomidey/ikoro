import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/home';
import About from '../pages/about';
import News from '../pages/news';
import Directory from '../pages/directory';
import Gallery from '../pages/gallery';
import Contact from '../pages/contact';
import NotFound from '../pages/error/NotFound';
import ScrollToTop from '../components/ScrollToTop';
import Dignitaries from '../pages/dignitaries';
import Business from '../pages/business';
import Government from '../pages/government';
import Culture from '../pages/culture';
import History from '../pages/history';

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/news",
    element: (
      <MainLayout>
        <News />
      </MainLayout>
    ),
  },
  {
    path: "/directory",
    element: (
      <MainLayout>
        <Directory />
      </MainLayout>
    ),
  },
  {
    path: "/gallery",
    element: (
      <MainLayout>
        <Gallery />
      </MainLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
  {
    path: "/dignitaries",
    element: (
      <MainLayout>
        <Dignitaries />
      </MainLayout>
    ),
  },
  {
    path: "/business",
    element: (
      <MainLayout>
        <Business />
      </MainLayout>
    ),
  },
  {
    path: "/government",
    element: (
      <MainLayout>
        <Government />
      </MainLayout>
    ),
  },
  {
    path: "/culture",
    element: (
      <MainLayout>
        <Culture />
      </MainLayout>
    ),
  },
  {
    path: "/history",
    element: (
      <MainLayout>
        <History />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
