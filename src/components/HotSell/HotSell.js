import React, { Component } from 'react';
import { Table } from 'antd';
import styles from '../HotSell/HotSell.css';

class HotSell extends Component {
  render() {
    const bookList = this.props.book;
    const columns = [
        { title: '电商品牌', dataIndex: 'no' },
        { title: '价格', dataIndex: 'money' },
        { title: '书名', dataIndex: 'name' },
    ];
    const pagination = {
        pageSize: 10,
        hideOnSinglePage: true,
    }
    console.log(this.props.book);
    return (
      <Table
        size='default'
        pagination={pagination}
        columns={columns}
        title={() => '其他推荐'}
        dataSource={this.props.book.hot}
        className={styles['list']}
      />
    );
  }
}

export default HotSell;
