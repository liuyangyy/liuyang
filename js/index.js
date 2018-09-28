~function () {
    var myChart = echarts.init(et1);
    var option = {
        title: {
            text: '2017年中离婚率十强城市',
            subtext: '国家数据统计局',
            x: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal'
            }/*,
            subtextStyle: {
                fontSize: 12,
            }*/
        },
        tooltip: {
            trigger: 'item'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['北京', '上海', '深圳', '广州', '厦门', '台北', '香港', '大连', '杭州', '哈尔滨',
                ]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '离婚率',
                type: 'bar',
                data: [39.00, 38.00, 36.25, 35.00, 34.9, 34.8, 33.8, 31.0, 29.0, 28.0,],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}


                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(et2);
    var option = {
        title: {
            text: '婚姻数据趋势',
            subtext: '国华数据统计局',
            x: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['结婚数据', '离婚数据'],
            x: 'left',
            orient: 'vertical'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['2012', '2013', '2014', '2015', '2016', '201']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '结婚数据',
                type: 'bar',
                data: [6431486, 7079916, 6940306, 6207239, 6043386, 5584953],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '离婚数据',
                type: 'bar',
                data: [1112197, 1342943, 1455005, 1516236, 1683068, 185876],
                markPoint: {
                    data: [
                        {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(et3);
    var option = {
        title: {
            text: '2017年离婚结婚比',
            subtext: '数据来自国家统计局',
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        dataRange: {
            orient: 'horizontal',
            min: 0,
            max: 30000,
            text: ['高', '低'],
            splitNumber: 0
        },
        series: [
            {
                name: '2017年离婚结婚比',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    x: 'left'
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '北京', value: 605.83},
                    {name: '天津', value: 1670.44},
                    {name: '河北', value: 2102.21},
                    {name: '山西', value: 2522.66},
                    {name: '内蒙古', value: 5020.37},
                    {name: '辽宁', value: 5701.84},
                    {name: '吉林', value: 6610.05},
                    {name: '黑龙江', value: 8893.12},
                    {name: '上海', value: 10011.37},
                    {name: '江苏', value: 10568.83},
                    {name: '浙江', value: 11237.55},
                    {name: '安徽', value: 11307.28},
                    {name: '福建', value: 11702.82},
                    {name: '江西', value: 11720.87},
                    {name: '山东', value: 12512.3},
                    {name: '河南', value: 12582},
                    {name: '湖北', value: 14359.88},
                    {name: '湖南', value: 15300.65},
                    {name: '广东', value: 16251.93},
                    {name: '广西', value: 17560.18},
                    {name: '海南', value: 19195.69},
                    {name: '重庆', value: 19632.26},
                    {name: '四川', value: 19669.56},
                    {name: '贵州', value: 21026.68},
                    {name: '云南', value: 22226.7},
                    {name: '西藏', value: 24515.76},
                    {name: '陕西', value: 26931.03},
                    {name: '甘肃', value: 32318.85},
                    {name: '青海', value: 45361.85},
                    {name: '宁夏', value: 49110.27},
                    {name: '新疆', value: 53210.28}
                ]
            }
        ],
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(et4);
    var option = {
        title: {
            text: '2018年中国离婚率',
            subtext: '国家数据统计局',
            x: 'left',
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['北京', '天津', '河北', '山西', '河南', '山东', '湖南', '湖北', '四川', '广东', '广西']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                data: [67.3, 60.1, 42.8, 29.4, 37.7, 44.9, 44.7, 49.2, 59.5, 31, 34.5],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },

        ]
    };

    myChart.setOption(option);
}();