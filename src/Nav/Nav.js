import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
  return (
    <div className="header-nav">
    <div className="contaner">
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">Обо мне</Link></li>
            </ul>
        </nav>
    </div>
</div>

  );
};
}

export default Nav;
