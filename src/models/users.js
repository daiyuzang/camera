import { routerRedux } from 'dva/router';// eslint-disable-line
import data from '../datasource';
import error from '../error';// eslint-disable-line
import * as TestServers from '../services/users';

export default {
  namespace: 'book',

  state: {
    bookImg: '',
    bookName: '',
    author: '',
    publishHouse: '',
    publishTime: '',
    bookNo: '',
    content: [],
    hot: [],
    recommend: [],
    contentIntro: '',
    authorIntro: '',
    media: '',
    onlineRead: '',
    price: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => { // eslint-disable-line
        // if(location.pathname === '/'){
        //   //console.log("drfgfd");
        const page = 1;
        dispatch({ type: 'fetch', payload: page });
        // }
      });
    },
  },
  effects: {
    *fetch({ payload: page }, { put, call }) {
      yield put({ type: 'showLoading', payload: true });
      const { data: { dataSource } } = yield call(TestServers.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          dataSource,
        },
      });
    },
    *callHome({ payload }, { call, put }) {
      yield put(routerRedux.push("./home"));
    },
    *callDetails({ payload }, { call, put }) {
      yield put(routerRedux.push("./users"));
    },
  },
  reducers: {
    save(state, { payload: { data: list, total, page, dataSource } }) {
      console.log(dataSource)
      return { ...state, ...dataSource };
    },
  },
};
