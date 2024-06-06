<template>
    <el-dialog class="carSpace" :visible.sync="dialogVisible" :title="form.id === 0 ? '新增停车场' : '修改停车场'" width="80%">
        <el-form ref="form" :model="form" label-width="160px">
            <el-form-item label="停车场名称:">
                <el-input v-model="form.stopname" placeholder="请输入停车场名称"></el-input>
            </el-form-item>
            <el-form-item label="车位号:">
                <el-input v-model="form.carsno" placeholder="请输入车位号"></el-input>
            </el-form-item>
            <el-form-item label="单位名称:">
                <el-input v-model="form.company" placeholder="请输入单位名称"></el-input>
            </el-form-item>
            <el-form-item label="有效日期:">
                <el-col :span="30">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.out"
                        style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="车主名称:">
                <el-input v-model="form.carpeoplename" placeholder="请输入车主名称"></el-input>
            </el-form-item>
            <el-form-item label="性别:">
                <el-radio v-model="form.sex" label="1">男</el-radio>
                <el-radio v-model="form.sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="手机号:">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="状态:">
                <el-radio v-model="form.status" label="1">正常</el-radio>
                <el-radio v-model="form.status" label="2">禁用</el-radio>
            </el-form-item>
            <el-form-item label="车牌号:">
                <el-input v-model="form.chepaihao" placeholder="请输入车牌号"></el-input>
            </el-form-item>
            <el-form-item label="类别:">
                <el-radio v-model="form.type" label="1">包月车</el-radio>
                <el-radio v-model="form.type" label="2">VIP免费车</el-radio>
            </el-form-item>
            <el-button type="primary" style="width: 100px; margin-right: 300px;">确定</el-button>
            <el-button style="width: 100px" @click="cancel">取消</el-button>
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
                stopname: "",
                carsno: "",
                company: "",
                chepaihao: "",
                type: "",
                sex: '',
                carpeoplename: '',
                out: "",
                phone: "",
                status: "",
                type: ""
            }
        }
    },
    methods: {
        openDialog() {
            this.init();
            this.dialogVisible = true;
        },
        cancel() {
            this.dialogVisible = false;
        },
        edit(data) {
            this.form = {...data}
            this.dialogVisible = true;
        },
        init() {
            this.form = {
                id: 0,
                stopname: "",
                carsno: "",
                company: "",
                chepaihao: "",
                type: "",
                sex: '',
                carpeoplename: '',
                out: "",
                phone: "",
                status: "",
                type: ""
            }
        }
    }
}
</script>

<style>
.carSpace .el-form-item {
    display: inline-block;
    width: 50%;
}

.carSpace .el-form-item__content {
    display: flex;
    margin-right: 30px;
    justify-content: start;
    height: 40px;
}
.carSpace .el-form-item__label {
    text-align: left;
    padding-left: 22px;
    font-size: large;
}
.carSpace .el-form-item .el-input {
    display: flex;
    justify-content: start;
}

.carSpace .el-form .el-input--suffix .el-input__inner {
    width: 360px;
}

.carSpace .el-form .el-radio {
    display: flex;
    align-items: center;
}
</style>