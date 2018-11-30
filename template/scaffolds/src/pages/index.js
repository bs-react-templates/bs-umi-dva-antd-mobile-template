import React from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
function IndexPage() {
  return <Redirect to='/home'/>;
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    
  };
}

export default connect(mapStateToProps)(IndexPage);


