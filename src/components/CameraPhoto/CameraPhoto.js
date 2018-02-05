import React, { Component } from 'react';
import { Collapse } from 'antd';
import styles from '../CameraPhoto/CameraPhoto.css';

class CameraPhoto extends Component {
  
  FileContent = (file) => {
    this.props.dispatch({
      type: 'book/callHome',
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input onChange={this.FileContent} type="file" />
      </div>
    );
  }
}

export default CameraPhoto;
