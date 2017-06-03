import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './style.scss'

class Tabar extends Component {
    render() {
        return (
            <ul className="tabar">
                <li className="tabar-item">
                    <NavLink to="/home">
                        <i className="icon">&#xe62b;</i>
                        首页
                    </NavLink>
                </li>
                <li className="tabar-item">
                    <NavLink to="/near">
                        <i className="icon">&#xe65f;</i>
                        附近
                    </NavLink>
                </li>
                <li className="tabar-item">
                    <NavLink to="/stroll">
                        <i className="icon">&#xe629;</i>
                        逛一逛
                    </NavLink>
                </li>
                <li className="tabar-item">
                    <NavLink to="/order">
                        <i className="icon">&#xe615;</i>
                        订单
                    </NavLink>
                </li>
                <li className="tabar-item">
                    <NavLink to="/user">
                        <i className="icon">&#xe609;</i>
                        我的
                    </NavLink>
                </li>
            </ul>
        );
    }
}

export default Tabar;