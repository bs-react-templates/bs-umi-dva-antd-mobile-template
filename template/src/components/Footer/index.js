import React from 'react';
import PropTypes from 'prop-types';
import Router from 'umi/router';
import {
  TabBar,
} from 'antd-mobile';
import {
  connect,
} from 'dva';

import styles from './index.less';

function Footer({
  childrens,
  location,
  tabData,
}) {
  return (
    <div className={styles.normal}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
       {tabData.map((item, index) => {
         let {title,icon,selectedIcon,path} = item;
         return <TabBar.Item
                 title={title}
                 key={index}
                 icon={
                   <div style={{
                     width: '22px',
                     height: '22px',
                     background: 'url('+icon+') center center /  21px 21px no-repeat' }}
                   />
                 }
                 selectedIcon={
                   <div style={{
                     width: '22px',
                     height: '22px',
                     background: 'url('+selectedIcon+') center center /  21px 21px no-repeat' }}
                   />
                 }
                 selected={location.pathname === path}
                 onPress={() => Router.push(path)}
               >
               <div className={styles['sc-app-content']}>
                 {childrens}
                 </div>
               </TabBar.Item>
       })}
      </TabBar>
    </div>
  );
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  childrens: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Footer);
