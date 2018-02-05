import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import MainLayout from '../components/MainLayout/MainLayout';
import BookDetail from '../components/BookDetail/BookDetail';

function Users(book) {
  return (
    <div>
      <MainLayout { ...book } />
      <div className={styles.normal}>
        <BookDetail { ... book } />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    book: state.book,
  }
}

export default connect(mapStateToProps)(Users);
