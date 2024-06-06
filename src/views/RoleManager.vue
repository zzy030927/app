<template>
    <div class="roleManager">
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
            <el-table-column prop="rolelogo" label="角色标识" width="120">
            </el-table-column>
            <el-table-column prop="rolename" label="角色名称" width="170">
            </el-table-column>
            <el-table-column prop="roleremark" label="备注" width="150">
            </el-table-column>
            <el-table-column prop="settime" label="创建时间" width="200">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)">修改</el-button>
                    <el-button size="small" type="primary" icon="el-icon-delete" @click="del">删除</el-button>
                    <el-button size="small" type="primary" icon="el-icon-s-cooperation"
                        @click="dialogFormVisible = true">权限操作</el-button>
                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[]"
                            :default-checked-keys="[5]" :props="defaultProps">
                        </el-tree>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize">
        </el-pagination>
        <RoleManagerEdit ref="roleManager"></RoleManagerEdit>
        <el-dialog title="确定要删除此内容吗" :visible.sync="dialogVisible" width="30%">
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
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
                rolelogo: "admin",
                rolename: "超级管理员",
                roleremark: "系统内置",
                settime: "2024-06-04 12:00:01",
                status: "1"
            }],
            pageSize: 2,
            total: 10,
            data: [{
                id: 1,
                label: '停车场管理',
                children: [{
                    id: 10,
                    label: '停车场管理'
                }]
            }, {
                id: 2,
                label: '车牌识别',
                children: [{
                    id: 11,
                    label: '车牌识别'
                }]
            }, {
                id: 3,
                label: '车场管理',
                children: [{
                    id: 12,
                    label: '车场管理'
                }]
            }, {
                id: 4,
                label: '停车记录',
                children: [{
                    id: 13,
                    label: '停车记录'
                }]
            }, {
                id: 5,
                label: '系统管理',
                children: [{
                    id: 14,
                    label: '角色管理',
                    children: [{
                        id: 20,
                        label: '刷新'
                    }, {
                        id: 21,
                        label: '新增'
                    }, {
                        id: 22,
                        label: '编辑'
                    }, {
                        id: 23,
                        label: '删除'
                    }, {
                        id: 24,
                        label: '操作权限'
                    }, {
                        id: 25,
                        label: '数据权限'
                    }]
                }, {
                    id: 15,
                    label: '系统菜单',
                    children: [{
                        id: 26,
                        label: '刷新'
                    }, {
                        id: 27,
                        label: '新增'
                    }, {
                        id: 28,
                        label: '编辑'
                    }, {
                        id: 29,
                        label: '删除'
                    }, {
                        id: 30,
                        label: '操作权限'
                    }, {
                        id: 31,
                        label: '数据权限'
                    }]
                }]
            }, {
                id: 6,
                label: '财务管理',
                children: [{
                    id: 16,
                    label: '财务管理'
                }]
            }, {
                id: 7,
                label: '账户管理',
                children: [{
                    id: 17,
                    label: '账户管理'
                }]
            }, {
                id: 8,
                label: '系统监控',
                children: [{
                    id: 18,
                    label: '系统监控'
                }]
            }, {
                id: 9,
                label: '控制台管理',
                children: [{
                    id: 19,
                    label: '控制台管理'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
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
.roleManager {
    height: 85%;
}

.roleManager .hea {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 145px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.roleManager .hea>.left {
    display: flex;
    align-items: center;
}

.roleManager .hea>.left>.el-input {
    margin-right: 20px;
    width: 300px;
}

.roleManager .cell {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
}

.roleManager .el-table {
    margin-bottom: 30px;
}

.roleManager .el-dialog__header {
    padding-top: 50px;
}

.roleManager .el-dialog__body {
    padding: 15px;
}

.roleManager .el-dialog__footer {
    display: flex;
    justify-content: center;
}

.roleManager .el-dialog__footer .el-button {
    margin-right: 30px;
    margin-left: 30px;
}
</style>