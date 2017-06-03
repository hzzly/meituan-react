import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="check-city">
                    <Link to="/city">
                        {this.props.cityName}
                        <i className="icon icon-city">&#xe669;</i>
                    </Link>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="搜点什么呢。。。"/>
                    <i className="icon icon-search">&#xe63a;</i>
                </div>
                <div className="sweep-code">
                    <i className="icon icon-sweep">&#xe630;</i>
                     扫码
                </div>
            </header>
        );
    }
}

export default Header;