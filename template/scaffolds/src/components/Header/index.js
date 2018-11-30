import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBar,
  Icon,
} from 'antd-mobile';

import styles from './index.less';

function Header({
  title,history,
}) {
  return (
    <div className={styles.normal}>
      <NavBar
        // mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => {
          history.goBack();
        }}
        // rightContent={[
        //   <Icon key="0" type="search" />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      >{title}</NavBar>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

