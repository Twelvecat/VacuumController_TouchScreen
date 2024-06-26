option = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 1200,
      max: 300,
      splitNumber: 9,
      itemStyle: {
        color: '#acc2cb',
        shadowColor: 'rgba(0,138,255,0.45)',
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0
      },
      progress: {
        show: 1,
        roundCap: true,
        width: 30
      },
      pointer: {
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        length: '90%',
        width: 10,
        offsetCenter: [0, '5%']
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 30
        }
      },
      splitLine: {
        length: 25,
        lineStyle: {
          width: 5,
          color: '#555'
        }
      },
      axisTick: {
        length: 15,
        splitNumber: 5,
        lineStyle: {
          width: 3,
          color: '#555'
        }
      },
      axisLabel: {
        distance: 40,
        color: '#555',
        fontSize: 30
      },
      title: {
        show: false
      },
      detail: {
        backgroundColor: '#f0f',
        borderColor: '#909',
        borderWidth: 0,
        width: '0%',
        lineHeight: 0,
        height: 0,
        borderRadius: 0,
        offsetCenter: [0, '10%'],
        valueAnimation: true,
        formatter: function (value) {
          return '';
        },
        rich: {
          value: {
            fontSize: 0,
            fontWeight: 'bolder',
            color: '#777'
          },
          unit: {
            fontSize: 0,
            color: '#999',
            padding: [0, 0, -20, 10]
          }
        }
      },
      data: [
        {
          value: 658
        }
      ]
    }
  ]
};