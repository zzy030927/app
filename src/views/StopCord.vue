<!-- 停车记录 -->
<template>
    <div class="carRecord">
        <div class="cored">
            <!-- 合作单位-->
            <el-select v-model="value" placeholder="请选择合作单位">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option> </el-select>
            <!-- 停车场 -->
            <el-select v-model="value" placeholder="请选择停车场">
                <el-option v-for="item in carstops" :key="item.value" :label="item.label" :value="item.value">
                </el-option> </el-select>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="id" label="序号" width="100px"> </el-table-column>
            <el-table-column prop="stopname" label="停车场名称" width="150px">
            </el-table-column>
            <el-table-column prop="chepaihao" label="车牌号" width="150px">
            </el-table-column>
            <el-table-column prop="type" label="类型" width="150px">
            </el-table-column>
            <el-table-column prop="join" label="入场时间" width="200px">
            </el-table-column>
            <el-table-column prop="out" label="出场时间" width="200px"> </el-table-column>
            <el-table-column prop="money" label="收费金额">
            </el-table-column>


        </el-table>
        <div class="block" style="display: flex; justify-content: flex-end">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="1">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: "",
            total: 20, //总共几行数据
            tableData: [
                {
                    id: 1,
                    stopname: "万达停车场",
                    chepaihao: "冀E·55555",
                    type: "VIP免费车",
                    join: "2023-03-16 12:00:00",
                    out: "2023-03-26 12:00:00",
                    money: "$35",
                },
            ],
            options: [
                {
                    value: "选项1",
                    label: "腾讯科技",
                },
                {
                    value: "选项2",
                    label: "慕容集团",
                },
            ],
            carstops: [
                {
                    value: "选项1",
                    label: "万达停车场",
                },
                {
                    value: "选项2",
                    label: "金宝停车场",
                },
            ],
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    },
};
</script>
<style>

.carRecord .cored {
    width: 100%;
    height: 60px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;
}

.carRecord .cored>.el-select {
    width: 250px;
    margin-left: -20px;
    margin-right: 30px;
}

.carRecord .cored>.el-input {
    width: 150px;
    margin-left: -17px;
    margin-right: 15px;
}

.carRecord .cell {
    text-align: center
}
</style>