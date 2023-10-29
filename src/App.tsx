import { AntCofigWrapper, AppLayout } from '@components';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <AntCofigWrapper>
        <Router basename={import.meta.env.VITE_BASE_DOMAIN}>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </AntCofigWrapper>
    </>
  );
}

export default App;
