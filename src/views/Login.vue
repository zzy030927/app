<template>
    <div class="login">
        <div class="banner">
            <h3>智慧停车系统</h3>
            <span>
                账&nbsp;&nbsp;号:&nbsp;&nbsp;
                <el-input placeholder="请输入用户名" v-model="username" clearable>
                </el-input>
            </span>
            <span>
                密&nbsp;&nbsp;码:&nbsp;&nbsp;
                <el-input placeholder="请输入密码" v-model="psw" show-password></el-input>

            </span>
            <el-button type="primary" @click="login">登&nbsp;&nbsp;录</el-button>

        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            username:'',
            psw:''
        }
    },
    methods:{
        login(){
            if(this.username==""&&this.psw==""){
                this.$message({
                    message:'用户名或密码不能为空',
                    type:'error'
                })
            }else{
                //调用接口
                this.$message({
                    message:'登陆成功',
                    type:'success'
                })
                //存储uesrid，token
                //跳转路由
                sessionStorage.setItem("token", 1)
                this.$router.push('/')
                
            }
        }
    }
}
</script>

<style>  
.login {  
    width: 100%;  
    height: 100%;  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    background-color: #f0f4f8; /* 浅蓝色背景 */  
}  
  
.banner {  
    width: 40%;  
    height: 300px;  
    border: 1px solid cornflowerblue;  
    border-radius: 5px;  
    background-color: #fff; /* 白色背景，与边框形成对比 */  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */  
    padding: 30px
}  
  
.banner > h3 {  
    color: cornflowerblue;  
    margin-bottom: 30px;  
}  
  
.banner > span {  
    display: flex;  
    align-items: center;  
    margin-bottom: 20px; /* 稍微减小间距 */  
}  
  
.banner > span > span { /* 用户名和密码前的文本 */  
    color: #666; /* 灰色文字 */  
    margin-right: 10px; /* 增加间距 */  
}  
  
.banner > span > .el-input {  
    width: 80%;  
    border-radius: 4px;  
    padding: 10px; /* 增加内边距 */  
}  

.el-button {
    margin: 20px;
}

.el-button--primary { /* 自定义主要按钮样式 */  
    background-color: cornflowerblue;  
    border-color: cornflowerblue;  
    color: #fff;  
}  
  
.el-button--primary:hover { /* 悬停效果 */  
    background-color: #30a5ff;  
    border-color: #30a5ff;  
}  
</style>