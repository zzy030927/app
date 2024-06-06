<template>
    <el-dialog class="menuEdit" :visible.sync="dialogVisible" width="800px">
        <el-form ref="form" :model="form" label-width="160px">
            <el-form-item label="主类目:" v-if="form.id === 0">
                <el-select v-model="form.primaryType" placeholder="请选择主类目">
                    <el-option v-for="item in primaryType" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="菜单名称:">
                <el-input v-model="form.menuName" placeholder="请选择菜单名称"></el-input>
            </el-form-item>
            <el-form-item label="图标:">
                <template slot-scope="scope">
                    <el-upload class="avatar-uploader" action=""
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <el-input v-model="form.icon" readonly placeholder="点击此处上传"
                            suffix-icon="el-icon-upload"></el-input>
                    </el-upload>
                </template>
            </el-form-item>
            <el-form-item label="类型:">
                <el-input v-model="form.type" placeholder="请输入类型"></el-input>
            </el-form-item>
            <el-form-item label="菜单URL:">
                <el-input v-model="form.menuUrl" placeholder="请输入菜单URL"></el-input>
            </el-form-item>
            <el-form-item label="授权标识:">
                <el-input v-model="form.sign" placeholder="请输入授权标识"></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 50px;">
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
                menuName: "",
                icon: "",
                type: "",
                menuUrl: "",
                sign: "",
                sort: "",
                primaryType: ""
            },
            primaryType: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }]
        }
    },
    methods: {
        init() {
            this.form = {
                id: 0,
                menuName: "",
                icon: "",
                type: "",
                menuUrl: "",
                sign: "",
                sort: ""
            }
        },
        open() {
            this.init();
            this.dialogVisible = true;
        },
        edit(data) {
            this.init();
            this.dialogVisible = true;
            this.form = { ...data }
        },
        cancel() {
            this.dialogVisible = false;
        },
        fileNameShow() {

        },
        handleAvatarSuccess(res, file) {
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            if (isJPG && isLt2M)
                this.form.icon = file.name;
            return isJPG && isLt2M;
        }
    }
}
</script>

<style>
.menuEdit .el-form-item__content {
    display: flex;
    margin-right: 30px;
    justify-content: start;
    height: 40px;
}

.menuEdit .el-form-item__label {
    text-align: right;
    font-size: large;
    width: 200px !important;
}

.menuEdit .el-form-item .el-input {
    display: flex;
    justify-content: start;
    width: max-content;
}

.menuEdit .el-form .el-input__inner {
    width: 360px;
}

.menuEdit .el-form .el-textarea__inner {
    min-height: 100px !important;
    width: 360px !important;
    font-size: 17px;
}

.menuEdit .el-dialog {
    height: 580px;
    margin-top: 10vh !important;
}

</style>