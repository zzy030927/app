<template>
    <div class="echarts" id="typeChart" :style="typeChartStyle">

    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name: 'OrderTypeEcharts',
        data() {
            return {
                typeChartStyle: {top: '30px', width:'100%', height:'80%'},
                yData: [100, 120, 100, 90],
                xData: ['微信', 'App Pay', '支付宝', 'HUAWEI Pay']
            }
        },
        methods: {
            initTypeEcharts() {
                const typeOption = {
                    xAxis: {
                        type: 'category',
                        data: this.xData,
                        axisLabel:{
                            interval:0,
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    series: [
                        {
                            name: '订单数',
                            data: this.yData,
                            type: 'bar',
                        }
                    ]
                };
                const typeChart = echarts.init(document.getElementById("typeChart"));
                typeChart.setOption(typeOption);
                const getEcharts = () => {
                    let myChart = echarts.getInstanceByDom(
                        document.getElementById("typeChart")
                    );
                    if (myChart == null) {
                        myChart = echarts.init(document.getElementById("typeChart"));
                    }
                    myChart.setOption(typeOption);
                }
            }
        },
        mounted() {
            this.initTypeEcharts();
        }
    }
</script>

<style>
</style>