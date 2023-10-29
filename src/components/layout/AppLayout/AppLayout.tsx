import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@components';

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const routesWithoutLayout = ['/login'];
  const location = useLocation();
  const showLayout = !routesWithoutLayout.includes(location.pathname);

  if (showLayout) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
  return children;
};

export default AppLayout;
