import React, { Component } from 'react';
import { List } from 'antd';
import styles from '../IntroList/IntroList.css';

class IntroList extends Component {
  render() {
    const bookList = this.props.book;
    const data = [
        '书名： ' + bookList.bookName,
        '作者： ' + bookList.author,
        '出版社： ' + bookList.publishHouse,
        '出版时间： ' + bookList.publishTime,
        '图书编号： ' + bookList.bookNo,
    ];
    return (
      <List
        className={styles['list']}
        header={<div></div>}
        footer={<div></div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
    );
  }
}

export default IntroList;
