import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

class Header extends Component {
  state = {
    pathname: '/home',
  }

  handldClick = (e) =>{
    this.setState({
      pathname: e.key,
    });
    if (this.state.pathname === "/home") {
      this.props.dispatch({
        type: 'book/callHome',
      });
    }
  }

  render() {
    return (
      <Menu
        onClick={this.handldClick}
        selectedKeys={[this.state.pathname]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/users">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="/home">
          <Icon type="bars" />Users
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
