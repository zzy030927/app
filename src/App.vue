<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import router from '@/router/index'
import VueRouter from 'vue-router'
  export default{
    //取值 丁路由
    data(){
      return{
        allRouter:[]
      }
    },
    mounted(){
      if(sessionStorage.getItem('token')){
        this.$router.push("/").catch(err => {
          if (err.name !== 'NavigationDuplicated') {  
            // 处理其他错误  
            throw err;  
          }  
        })
      }else{
        this.$router.push("/login")
      }
    }
    
  } 
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;

}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
