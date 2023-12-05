import { AntCofigWrapper, AppLayout } from '@components';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        {' '}
        <PersistGate loading={null} persistor={persistor}>
          <AntCofigWrapper>
            <Router basename={import.meta.env.VITE_BASE_DOMAIN}>
              <QueryClientProvider client={queryClient}>
                <AppLayout>
                  <AppRoutes />
                </AppLayout>
              </QueryClientProvider>
            </Router>
          </AntCofigWrapper>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
