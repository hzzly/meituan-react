import React, { Component } from 'react';

import './style.scss'

class CityList extends Component {
    render() {
        // let cityListArr = ['北京','上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安']
        // let cityList = cityListArr.map((item) => {
        //     return `<li onClick={this.clickHandle.bind(this, ${item})}>${item}</li>`
        // })
        return (
            <ul className="city-list">
                <li onClick={this.clickHandle.bind(this, '北京')}>北京</li>
                <li onClick={this.clickHandle.bind(this, '上海')}>上海</li>
                <li onClick={this.clickHandle.bind(this, '杭州')}>杭州</li>
                <li onClick={this.clickHandle.bind(this, '广州')}>广州</li>
                <li onClick={this.clickHandle.bind(this, '苏州')}>苏州</li>
                <li onClick={this.clickHandle.bind(this, '深圳')}>深圳</li>
                <li onClick={this.clickHandle.bind(this, '南京')}>南京</li>
                <li onClick={this.clickHandle.bind(this, '天津')}>天津</li>
                <li onClick={this.clickHandle.bind(this, '重庆')}>重庆</li>
                <li onClick={this.clickHandle.bind(this, '厦门')}>厦门</li>
                <li onClick={this.clickHandle.bind(this, '武汉')}>武汉</li>
                <li onClick={this.clickHandle.bind(this, '西安')}>西安</li>
            </ul>
        );
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn 
        changeFn(cityName) 
    }
}

export default CityList;