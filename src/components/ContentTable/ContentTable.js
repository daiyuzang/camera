import React, { Component } from 'react';
import { Table } from 'antd';
import styles from '../ContentTable/ContentTable.css';

class ContentTable extends Component {
  render() {
    const bookList = this.props.book;
    const columns = [
        { 
          title: '内容概述',
          dataIndex: 'bookContent',
        }
    ];
    
    const pagination = {
        pageSize: 1,
        hideOnSinglePage: true,
    }
    return (
      <Table
        size='default'
        columns={columns}
        bordered
        pagination={pagination}
        dataSource={this.props.book.content}
        className={styles['table']}
      />
    );
  }
}

export default ContentTable;
