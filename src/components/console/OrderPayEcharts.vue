<template>
    <div class="echarts" id="payChart" :style="payChartStyle">

    </div>
</template>

<script>
import * as echarts from 'echarts';
import { RouterView } from 'vue-router';

export default {
    name: 'OrderPayEcharts',
    data() {
        return {
            payChartStyle: { top: '30px', width: '100%', height: '80%' }
        }
    },
    methods: {
        initPayEcharts() {
            const payOption = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['微信', 'App Pay', '支付宝', 'HUAWEI Pay']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2024-01-04', '2024-01-05', '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '微信',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'App Pay',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '支付宝',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'HUAWEI Pay',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]
            };
            const payChart = echarts.init(document.getElementById("payChart"));
            payChart.setOption(payOption);
            const getEcharts = () => {
                let myChart = echarts.getInstanceByDom(
                    document.getElementById("payChart")
                );
                if (myChart == null) {
                    myChart = echarts.init(document.getElementById("payChart"));
                }
                myChart.setOption(payOption);
            }
        }
    },
    mounted() {
        this.initPayEcharts();
    }
}
</script>