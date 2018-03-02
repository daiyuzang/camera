import Mock from 'mockjs';

const mockData = Mock.mock({
    'dataSource|1': [{
        'key|+1': 0,//索引值
        'bookImg': "@image('320x320', '#1DA57A', '#FFF', 'Mock.js')",//获取的书籍图片
        'bookName': '@name',//书籍名字
        'author': '@title(5)',//作者
        'publishHouse': '@ctitle(10)',//出版社
        'publishTime': '@datetime("yy年mm日")',//出版时间
        'bookNo|13': '3',//书籍isbn号
        'content': [{//书籍内容概述（table类型，需要array类型）
            'key|+1': 0,//索引值
            'bookContent': '@cparagraph()'//内容概述具体内容
        }],
        'hot|10': [{//热卖榜
            'key|+1': 0,//索引值
            'no|+1': 1,//热卖排名
            'bookName': '@name',//热卖书名
            'author': '@title(5)'//热卖书籍作者
        }],
        'recommend|8': ["@image('130x130', '#1DA57A', '#FFF', 'Mock.js')"],//推荐书籍图片（可链接至何处“新的比较界面、当当等商城”？？？？？）
        'contentIntro': '@cparagraph()',//内容详细介绍（未使用）
        'authorIntro': '@cparagraph()',//作者详细介绍（未使用）
        'media': '@cparagraph()',//媒体介绍（未使用）
        'onlineRead': '@cparagraph()',//在线阅读（未使用）
        'price': {//价格
            'dangdang|10-200.2': 1,//当当网
            'amazon|10-200.2': 1,//亚马逊
            'jingdong|10-200.2': 1,//京东
        },
        'goodReputation': {//好评度（0~100）
            'dangdang|0-100.2': 1,//
            'amazon|0-100.2': 1,//
            'jingdong|0-100.2': 1,//
        },
        'allPurchase': {//销售总额
            'dangdang|10-20000': 1,//
            'amazon|10-20000': 1,//
            'jingdong|10-20000': 1,//
        }
    }],
});

export default mockData;
