import React, { Component } from 'react';
import { connect } from 'react-redux'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import TenHeight from '../../components/TenHeight'
import CardAd from '../../components/CardAd'
import GoodList from '../../components/GoodList'
import LoadMore from '../../components/LoadMore'
import GoTop from '../../components/GoTop'

import AdData from '../../../mock/home/ad'
import { getAdData } from '../../fetch/home/home'

import ListData from '../../../mock/home/list'
import { getListData } from '../../fetch/home/home'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasMore: false,
			isLoadingMore: false,
			adData: [],
			goodsListDate: [],
			page: 0
		}
	}

	componentWillMount() {
		// if (this.props.match.path.split('/').length) {
			
		// }
		console.log(this.props.match)
	}
	render() {
		return (
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
				<div className="content-wrap">
					<Category></Category>
					<TenHeight></TenHeight>
					<CardAd data={this.state.adData}></CardAd>
					<TenHeight></TenHeight>

					{
						this.state.goodsListDate.length
							? <GoodList data={this.state.goodsListDate}></GoodList>
							: <div>{/*加载中*/}</div>
					}
					{
						this.state.hasMore
							? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
							: <div className="load-more"><span>没有更多了</span></div>
					}
				</div>
				{
					this.props.app.topBtnStatus
						? <GoTop show={this.props.app.topBtnStatus} domHook={'#root'}></GoTop>
						: ''
				}
			</div>
		);
	}

	componentDidMount() {
		this.getAdDataFun()

		const cityName = this.props.userinfo.cityName
		const result = getListData(cityName, 0)
		this.getGoodsListFun(result)
	}

	getAdDataFun() {
		const result = getAdData();
		result.then(res => {
			if (res.ok) {
				return res.json();
			} else {
				return AdData;
			}
		}).then(json => {
			const data = json;
			// console.log(data)
			if (data.length) {
				this.setState({
					adData: data
				})
			}
		}).catch(err => {
			console.log(err.message);
		})
	}

	getGoodsListFun(result) {
		result.then(res => {
			if (res.ok) {
				return res.json()
			} else {
				console.log("当前城市：" + this.props.cityName);
				console.log("当前页码：" + this.state.page);
				return ListData;
			}
		}).then(json => {
			const data = json.data;
			const hasMore = json.hasMore;
			// console.log(data)
			this.setState({
				hasMore: hasMore,
				goodsListDate: this.state.goodsListDate.concat(data),
				isLoadingMore: false
			})

		}).catch(err => {
			console.log(err.message);
		})
	}

	loadMoreData() {
		if (this.state.page >= 5) {
			this.setState({
				hasMore: false
			})
			return
		}
		//记录状态
		this.setState({
			isLoadingMore: true
		})


		const cityName = this.props.cityName
		const page = this.state.page
		const result = getListData(cityName, page)
		this.getGoodsListFun(result)

		//增加page
		this.setState({
			page: page + 1
		})
	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
		app: state.app
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)