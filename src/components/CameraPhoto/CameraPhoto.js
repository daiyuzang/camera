import React, { Component } from 'react';
import { Collapse, Upload, Button } from 'antd';
import styles from '../CameraPhoto/CameraPhoto.css';

class CameraPhoto extends Component {
  
  FileContent = (file) => {
    console.log(file)

    // Only process image files. 
    const that = this.props;
    if (file.type.match('image.*')) {
      
      const reader = new FileReader();
      let datas = [];
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
          return function(e) {
          datas.push(e.target.result);
          datas.push(escape(theFile.name));
          that.dispatch({
            type:'book/callHome',
            payload: datas
          })
        };
      })(file);

      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className={styles['input-button']}>
        <Upload
          name="file"
          accept="image/*"
          action="//jsonplaceholder.typicode.com/posts/"
          showUploadList={false}
          beforeUpload={this.FileContent}
        >
          <Button>Upload</Button>
        </Upload>
        <output
          id="list"
          className={styles['image']}>
          <span>
            <img src={this.props.book.imageSrc} alt="bar-code" title={this.props.book.imageTitle} />
          </span>
        </output>
      </div>
    );
  }
}

export default CameraPhoto;
