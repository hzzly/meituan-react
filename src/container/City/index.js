import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userinfoActions from '../../actions/userinfo'

class City extends Component {
    render() {
        return (
            <div>
                <Header title="选择城市">
                    <i className="icon">&#xe622;</i>
                    <i className="icon">&#xe62b;</i>
                </Header>
                <div className="content-wrap">
                    <CurrentCity cityName={this.props.userinfo.cityName}></CurrentCity>
                    <h2 style={{fontWeight: 'normal',padding: '1rem',fontSize: '1.6rem',background: '#fff',color: 'rgba(0,0,0,.6)'}}>热门城市</h2>
                    <CityList changeFn={this.changeCity.bind(this)}></CityList>
                </div>
            </div>
        );
    }

    changeCity(newCity) {
        console.log(newCity)
        // 将新选择的城市设置为当前城市 
        // 1. 修改 redux 
        // 2. 修改 localStorage 
        // 3. 跳转到首页
        if(newCity == null){
			return
		}

		const userinfo = this.props.userinfo
		userinfo.cityName = newCity
		this.props.userinfoAction.update(userinfo)

		//修改localStoreage
		// LocalStore.setItem(CITYNAME,newCity)

		//路由跳转
		this.props.history.push('/home');
    }
}

function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userinfoAction: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City)