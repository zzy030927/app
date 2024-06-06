<template>
    <div class="orderList">
        <div class="head">
            <!-- 合作单位-->
            <el-select clearable v-model="companyValue" placeholder="请选择合作单位">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <!-- 停车场 -->
            <el-select clearable v-model="carStopValue" placeholder="请选择停车场">
                <el-option v-for="item in carstops" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
            <el-button type="primary">导入数据</el-button>
        </div>

        <el-table :data="tableData" style="width: 98%; margin-left: 1%;" border>
            <el-table-column prop="id" label="序号" width="60px"> </el-table-column>
            <el-table-column prop="orderno" label="订单号">
            </el-table-column>
            <el-table-column prop="payMoney" label="支付金额" width="120px">
            </el-table-column>
            <el-table-column prop="carno" label="车牌号">
            </el-table-column>
            <el-table-column prop="payType" label="支付类型" width="120px">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="155px"> </el-table-column>
            <el-table-column prop="endTime" label="有效期至" width="155px"> </el-table-column>
            <el-table-column prop="remark" label="备注" width="155px"> </el-table-column>

        </el-table>
        <div class="block" style="display: flex; justify-content: flex-end">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1"
                :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                :total="1">
            </el-pagination>
        </div>
        <CarSpaceEdit ref="dialog"></CarSpaceEdit>
        <el-dialog title="确定要删除此内容吗" :visible.sync="dialogVisible" width="30%">
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import CarSpaceEdit from '../components/carSpace/CarSpaceEdit.vue';
export default {
    components: { CarSpaceEdit },
    data() {
        return {
            dialogVisible: false,
            companyValue: "",
            carStopValue: "",
            input: "",
            search: "",
            total: 20, //总共几行数据
            tableData: [
                {
                    id: 1,
                    orderno: "145646",
                    payMoney: "30.00",
                    carno: "冀A·30156",
                    payType: "微信",
                    createTime: "2023-03-26 12:00:00",
                    endTime: "2023-03-26 12:00:00",
                    remark: "备注",
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
            ]
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        openDialog() {
            this.$refs.dialog.openDialog();
        },
        del() {
            this.dialogVisible = true;
        },
        edit(data) {
            console.log("data", data);
            this.$refs.dialog.edit(data);
        }
    },
};
</script>
<style>
.orderList .head {
    width: 100%;
    height: 60px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;
    display: flex;
}

.orderList .head>.el-select {
    width: 250px;
    margin-left: -20px;
    margin-right: 30px;
}

.orderList .head>.el-input {
    width: 150px;
    margin-left: -17px;
    margin-right: 15px;
}

.orderList .cell {
    text-align: center
}

.orderList .el-table {
    margin-bottom: 30px;
    margin-left: 0 !important;
}
</style>