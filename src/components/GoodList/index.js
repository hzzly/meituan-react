import React, { Component } from 'react';

import GoodListItem from '../../components/GoodListItem'

import './style.scss'
let h2Style = {
    height: '4rem',
    lineHeight: '4rem',
    textAlign: 'center',
    color: 'rgb(128, 125, 125)',
    fontWeight: '300',
    fontSize: '1.4rem',
    borderBottom: '1px solid #f1f1f1'
}

class GoodList extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#fff'}}>
                <h2 style={h2Style}>- 猜你喜欢 -</h2>
                <div className="list">
                    {this.props.data.map((item,index)=>{
						return <GoodListItem key={index} data={item} />
					})}
                </div>
            </div>
        );
    }
}

export default GoodList;