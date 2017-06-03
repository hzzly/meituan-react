import React, { Component } from 'react';

class CurrentCity extends Component {
    render() {
        let CurrentCityStyle = {
            height: '5rem',
            lineHeight: '5rem',
            borderTop: '1px solid #f1f1f1',
            borderBottom: '1px solid #e5e5e5',
            backgroundColor: '#fff',
            fontSize: '1.6rem',
            paddingLeft: '1rem'
        }
        return (
            <div style={CurrentCityStyle}>
                您正在看：{this.props.cityName}
            </div>
        );
    }
}

export default CurrentCity