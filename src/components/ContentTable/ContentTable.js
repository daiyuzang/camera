import React, { Component } from 'react';
import { Card } from 'antd';
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
    const data = this.props.book.content;
    console.log(typeof data)
    return (
      <Card        
        title="内容概述"
        className={styles['table']}
      >
        <div dangerouslySetInnerHTML={{__html: data}} />
      </Card>
    );
  }
}

export default ContentTable;
