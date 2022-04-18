// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.regression);
option = {
  xAxis: {
    min: 0,
    max: 600,
    axisLabel: {
      inside: 0,
      textStyle: {
        color: '#555',
        fontSize:'30',
        fontFamily : 'Arial',
        margin : 10
      }
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#7597A4'
      }
    },
    splitNumber: 10
  },
  yAxis: {
    min: 0,
    max: 900,
    axisLabel: {
      inside: 0,
      textStyle: {
        color: '#555',
        fontSize:'30',
        fontFamily : 'Arial',
      }
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#7597A4'
      }
    },
    splitNumber: 20
  },
};