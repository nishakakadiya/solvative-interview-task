import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router';
import Categories from './pages/categories/Categories';
import TopBar from './components/top-bar/TopBar';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';
import QuizContext from './context/QuizContext';

const RouteWrapper = ({ children }) => {
  const { selectedCategory } = useContext(QuizContext);

  return (
    <React.Suspense
      fallback={
        <div
          width="100%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Loading...
        </div>
      }
    >
      {selectedCategory ? children : <Navigate to={'/'} />}
    </React.Suspense>
  );
};

const AppRouting = () => {
  const router = useRoutes([
    {
      path: '/',
      Component: Categories,
    },
    {
      path: '/quiz',
      element: (
        <RouteWrapper>
          <Quiz />
        </RouteWrapper>
      ),
    },
    {
      path: '/result',
      element: (
        <RouteWrapper>
          <Result />
        </RouteWrapper>
      ),
    },
  ]);

  return (
    <>
      <TopBar />
      {router}
    </>
  );
};

export default AppRouting;
