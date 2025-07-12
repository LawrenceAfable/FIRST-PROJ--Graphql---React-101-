import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
