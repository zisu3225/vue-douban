<template>
  <div class="register">
    <el-row class="register__title">
      <h1>欢迎加入豆瓣</h1>
    </el-row>
    <el-form>
      <el-form-item>
        <el-input placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="display: block;width:100%;height: 48px;font-size: 16px;">立即注册</el-button>
      </el-form-item>
    </el-form>
    <el-row class="register__arrgement">
      点击「注册」代表你已阅读并同意用户使用协议
    </el-row>
    <el-row class="register__btns">
      <a href="/">下载豆瓣App</a>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Register'
}
</script>
<style lang="scss" scoped>
.register__title{
  h1 {
    margin: 10% 0 9%;
    font-size: 4rem;
    font-weight: 300;
    color: #42bd56;
    text-align: center;
  }
}
.register__arrgement{
  font-size: 1.4rem;
  color: #aaa;
  text-align: center;
}
.register__btns {
  margin-top: 4rem;
  text-align: center;
  font-size: 1.5rem;
  a {
    color: #42bd56;
    margin-right: 1.5rem;
  }
}
</style>
