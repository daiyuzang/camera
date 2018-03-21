import React, { Component } from 'react';
import { Collapse, message, Upload, Button, Icon } from 'antd';
import styles from '../CameraPhoto/CameraPhoto.css';

class CameraPhoto extends Component {
  
  // FileContent = (file) => {
  //   console.log(file)

  //   // Only process image files. 
  //   const that = this.props;
  //   if (file.type.match('image.*')) {
      
  //     const reader = new FileReader();
  //     let datas = [];
  //     // Closure to capture the file information.
  //     reader.onload = (function(theFile) {
  //         return function(e) {
  //         datas.push(e.target.result);
  //         datas.push(escape(theFile.name));
  //         datas.push(file.name);
  //         that.dispatch({
  //           type:'book/callHome',
  //           payload: datas
  //         })
  //       };
  //     })(file);

  //     // Read in the image file as a data URL.
  //     reader.readAsDataURL(file);
  //   }
  // }

  onChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`, 1, () => {
        this.props.dispatch({
          type: 'book/loadFile',
          payload: info.file,
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
          action="http://45.77.68.236:8080/crawler-starter"
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
