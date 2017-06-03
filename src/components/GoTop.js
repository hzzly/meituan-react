import React, { Component } from 'react';

class GoTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topBtnShow: false
        }
    }
    render() {
        let TopBtnStyle = {
            position: 'absolute',
            bottom: '7rem',
            // right: '2rem',
            marginLeft: '28rem',
            width: '4.5rem',
            height: '4.5rem',
            lineHeight: '5rem',
            textAlign: 'center',
            borderRadius: '50%',
            backgroundColor: 'rgba(233, 32, 61, .8)',
            cursor: 'pointer'
        }
        let IconStyle = {
            fontSize: '3rem'
        }

        return (
            <div className="top-btn" style={TopBtnStyle} onClick={this.handleClick.bind(this)}>
                {/*<span>{`${this.props.show}`}</span>*/}
                <i className="icon" style={IconStyle}>&#xe651;</i>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.show)
    }

    handleClick() {
        let domHook = this.props.domHook
        let domWrap = document.querySelector(domHook)
        let timer;
        timer = setInterval(() => {
            domWrap.scrollTop -= domWrap.scrollTop*0.1
            if (domWrap.scrollTop <= 0) {
                clearInterval(timer)
            }
        }, 10)
    }
}

export default GoTop;