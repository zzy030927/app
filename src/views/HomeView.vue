<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="6">
        <h3 class="logo">智慧停车系统</h3>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" router>
          <el-menu-item index="/console">
            <i class="el-icon-menu"></i>
            <span slot="title">控制台</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">  
              <i class="el-icon-location"></i>
              <span>停车场管理</span>
            </template>
            <el-menu-item index="/stop">停车场管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>车牌识别</span>
            </template>
            <el-menu-item index="/carshow">车牌识别</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>车场管理</span>
            </template>
            <el-menu-item index="/carSpaceManager">车场管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>停车记录</span>
            </template>
            <el-menu-item index="/record">停车记录</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="/systemMenu">系统菜单</el-menu-item>
            <el-menu-item index="/roleManager">角色管理</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>财务管理</span>
            </template>
            <el-menu-item index="/orderList">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>账户管理</span>
            </template>
            <el-menu-item index="8-1">用户管理</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统监控</span>
            </template>
            <el-menu-item index="/systemMonitor">系统监控</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>控制台管理</span>
            </template>
            <el-menu-item index="10-1">统计管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="colbc" :span="18">
        <div class="header">
          <div class="header-top">
            <i class="el-icon-refresh-right"></i>
            <i class="el-icon-full-screen"></i>
            <i class="el-icon-platform-eleme"></i>
            <b>admin</b>
          </div>
          <div class="header-bottom">
            <i class="el-icon-arrow-left" @click="goback"></i>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goback() {
        this.$router.go(-1)
      }
  }
}
</script>

<style>
  body {
    background-color: #f8f8f8;
  }
  .home, .el-row, .el-col {
    height: 100%;
  }
  .el-menu {
    height: 89%;
    color: black !important;
    overflow: visible;
    background-color: #f8f8f8 !important;
  }
  .logo {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: rgb(78, 195, 241);
    color: #fff;
    margin-left: 0;
    padding-left: 0;
  }
  .el-menu-item, .el-submenu__title {
    height: 40px;
    line-height: 40px;
    color: #fff;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    background-color: skyblue;
    color: skyblue;
  }
  .el-submenu__title, .el-menu-item {
    text-align: left;
  }
  .el-icon-location:before, .el-icon-menu:before {
    margin-left: 70px;
  }
  .el-submenu > ul > li {
    padding-left: 128px !important;
  }
  .el-submenu__title > span, .el-menu-item > span {
    margin-left: 80px;
  }
  .el-submenu > .el-submenu-item {
    padding-left: 130px
  }
  .header {
    width: 100%;
    height: 80px;
    margin-bottom: 30px
  }
  .header > .header-top {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
    box-sizing: border-box;
  }
  .header .header-top i {
    margin-right: 10px
  }
  .header .header-top b {
    margin-right: 10px;
  }
  .header .header-bottom {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 30px;
    box-sizing: border-box
  }
  .header .header-bottom i {
    margin-right: 20px;
  }
  .el-col-18 {
    background-color: #f8f8f8;
  }
</style>