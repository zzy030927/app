<template>
    <div class="systemMonitor">
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
            <el-table-column prop="username" label="用户名">
            </el-table-column>
            <el-table-column prop="operation" label="用户操作">
            </el-table-column>
            <el-table-column prop="reponseTime" label="响应时间">
            </el-table-column>
            <el-table-column prop="operationTime" label="操作时间">
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize">
        </el-pagination>
        <RoleManagerEdit ref="roleManager"></RoleManagerEdit>
    </div>
</template>

<script>
import RoleManagerEdit from '../components/systemManager/RoleManagerEdit.vue';
export default {
    components: { RoleManagerEdit },
    data() {
        return {
            dialogFormVisible: false,
            dialogVisible: false,
            search: '',
            tableData: [{
                id: 1,
                username: "admin",
                operation: "超级管理员",
                reponseTime: "系统内置",
                operationTime: "2024-06-04 12:00:01"
            }],
            pageSize: 2,
            total: 10
        }
    },
    methods: {
        goaddstop() {
            this.$refs.roleManager.open();
        },
        del() {
            this.dialogVisible = true;
        },
        edit(data) {
            this.$refs.roleManager.edit(data);
        }
    }
}
</script>

<style>
.systemMonitor {
    height: 85%;
}

.systemMonitor .hea {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 85px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.systemMonitor .hea>.left {
    display: flex;
    align-items: center;
}

.systemMonitor .hea>.left>.el-input {
    margin-right: 20px;
    width: 300px;
}

.systemMonitor .cell {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
}

.systemMonitor .el-table {
    margin-bottom: 30px;
}

.systemMonitor .el-dialog__header {
    padding-top: 50px;
}

.systemMonitor .el-dialog__body {
    padding: 15px;
}

.systemMonitor .el-dialog__footer {
    display: flex;
    justify-content: center;
}

.systemMonitor .el-dialog__footer .el-button {
    margin-right: 30px;
    margin-left: 30px;
}
</style>