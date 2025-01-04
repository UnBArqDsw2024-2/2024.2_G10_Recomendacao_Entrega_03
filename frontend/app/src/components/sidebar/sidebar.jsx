import React from 'react';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import icon5 from '../../assets/images/icon5.png';
import icon6 from '../../assets/images/icon6.png';
import icon7 from '../../assets/images/icon7.png';
import icon8 from '../../assets/images/icon8.png';
import icon9 from '../../assets/images/icon9.png';
import './sidebar.css';


function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <button className="icon-button">
            <img src={icon1} alt="Icon 1" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon2} alt="Icon 2" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon3} alt="Icon 3" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon4} alt="Icon 4" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon5} alt="Icon 5" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon6} alt="Icon 6" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon7} alt="Icon 7" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon8} alt="Icon 8" />
          </button>
        </li>
        <li>
          <button className="icon-button">
            <img src={icon9} alt="Icon 9" />
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
