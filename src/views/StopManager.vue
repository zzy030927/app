<template>
    <div class="stop">
        <div class="hea">
            <div class="left">
                <el-input v-model="search" placeholder="请输入内容"></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
            </div>
            <el-button type="primary" icon="el-icon-plus" @click="goaddstop">新增</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="id" label="序号" width="100">
            </el-table-column>
            <el-table-column prop="stopname" label="停车场名称" width="120">
            </el-table-column>
            <el-table-column prop="carnum" label="车位总数" width="120">
            </el-table-column>
            <el-table-column prop="freetime" label="免费时长" width="120">
            </el-table-column>
            <el-table-column prop="celltiming" label="计时单元" width="120">
            </el-table-column>
            <el-table-column prop="cellmoney" label="单位费用" width="120">
            </el-table-column>
            <el-table-column prop="settime" label="创建时间" width="155">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)">修改</el-button>
                    <el-button size="small" type="primary" icon="el-icon-delete" @click="del">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize">
        </el-pagination>
        <AddStop ref="addStop"></AddStop>
        <el-dialog title="确定要删除此内容吗" :visible.sync="dialogVisible" width="30%">
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import AddStop from '../components/carSpace/AddStop.vue';
export default {
    components: { AddStop },
    data() {
        return {
            dialogVisible: false,
            search: '',
            tableData: [{
                id: 1,
                stopname: "万达停车场",
                carnum: "12",
                freetime: "60",
                celltiming: "30",
                cellmoney: "5.00",
                settime: "2024-06-04 12:00:01",
                status: "1"
            }],
            pageSize: 2,
            total: 10
        }
    },
    methods: {
        goaddstop() {
            this.$refs.addStop.open();
        },
        del() {
            this.dialogVisible = true;
        },
        edit(data) {
            this.$refs.addStop.edit(data);
        }
    }
}
</script>

<style>
.stop {
    height: 85%;
}

.stop .hea {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.stop .hea>.left {
    display: flex;
    align-items: center;
}

.stop .hea>.left>.el-input {
    margin-right: 10px;
    width: 300px;
}

.stop .cell {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
}

.stop .el-table {
    margin-bottom: 30px;
}

.stop .el-dialog__header {
    padding-top: 50px;
}
.stop .el-dialog__body {
    padding: 15px;
}
.stop .el-dialog__footer {
    display: flex;
    justify-content: center;
}
.stop .el-dialog__footer .el-button {
    margin-right: 30px;
    margin-left: 30px;
}
</style>