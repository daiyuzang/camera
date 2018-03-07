import React, { Component } from 'react';
import { Divider, Col, Row, Card } from 'antd';
import styles from '../RecomList/RecomList.css';

class RecomList extends Component {

  render() {
    console.log(this.props.book.recommend);
    const recommend = this.props.book.recommend;
    const cover = recommend.map((item, key) => {
        return <a href={item} key={key}><img alt="recommend book" src={item} /></a>
    });

    return (
      <div>
        <Divider className={styles['divider']}>推荐类似商品</Divider>
        <Card
          className={styles['cards']}
          hoverable={false}
          style={{ width: 130 }}
          cover={cover}
          bordered={false}
        />
      </div>
    );
  }
}

export default RecomList;
