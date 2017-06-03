import React, { Component } from 'react';

import './style.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <span className="icon-left" onClick={this.clickHandle.bind(this)}>{this.props.children[0]}</span>
                <div className="title">{this.props.title}</div>
                <span className="icon-right">
                    {this.props.children[1] ? this.props.children[1] : ''}
                </span>
            </header>
        );
    }
    clickHandle() {
        window.history.back()
    }
}

export default Header;