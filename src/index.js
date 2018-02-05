import dva from 'dva';
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import {createLogger} from 'redux-logger';
import { message } from 'antd';
// import { clientMockMode } from './utils/Constant';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒
const logger = createLogger();

// if (clientMockMode){
//   const clientMock = require('./mockdata/ClientMock');
//   clientMock();
// }

// 1. Initialize
const app = dva({
  // history: createHistory(),
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
  onAction: logger,
});

// 2. Plugins
app.use(createLoading());
//app.use();

// 3. Model
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
