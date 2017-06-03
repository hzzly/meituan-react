import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'

import './style.scss'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index:0
        }
    }
    
    SwipeCategory(e){

		// this.setState({
		// 	index:parseInt(e.target.getAttribute("data-index"))
		// })

		e.preventDefault();
		e.stopPropagation();
	}

    render() {
        const opt = {
			auto: 5000,
			callback:(index)=>{
				this.setState({
					index: index
				})
			}
		}
        return (
            <div className="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul>
                            <li><Link to="/home"><i className="icon">&#xe65a;</i>景点</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe614;</i>KTV</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe606;</i>购物</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe654;</i>生活服务</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe65d;</i>健身运动</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe649;</i>美发</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe62e;</i>亲子</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe617;</i>小吃快餐</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe659;</i>自助餐</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe64b;</i>酒吧</Link></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <li><Link to="/home"><i className="icon">&#xe65c;</i>美食</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe6e3;</i>电影</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe678;</i>酒店</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe605;</i>休闲娱乐</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe703;</i>外卖</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe60b;</i>火锅</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe7c6;</i>丽人</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe616;</i>度假出行</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe601;</i>足疗按摩</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe613;</i>周边游</Link></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <li><Link to="/home"><i className="icon">&#xe602;</i>日本菜</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe6e5;</i>SPA</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe6e4;</i>结婚</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe604;</i>学习培训</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe61f;</i>西餐</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe62f;</i>火车机票</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe61b;</i>烧烤</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe603;</i>家装</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe672;</i>宠物</Link></li>
                            <li><Link to="/home"><i className="icon">&#xe6f4;</i>全部分类</Link></li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''} data-index="0" onClick={this.SwipeCategory.bind(this)}></li>
                        <li className={this.state.index === 1 ? "selected" : ''} data-index="1" onClick={this.SwipeCategory.bind(this)}></li>
                        <li className={this.state.index === 2 ? "selected" : ''} data-index="2" onClick={this.SwipeCategory.bind(this)}></li>
                    </ul>
                </div>
            </div>
        );
    }

    
}

export default Category;