import { routerRedux } from 'dva/router';// eslint-disable-line
import data from '../datasource';
import error from '../error';// eslint-disable-line
import * as TestServers from '../services/users';
import imageSrc from '../assets/placeholder.png';

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
    imageSrc,
    imageTitle: '',
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
    *callHome({ payload }, { put }) {
      // yield put({
      //   type: 'loadData',
      //   payload: datas
      // });
      // const name = datas[0].split('base64,');
      // const value = {
      //   'file_name': datas[2],
      //   'data': name[1],
      // };
      // yield call(TestServers.postData, value);
      yield put(routerRedux.push("./home"));
    },
    *callDetails({ payload }, { call, put }) {
      yield put(routerRedux.push("./compares"));
    },
  },
  reducers: {
    save(state, { payload: { dataSource } }) {
      return { ...state, ...dataSource };
    },
    loadData(state, { payload: files }) {
      const imageSrc = files[0];
      const imageTitle = files[1];
      return { ...state, imageSrc, imageTitle };
    }
  },
};
