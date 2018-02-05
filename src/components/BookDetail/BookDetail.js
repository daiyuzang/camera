import React, { Component } from 'react';
import { Collapse } from 'antd';
import ReactEcharts from 'echarts-for-react';
import styles from '../BookDetail/BookDetail.css';

const Panel = Collapse.Panel;
class BookDetail extends Component {


  render() {
    const contentIntro = this.props.book.contentIntro;
    const authorIntro = this.props.book.authorIntro;
    const media = this.props.book.media;
    const price = this.props.book.price;
    const goodReputation = this.props.book.goodReputation;
    const allPurchase = this.props.book.allPurchase;
    let onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
    };
    let optionMoney = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data:['当当','亚马逊','京东']
      },
      xAxis: [
        {
          type: 'category',
          data: ['价钱比较'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '价格',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} RMB'
          }
        },
      ],
      series: [
        {
          name:'当当',
          type:'bar',
          data:[
            price.dangdang,
          ]
        },
        {
          name:'亚马逊',
          type:'bar',
          data:[
            price.amazon,
          ]
        },
        {
          name:'京东',
          type:'bar',
          data:[
            price.jingdong,
          ]
        },
      ]
    };
    let optionGood = {
      title : {
        text: '',
        subtext: '',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['当当','亚马逊','京东']
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '75%',
          center: ['50%', '45%'],
          data:[
            {value: goodReputation.dangdang, name:'当当'},
            {value: goodReputation.amazon, name:'亚马逊'},
            {value: goodReputation.jingdong, name:'京东'},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    let optionSell = {
      title: {
        text: ''
      },
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data:['销售额比较']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['当当','亚马逊','京东']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'销售额比较',
          type:'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data:[
            allPurchase.dangdang,
            allPurchase.amazon,
            allPurchase.jingdong,
          ]
        }
      ]
    };
    return (
      <Collapse
        defaultActiveKey={['1','2','3']}
        className={styles['collapse']}
      >
        <Panel header="价钱比较" key="1" className={styles['panel1']}>
          <ReactEcharts 
            option={optionMoney} 
            style={{height: '400px', width: '100%'}}  
            opts={{renderer: 'svg'}}  
            className='react_for_echarts'
          />
        </Panel>
        <Panel header="好评比较" key="2" className={styles['panel1']}>
          <ReactEcharts 
            option={optionGood}
            style={{ height: '400px' }}
            onEvents={onEvents}
          />
        </Panel>
        <Panel header="销售额比较" key="3" className={styles['panel1']}>
          <ReactEcharts 
            option={optionSell}
            style={{ height: '400px' }}
            onEvents={onEvents}
          />
        </Panel>
      </Collapse>
    );
  }
}

export default BookDetail;