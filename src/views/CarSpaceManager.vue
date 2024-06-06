<template>
    <div class="carSpaceManager">
        <div class="carmanager">
            <!-- 合作单位-->
            <el-select clearable v-model="companyValue" placeholder="请选择合作单位">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option> </el-select>
            <!-- 停车场 -->
            <el-select clearable v-model="carStopValue" placeholder="请选择停车场">
                <el-option v-for="item in carstops" :key="item.value" :label="item.label" :value="item.value">
                </el-option> </el-select>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
            <el-button type="primary">导入数据</el-button>
            <el-button type="primary" style="margin-left: 40px;" @click="openDialog">新增</el-button>
        </div>

        <el-table :data="tableData" style="width: 98%; margin-left: 1%;" border>
            <el-table-column prop="id" label="序号" width="60px"> </el-table-column>
            <el-table-column prop="company" label="所属单位">
            </el-table-column>
            <el-table-column prop="stopname" label="停车场名称" width="120px">
            </el-table-column>
            <el-table-column prop="chepaihao" label="车牌号">
            </el-table-column>
            <el-table-column prop="carpeoplename" label="车主名称">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="50px">
                <template slot-scope="scope">
                    {{ scope.row.sex == 1 ? '男' : '女' }}
                </template>
            </el-table-column>
            <el-table-column prop="type" label="类型">
                <template slot-scope="scope">
                    {{ scope.row.sex == 1 ? '包月车' : 'VIP免费车' }}
                </template>
            </el-table-column>
            <el-table-column prop="out" label="有效期至" width="155px"> </el-table-column>
            <el-table-column label="操作" width="250px">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)">修改</el-button>
                    <el-button size="small" type="primary" icon="el-icon-delete" @click="del">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block" style="display: flex; justify-content: flex-end">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="1" :page-sizes="[10, 20, 30, 40]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="1">
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
    components: {CarSpaceEdit},
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
                    stopname: "万达停车场",
                    company: "万达",
                    chepaihao: "冀E·55555",
                    type: "2",
                    sex: '2',
                    status: "1",
                    carpeoplename: '小红',
                    out: "2023-03-26 12:00:00",
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

.carSpaceManager .carmanager {
    width: 100%;
    height: 60px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;
    display: flex;
}

.carSpaceManager .carmanager>.el-select {
    width: 250px;
    margin-left: -20px;
    margin-right: 30px;
}

.carSpaceManager .carmanager>.el-input {
    width: 130px;
    margin-left: -17px;
    margin-right: 15px;
}

.carSpaceManager .cell {
    text-align: center
}

.carSpaceManager .el-table {
    margin-bottom: 30px;
    margin-left: 0% !important;
}
</style>