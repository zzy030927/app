<!-- 车牌识别 -->
<template>
  <div>
    <div class="uphea">
      <el-select clearable v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="upload">
      <span></span>
      <span></span>
    </div>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">点击或将车牌拖到这里上传</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "万达停车场",
        },
        {
          value: "选项2",
          label: "金宝停车场",
        },
        {
          value: "选项3",
          label: "吾悦广场停车场",
        },
        {
          value: "选项4",
          label: "信誉楼停车场",
        },
        {
          value: "选项5",
          label: "天一城停车场",
        },
      ],
      value: "",
    };
  },
};
</script>
<style scoped>
.uphea {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding-left: 50px;
}

.upload {
  width: 100%;
  height: 240px;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
}

.upload>span {
  width: 49%;
  height: 275px;
  background: #fff;
  border-radius: 10px;
}
</style>