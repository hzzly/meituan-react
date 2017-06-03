import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActions from '../../actions/app'

import './style.scss'

class LoadMore extends Component {
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }

    componentDidMount(){

		const wrapper = this.refs.wrapper
		const loadMoreFn = this.props.loadMoreFn
        const docDom = document.querySelector('#root')
        const screenHeight = document.body.offsetHeight
        const docDomHeight = docDom.clientHeight
        const app = this.props.app
		const callback = () => {
			const top = wrapper.getBoundingClientRect().top
            const docDomTop = docDom.scrollTop
            if (docDomTop > screenHeight/2 && !this.props.app.topBtnStatus) {
                app.topBtnStatus = true
                this.props.appAction.showTopBtn(app)
            } else if (docDomTop < screenHeight/2 && this.props.app.topBtnStatus) {
                app.topBtnStatus = false
                this.props.appAction.showTopBtn(app)
            }

			if(top && top < docDomHeight-100){
				loadMoreFn()
			}
		}

		//滚动事件
		let timeAction;
        docDom.addEventListener("scroll", () => {
            if(this.props.isLoadingMore){
				return;
			}

			if(timeAction){
				clearTimeout(timeAction);
			}

			timeAction = setTimeout(callback,50);
        });
	}
	loadMoreHandle(){
		this.props.loadMoreFn();
	}
}

function mapStateToProps(state){
	return {
		app: state.app
	}
}

function mapDispatchToProps(dispatch){
	return {
		appAction: bindActionCreators(appActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoadMore)