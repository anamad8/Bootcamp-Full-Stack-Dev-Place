import React from 'react';
import style from'./Heder.module.css';
import logo from '../../img/yl.png'
import { Link } from 'react-router-dom';
import {BsCart3} from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>
        <div className={style.link}>
            <Link to="/">Home</Link>
            <Link>Mujer</Link>
            <Link>Hombre</Link>
            <Link>FAQ</Link>
        </div>
        <div className={style.buscar}>
          <input type="text" placeholder='Buscar...'/>
          <button><FaSearch/></button>
        </div>
        <div className={style.cart}>
            <BsCart3 className={style.icon}/>
            <span>0</span>
        </div>
    </div>
  )
}

export default Header