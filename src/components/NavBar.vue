<template>
  <div class="nav__bar">
    <el-row type="flex">
      <el-col :span="12">
        <router-link to="/movie">影院热映</router-link>
      </el-col>
      <el-col :span="12">
        <router-link to="/radio">欧美新碟榜</router-link>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="12">
        <router-link to="/register">注册账号</router-link>
      </el-col>
      <el-col :span="12">
        <router-link to="/login">登录豆瓣</router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="scss">
.nav__bar{
  .el-col{
    background: #F6F6F6;
    border-radius: 2px;
    margin: 5px 5px;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    a{
      color: #494949;
      font-size: 1.6rem;
    }
    a:hover{
      color: $--color-primary;
    }
  }
}
</style>
