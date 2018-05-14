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
    content: null,
    hot: [],
    recommend: [],
    contentIntro: '',
    authorIntro: '',
    media: '',
    onlineRead: '',
    price: {},
    imageSrc,
    imageTitle: '',
    file: null,
    isbn: '',
    goodReputation: {},
    allPurchase: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => { // eslint-disable-line
        // if(location.pathname === '/'){
        //   //console.log("drfgfd");
        const page = 1;
        // dispatch({ type: 'fetch', payload: page });
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
    *callCamera({ payload }, { put }) {
      yield put(routerRedux.push("/"));
    },
    *callHome({ payload }, { put }) {
      yield put(routerRedux.push("./home"));
    },
    *FiletoHome({ payload: isbn }, { put, call }) {
      if(isbn){
        yield put(routerRedux.push("./"));
      }
      yield put({ type: 'loadFile', payload: isbn });
      let data = yield call(TestServers.getSource, isbn);
      let time;
      let i = 10;
      while(isbn && i > 0){
        time = setInterval( data, 6000);
        console.log(data);
        console.log(data.data['amazonbooks'])
        if(!data.data['amazonbooks'].length && !data.data['dangdangbooks'].length && !data.data['jdbooks'].length){
          data = yield call(TestServers.getSource, isbn);
          i--;
        }
        else{
          break;
        }
      }
        clearInterval(time);
        let datas = data.data;
        console.log(datas)
        yield put({
          type: 'saveData',
          payload: datas,
        });
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
    },
    loadFile(state, { payload: isbn }) {
      return { ...state, isbn };
    },
    saveData(state, { payload: data }) {
      console.log(data)
      let imgs = data['amazonbooks'][0]['h_books'];
      const hot_imgs = [];
      if(imgs){
        imgs = imgs.split('h_book_img: [{"');
        hot_imgs.push(imgs[1].split('"')[0]);
        hot_imgs.push(imgs[1].split('"')[2]);
        hot_imgs.push(imgs[1].split('"')[4]);
        hot_imgs.push(imgs[2].split('"')[0]);
        hot_imgs.push(imgs[2].split('"')[2]);
        hot_imgs.push(imgs[2].split('"')[4]);
        hot_imgs.push(imgs[3].split('"')[0]);
        hot_imgs.push(imgs[3].split('"')[2]);
      }
      const hot = [{
        'key': 0,
        'no': '亚马逊',
        'money': data['amazonbooks'][0]['price'].split('￥')[1],
        'name': <div dangerouslySetInnerHTML={{__html: `<a href='#'>${data['amazonbooks'][0]['bookName']}</a>`}} />,
      },{
        'key': 1,
        'no': '当当',
        'money': data['dangdangbooks'][0]['price'],
        'name': <div dangerouslySetInnerHTML={{__html: `<a href='#'>${data['dangdangbooks'][0]['bookName']}</a>`}} />,
      },{
        'key': 2,
        'no': '京东',
        'money': data['jdbooks'][0]['price'],
        'name': null, // data['jdbooks'][0]['bookName'],
      }];
      const price = {
        'dangdang': parseFloat(data['dangdangbooks'][0]['price']),
        'amazon': parseFloat(data['amazonbooks'][0]['price'].split('￥')[1]),
        'jingdong': parseFloat(data['jdbooks'][0]['price']),
      };
      const goodReputation = {
        'dangdang': data['dangdangbooks'][0]['goodReputation'],
        'amazon': data['amazonbooks'][0]['goodReputation'].match(/\d+.\d+/)[0],
        'jingdong':  data['jdbooks'][0]['goodReputation'],
      };
      const allPurchase = {
        'dangdang': data['dangdangbooks'][0]['allPurchase'],
        'amazon': data['amazonbooks'][0]['allPurchase'].match(/\d+/)[0],
        'jingdong': data['jdbooks'][0]['allPurchase'],
      };
      console.log(goodReputation)
      console.log(allPurchase)
      const bookData = {
        author: data['amazonbooks'][0]['author'],
        bookImg: data['amazonbooks'][0]['bookImg'].split('"')[1],
        bookNo: data['amazonbooks'][0]['isbn'],
        bookName: data['amazonbooks'][0]['bookName'],
        publishHouse: data['amazonbooks'][0]['publish_house'],
        publishTime: data['amazonbooks'][0]['publish_time'],
        content: data['amazonbooks'][0]['content_data'],
        hot: hot,
        recommend: hot_imgs,
        price: price,
        goodReputation: goodReputation,
        allPurchase: allPurchase,
      };
      return { ...state, ...bookData };
    }
  },
};
