import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Header from '../components/MainLayout/Header';
// import src from '../assets/10.jpg';
import IntroList from '../components/IntroList/IntroList';
import HotSell from '../components/HotSell/HotSell';
import ContentTable from '../components/ContentTable/ContentTable';
import RecomList from '../components/RecomList/RecomList';

function IndexPage(book) {
  const src = book.book.bookImg;
  return (
    <div>
      <Header { ...book } />
      <div className={styles.normal}>
        <div className={styles.welcome}>
          <img src={src} alt="books" />
          <IntroList { ...book } />
          <ContentTable { ...book } />
        </div>
        <HotSell { ...book } />
        <RecomList { ...book } />
        <div className={styles['copyright']}>Copyright ©2018 Graduate Project of Sherry Huang</div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    book: state.book,
  };
}

export default connect(mapStateToProps)(IndexPage);
