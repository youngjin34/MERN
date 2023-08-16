import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/BackDrop';

import './MainNavigation.css';

const MainNavigation = () => {
  const [drawerisOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return <div>
    {drawerisOpen && <Backdrop onClick={closeDrawerHandler} />}
    <SideDrawer show={drawerisOpen} onClick={closeDrawerHandler}>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>
    <MainHeader>
      <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>YourPlaces</Link>
      </h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
    </MainHeader>
  </div>
};

export default MainNavigation;