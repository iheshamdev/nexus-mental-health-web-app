import AppRoutes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename={import.meta.env.VITE_BASE_DOMAIN}>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
