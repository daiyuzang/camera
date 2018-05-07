import React, { Component } from 'react';
import { Collapse, message, Upload, Button, Icon } from 'antd';
import styles from '../CameraPhoto/CameraPhoto.css';

class CameraPhoto extends Component {


  onChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`, 1, () => {
        this.props.dispatch({
          type: 'book/FiletoHome',
          payload: info.file.response,
        });
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return (
      <div className={styles['input-button']}>
        <Upload
          name="file"
          accept="image/*"
          action="http://localhost:7777/crawler-starter"
          showUploadList={true}
          // beforeUpload={this.FileContent}
          onChange={this.onChange}
        >
          <Button><Icon type="upload" /> Click to Upload</Button>
        </Upload>
      </div>
    );
  }
}

export default CameraPhoto;
