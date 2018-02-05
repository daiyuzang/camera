import React from 'react';
import { connect } from 'dva';
import CameraPhoto from '../components/CameraPhoto/CameraPhoto';
import styles from './Camera.css';

function Camera(book) {
    
    return (
      <CameraPhoto { ...book } />
    );
  }

function mapStateToProps(state) {
    return {
      book: state.book,
    };
  }
  
  export default connect(mapStateToProps)(Camera);
  