import Mock from 'mockjs';

const mockData = Mock.mock({
    'dataSource|1': [{
        'key|+1': 0,
        'bookImg': "@image('320x320', '#1DA57A', '#FFF', 'Mock.js')",//"@image('320×320', '#1DA57A', '#FFF', 'png', 'Mock.js')",
        'bookName': '@name',
        'author': '@title(5)',
        'publishHouse': '@ctitle(10)',
        'publishTime': '@datetime("yy年mm日")',
        'bookNo|13': '3',
        'content': [{
            'key|+1': 0,
            'bookContent': '@cparagraph()'
        }],
        'hot|10': [{
            'key|+1': 0,
            'no|+1': 1,
            'bookName': '@name',
            'author': '@title(5)'
        }],
        'recommend|8': ["@image('130x130', '#1DA57A', '#FFF', 'Mock.js')"],
        'contentIntro': '@cparagraph()',
        'authorIntro': '@cparagraph()',
        'media': '@cparagraph()',
        'onlineRead': '@cparagraph()',
        'price': {
            'dangdang|10-200.2': 1,
            'amazon|10-200.2': 1,
            'jingdong|10-200.2': 1,
        },
        'goodReputation': {
            'dangdang|0-100.2': 1,
            'amazon|0-100.2': 1,
            'jingdong|0-100.2': 1,
        },
        'allPurchase': {
            'dangdang|10-20000': 1,
            'amazon|10-20000': 1,
            'jingdong|10-20000': 1,
        }
    }],
});

export default mockData;
