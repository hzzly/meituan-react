import React, { Component } from 'react';

import './style.scss'

class CardAd extends Component {
    render() {
        return (
            <div className="card-ad">
                <h2>超值特惠</h2>
                {this.props.data.map((item, index) => {
                    return <div key={index} className="ad-item">
                        <a href={item.link} target="_blank">
                            <img src={item.img} alt={item.title} />
                        </a>
                    </div>
                })}
            </div>
        );
    }
}

export default CardAd;