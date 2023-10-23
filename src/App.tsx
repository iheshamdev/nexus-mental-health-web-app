import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6002ED',
            borderRadius: 4,
            controlHeight: 40,
          },
          // components: {
          //   Input: {
          //     controlHeight: 40,
          //   },
          // },
        }}
      >
        <Router basename={import.meta.env.VITE_BASE_DOMAIN}>
          <AppRoutes />
        </Router>
      </ConfigProvider>
    </>
  );
}

export default App;
