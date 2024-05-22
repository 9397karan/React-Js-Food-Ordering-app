import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Success } from './Pages/Success';
import { Error } from './Pages/Error';
import { Protected } from './components/Protected';

function App() {
  return (
    <>
      <BrowserRouter basename="/React-Js-Food-Ordering-app">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Protected element={<Success/>}/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
