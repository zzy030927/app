<template>
    <el-dialog class="roleEdit" :visible.sync="dialogVisible" width="800px">
        <el-form ref="form" :model="form" label-width="160px">
            <el-form-item label="角色标识:">
                <el-input v-model="form.rolelogo" placeholder="请输入角色标识"></el-input>
                
            </el-form-item>
            <el-form-item label="角色名称:">
                <el-input v-model="form.rolename" placeholder="请选择角色名称"></el-input>
            </el-form-item>
            <el-form-item label="备注:">
                <el-input type="textarea" resize='none' v-model="form.roleremark" placeholder="请输入备注"></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 100px;">
                <el-button type="primary" style="width: 100px; margin-right: 200px;">立即创建</el-button>
                <el-button style="width: 100px" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                id: 0,
                rolelogo: "",
                rolename: "",
                roleremark: "",
                settime: "",
                status: ""
            }
        }
    }, 
    methods: {
        init() {
            this.form = {
                id: 0,
                rolelogo: "",
                rolename: "",
                roleremark: "",
                settime: "",
                status: ""
            }
        },
        open() {
            this.init();
            this.dialogVisible = true;
        },
        edit(data) {
            this.init();
            this.dialogVisible = true;
            this.form = {...data}
        },
        cancel() {
            this.dialogVisible = false;
        }
    }
}
</script>

<style>

.roleEdit .el-form-item__content {
    display: flex;
    margin-right: 30px;
    justify-content: start;
    height: 40px;
}
.roleEdit .el-form-item__label {
    text-align: right;
    font-size: large;
    width: 200px !important;
}
.roleEdit .el-form-item .el-input {
    display: flex;
    justify-content: start;
}

.roleEdit .el-form .el-input__inner {
    width: 360px;
}
.roleEdit .el-form .el-textarea__inner {
    min-height: 100px !important;
    width: 360px !important;
    font-size: 17px;
}
.roleEdit .el-dialog {
    height: 450px;
}
.roleEdit .el-button {
    height: 39.6px;
}
</style>