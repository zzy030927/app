<template>
    <div>
        <el-row :gutter="20" class="title-card">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="img-content">
                        <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
                    </div>
                    <span>
                        <p style="color: black; font-size: 20px">2</p>
                        <p>合作单位数量</p>
                    </span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="img-content">
                        <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
                    </div>
                    <span>
                        <p style="color: black; font-size: 20px">1</p>
                        <p>停车场数量</p>
                    </span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="img-content">
                        <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
                    </div>
                    <span>
                        <p style="color: black; font-size: 20px">1</p>
                        <p>车辆数量</p>
                    </span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="img-content">
                        <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
                    </div>
                    <span>
                        <p style="color: black; font-size: 20px">10597</p>
                        <p>收益总额</p>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple order">
                    <div class="order-title">最近七日支付订单</div>
                    <hr>
                    <OrderPayEchars/>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple order">
                    <div class="order-title">订单支付类型</div>
                    <hr>
                    <OrderTypeEcharts/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import OrderTypeEcharts from '../components/console/OrderTypeEcharts.vue';
import { RouterView } from 'vue-router';
import OrderPayEchars from '../components/console/OrderPayEcharts.vue';

export default {
    name: 'conosle',
    components: {OrderTypeEcharts, OrderPayEchars}
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
    margin-right: 0 !important;
    margin-left: 5px !important;
    background-color: rgb(245, 245, 245);

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 20px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    box-shadow: 0 0 3px black;
    background: #ffffff;
}

.title-card .bg-purple {
    display: flex;
    justify-content: center;
    background: #ffffff;
    align-items: center;
}

.bg-purple p {
    color: gray;
}

.bg-purple-light {
    background: #971a24;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #ffffff;
}

.bg-purple>.img-content {
    width: 100px;
    height: 100px;
    margin-left: 0px;
    margin-top: 30px;
    margin-right: 10px;
}

.bg-purple>.img-content>img {
    width: 80px;
    height: 80px;
}

.order {
    height: 350px
}

.order-title {
    width: max-content;
    padding-left: 10px;
    position: relative;
    padding-top: 10px;
    font-size: large;
    font-weight: 1000;
    color: black;
}

hr {
    position: relative;
    top: 10px;
    color: gray;
    width: 100%;
}
</style>