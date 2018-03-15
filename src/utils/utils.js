import {
    notification
  } from 'antd';
  
  let NotificationUtil = (type, options) => {
    let opt = {
      message: type.replace(/\b(\w)(\w*)/g, ($0, $1, $2) => {
        return $1.toUpperCase() + $2.toLowerCase();
      }),
      className: `snx-notification-${type}`,
    };
    notification[type](Object.assign({}, options, opt));
  };
  'success error info warning warn'.split(' ').forEach((type) => {
    NotificationUtil[type] = (option) => {
      NotificationUtil(type, option);
  };
});

export default {
NotificationUtil: NotificationUtil
}