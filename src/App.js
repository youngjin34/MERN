import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {

  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='/places/new' element={<NewPlace />} />
          <Route path='/places/:placeId' element={<UpdatePlace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
