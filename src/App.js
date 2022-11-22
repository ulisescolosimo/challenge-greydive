import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details';
import Home from './pages/Home';
import Layout from './layout/Layout';

function App() {
  
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
