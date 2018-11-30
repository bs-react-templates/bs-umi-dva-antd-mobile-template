import React from 'react';
import {NavBar ,Icon} from 'antd-mobile'
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import {Route,Redirect,Switch} from 'dva/router';
import styles from './index.less'
import qs from 'qs';
import Header from 'components/Header';
import Footer from 'components/Footer';
export default class BasicLayout extends React.PureComponent {
	static childContextTypes = {
		location: PropTypes.object,
	};
	getChildContext() {
		const {location} = this.props;
		return {
			location,
		};
	}
	getPageTitle() {
		const {
			routerData,
			location,
		} = this.props;
		let {
			pathname,
			search,
		} = location;
		let pathObj = qs.parse(search.substr(1));
		let title = 'dva-antd-mobile-starter-master';
		if (pathObj.title) {
			title = pathObj.title + 'dva-antd-mobile-starter-master';
		} else if (routerData[pathname] && routerData[pathname].name) {
			title = `${routerData[pathname].name} - dva-antd-mobile-starter-master`;
		}
		return title;
	}

	render() {
		const {
			routerData,
			location,
			history,
			children,
	} = this.props;
		let {
			pathname,
			search,
		} = location;
		let pathObj = qs.parse(search.substr(1));
		let titleName;
		if (pathObj.title) {
			titleName = pathObj.title;
		} else if (routerData[pathname] && routerData[pathname].name) {
			titleName = routerData[pathname].name;
		} else {
			titleName = '';
		}
		const tabData = [
			{
				title:'首页',
				path:'/home',
				icon:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
				selectedIcon:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
			},
			{
				title:'第一页',
				path:'/page01',
				icon:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
				selectedIcon:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
			},
			{
				title:'第二页',
				path:'/page02',
				icon:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
				selectedIcon:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
			},
			{
				title:'第三页',
				path:'/page03',
				icon:'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
				selectedIcon:'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
			},
		];
		return (<DocumentTitle title={this.getPageTitle()}>
		<div className={styles['sc-app']}>
			{
				(pathname!=='/' && pathname!=='/home')?
					<Header title={titleName} history={history} />:null
			}
			<div>
				{tabData.length>0?<Footer
					location={location}
					childrens={children}
					tabData={tabData}
				/>:<div className={styles['sc-app-content']}>{children}</div>}
			</div>
		</div>
	</DocumentTitle>)
	}
}