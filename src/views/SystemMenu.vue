<template>
    <div class="systemMenu">
        <el-container>
            <el-aside width="300px" height="1080px">
                <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[]" :default-checked-keys="[]"
                    :props="defaultProps">
                </el-tree>
            </el-aside>
            <el-main>
                <div class="sysMenuContain">
                    <div class="head">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
                        <el-button type="primary" icon="el-icon-plus" @click="add">新增</el-button>
                    </div>

                    <el-table :data="tableData" style="width: 98%; margin-left: 1%;" border>
                        <el-table-column prop="menuName" label="菜单名称" width="95px">
                        </el-table-column>
                        <el-table-column prop="icon" label="图标" width="80px">
                            <template slot-scope="scope">
                                <el-image :src="scope.row.icon" fit="contain"></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="type" label="类型" width="60px">
                        </el-table-column>
                        <el-table-column prop="menuUrl" label="菜单URL">
                        </el-table-column>
                        <el-table-column prop="sign" label="授权标识" width="77px">
                        </el-table-column>
                        <el-table-column prop="sort" label="排序" width="60px">
                        </el-table-column>
                        <el-table-column label="操作" width="280px">
                            <template slot-scope="scope">
                                <el-button size="small" type="primary" icon="el-icon-edit"
                                    @click="edit(scope.row)">修改</el-button>
                                <el-button size="small" type="primary" icon="el-icon-delete" @click="del">删除</el-button>
                                <el-button size="small" type="primary" icon="el-icon-plus" @click="add">新增</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <SystemMenuEdit ref="dialog"></SystemMenuEdit>
                    <el-dialog title="确定要删除此内容吗" :visible.sync="dialogVisible" width="30%">
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            <el-button @click="dialogVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import SystemMenuEdit from '../components/systemManager/SystemMenuEdit.vue';
export default {
    components: { SystemMenuEdit },
    data() {
        return {
            dialogVisible: false,
            input: "",
            tableData: [{
                id: 1,
                menuName: "停车场管理",
                icon: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                type: "目录",
                menuUrl: "http://192.168.0.1:8080/",
                sign: "1",
                sort: "0"
            }],
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
        edit(data) {
            this.$refs.dialog.edit(data);
        },
        add() {
            this.$refs.dialog.open();
        },
        del() {
            this.dialogVisible = true
        }
    }
}
</script>

<style>
.systemMenu .el-aside {
    color: #333;
    text-align: center;
}

.systemMenu .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    height: 650px;
    padding-left: 10px;
    padding-right: 0;
}

.systemMenu .el-tree {
    background-color: #f8f8f8;
    margin-left: 20px;
}

.systemMenu .sysMenuContain .head {
    width: 80%;
    height: 60px;
    padding-left: 30px;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;
    margin-left: 130px;
    display: flex;
}

.systemMenu .sysMenuContain .head>.el-select {
    width: 250px;
    margin-left: -20px;
    margin-right: 30px;
}

.systemMenu .sysMenuContain .head>.el-input {
    width: 350px;
    margin-left: -17px;
    margin-right: 15px;
}

.systemMenu .sysMenuContain .cell {
    text-align: center;
}

.systemMenu .sysMenuContain .el-table {
    margin-bottom: 30px;
    margin-left: 0% !important;
}

.systemMenu .el-aside {
    width: 250px !important;
    margin-top: 30px;
}

.systemMenu .cell .el-button {
    margin: 0px;
    margin-right: 12px;
}

.systemMenu .el-dialog__header {
    padding-top: 50px;
}

.systemMenu .el-dialog__body {
    padding: 15px;
}

.systemMenu .el-dialog__footer {
    display: flex;
    justify-content: center;
}

.systemMenu .el-dialog__footer .el-button {
    margin-right: 30px;
    margin-left: 30px;
}
</style>