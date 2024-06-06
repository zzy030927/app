<template>
    <el-dialog class="addStop" :visible.sync="dialogVisible" :title="form.id === 0 ? '新增停车场' : '修改停车场'" width="80%">
        <el-form ref="form" :model="form" label-width="160px">
            <el-form-item label="停车场名称:">
                <el-input v-model="form.stopname" placeholder="请输入停车场名称"></el-input>
            </el-form-item>
            <el-form-item label="计时单元:">
                <el-select v-model="form.celltiming" placeholder="请选择计时单元">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="停车场名称:">
                <el-input v-model="form.stopname" placeholder="请输入单位名称"></el-input>
            </el-form-item>
            <el-form-item label="单位费用:">
                <el-input v-model="form.cellmoney" placeholder="请输入单位费用"></el-input>
            </el-form-item>
            <el-form-item label="停车位数量:">
                <el-input v-model="form.carnum" placeholder="请输入停车位数量"></el-input>
            </el-form-item>
            <el-form-item label="最大收费金额:">
                <el-input v-model="form.cellmoney" placeholder="请输入最大收费金额"></el-input>
            </el-form-item>
            <el-form-item label="免费时长(分钟):">
                <el-select v-model="form.freetime" placeholder="请选择免费时长">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态:">
                <el-radio v-model="form.status" label="1">正常</el-radio>
                <el-radio v-model="form.status" label="2">禁用</el-radio>
            </el-form-item>
            <el-button type="primary" style="width: 100px; margin-right: 300px;">立即创建</el-button>
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
                carnum: "",
                freetime: "",
                celltiming: "",
                cellmoney: "",
                settime: "",
                status: '1'
            },
        }
    },
    methods: {
        cancel() {
            this.dialogVisible = false;
        },
        open() {
            this.init();
            this.dialogVisible = true;
        },
        edit(data) {
            this.dialogVisible = true;
            this.form = {...data}
        },
        init() {
            this.form = {
                id: 0,
                stopname: "",
                carnum: "",
                freetime: "",
                celltiming: "",
                cellmoney: "",
                settime: "",
                radio: '1',
                company: ""
            }
        }
    }
}
</script>

<style>
.addStop .el-form-item {
    display: inline-block;
    width: 50%;
}

.addStop .el-form-item__content {
    display: flex;
    margin-right: 30px;
    justify-content: start;
    height: 40px;
}
.addStop .el-form-item__label {
    text-align: left;
    padding-left: 22px;
    font-size: large;
}
.addStop .el-form-item .el-input {
    display: flex;
    justify-content: start;
}

.addStop .el-form .el-input--suffix .el-input__inner {
    width: 360px;
}

.addStop .el-form .el-radio {
    display: flex;
    align-items: center;
}
</style>