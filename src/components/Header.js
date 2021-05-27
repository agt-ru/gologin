import React from 'react'
import Search from './Search';
import '../styles/Header.css';
import green_plus from '../img/green_plus.png';
import folder from '../img/folder.png';
import down_arrow from '../img/down_arrow.png';

const Header = () => {
  return (
    <div className="header">
      <h1>Profiles</h1>
      <Search />
      <button className="new-profile-button"><img src={green_plus} alt="add" className="new-profile-button__icon"/>Create new profile</button>
      <button className="folders-button"><img src={folder} alt="folder" className="folders-button__icon"/>Folders</button>
      <button className="curr-user-button">
        <div className="curr-user-button__circle">S</div>
        <img src={down_arrow} alt="down arrow" className="curr-user-button__icon"/>
      </button>
    </div>
  )
}

export default Header
