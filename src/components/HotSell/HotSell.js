import React, { Component } from 'react';
import { Table } from 'antd';
import styles from '../HotSell/HotSell.css';

class HotSell extends Component {
  render() {
    const bookList = this.props.book;
    const columns = [
        { title: 'NO', dataIndex: 'no' },
        { title: '书名', dataIndex: 'bookName' },
        { title: '作者', dataIndex: 'author' },
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
