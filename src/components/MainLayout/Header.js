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
    const pathname = e.key;
    console.log(pathname)
    if (pathname === "/compares") {
      this.props.dispatch({
        type: 'book/callDetails',
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
        <Menu.Item key="/home">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="/compares">
          <Icon type="bars" />Compares
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
