import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './style.scss'

class GoodListItem extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className="good-item">
                <Link to={'/detail/'+data.id}>
                    <div className="item-img">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <h2 className="name">{data.title}</h2>
                        <p className="desc">{data.subTitle}</p>
                        <p className="place">新建县</p>
                        <p className="price">￥<span>{data.price}</span></p>
                        <div className="destent">{data.distance}</div>
                        <div className="sell">已售{data.number}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default GoodListItem;