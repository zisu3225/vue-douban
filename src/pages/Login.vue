<template>
  <div class="login">
    <el-row class="login__title">
      <el-col :span="6">
        <a href="#" @click.stop.prevent="toBack">取消</a>
      </el-col>
      <el-col :span="10" :offset="4" class="login-title__sub">登录豆瓣</el-col>
    </el-row>
    <el-form class="login__form" :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item prop="email">
        <el-input placeholder="邮箱" v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item prop="token">
        <el-input placeholder="Token" v-model="loginForm.token"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
        type="primary"
        style="display: block;width:100%;height: 48px;font-size: 16px;"
        @click="submitForm('loginForm')"
        :disabled="!valite">登录</el-button>
      </el-form-item>
    </el-form>
    <el-row class="login__other">
      使用其他方式登录 & 找回密码
    </el-row>
    <el-row class="login__btns" type="flex">
      <el-col :span="12" style="text-align: right;margin-right: 10px;">
        <a href="/register">注册豆瓣账号</a>
      </el-col>
      <el-col :span="12">
        <a href="/">下载豆瓣App</a>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        email: '',
        token: ''
      },
      rules: {
        email: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'}
        ],
        token: [
          {required: true, message: 'token不能为空', trigger: 'blur'},
          {min: 6, message: '至少输入6个字符', trigger: 'change'}
        ]
      }
    }
  },
  computed: {
    valite: function () {
      let validator = new AsyncValidator(this.rules)
      let result = false
      validator.validate(this.loginForm, errors => {
        if (!errors) {
          result = true
        }
      })
      return result
    }
  },
  methods: {
    toBack () {
      history.go(-1)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSubmit = false
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login__title{
  height: 4.5rem;
  line-height: 4.5rem;
  border-bottom: 1px solid #D8D8D8;
  a{
    color: $--color-primary;
    font-size: 1.5rem;
  }
  .login-title__sub{
    font-size: 1.8rem;
    font-weight: 600;
  }
}
.login__form{
  margin-top: 30px;
}
.login__other{
  font-size: 1.5rem;
  color: #aaa;
  text-align: center;
  margin-bottom: 3rem;
}
.login__btns{
  a{
    font-size: 1.5rem;
    color: $--color-primary;
  }
}
</style>
