import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Contact from './Pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
