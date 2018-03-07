import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

class Header extends Component {
  state = {
    pathname: '/',
  }

  handldClick = (e) =>{
    this.setState({
      pathname: e.key,
    });
    console.log(e.key)
  }

  render() {
    return (
      <Menu
        onClick={this.handldClick}
        selectedKeys={[this.state.pathname]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="compares">
          <Icon type="bars" />Compares
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
