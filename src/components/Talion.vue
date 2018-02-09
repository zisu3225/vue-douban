<template>
  <div class="search">
    <el-row class="search__header">
      <el-col :span="3">
        <a href="/">关闭</a>
      </el-col>
      <el-col :span="21">
        <el-input prefix-icon="el-icon-search" @keyup.enter.native="toSearch" v-model="queryStr"></el-input>
      </el-col>
    </el-row>
    <ul>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(35, 132, 232);">电影</strong>
            <span>影院热映</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(230, 70, 126);">同城</strong>
            <span>周末活动</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">阅读</strong>
            <span>电子书</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(225, 100, 77);">东西</strong>
            <span>心爱之物</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(122, 106, 219);">电视</strong>
            <span>正在热播</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(42, 184, 204);">小组</strong>
            <span>志趣相投</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(87, 116, 197);">游戏</strong>
            <span>虚拟世界</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(64, 207, 169);">FM</strong>
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">图书</strong>
            <span>畅销排行</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(89, 108, 221);">应用</strong>
            <span>玩手机</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(66, 189, 86);">市集</strong>
            <span>购买原创</span>
          </a>
        </div>
      </li>
    </ul>
    <el-row type="flex" class="talion__footer">
      <el-col :span="12">
        <a href="/register" style="border-right: 1px solid #D8D8D8;display:inline-block;width:100%;">注册账号</a>
      </el-col>
      <el-col :span="12">
        <a href="/login">登录豆瓣</a>
      </el-col>
    </el-row>
    <el-row type="flex" class="talion__footer">
      <el-col :span="12">
        <a href="/" style="border-right: 1px solid #D8D8D8;display:inline-block;width:100%;">使用桌面版</a>
      </el-col>
      <el-col :span="12">
        <a href="/">使用豆瓣App</a>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Talion',
  data () {
    return {
      queryStr: ''
    }
  },
  methods: {
    toSearch () {
      this.$emit('closeTalion')
      this.$router.push({
        name: 'search',
        params: {
          str: this.queryStr
        }
      })
    }
  }
}
</script>
<style lang="scss">
.search{
  .el-input__inner{
    height: 36px;
  }
}
</style>

<style lang="scss" scoped>
.search{
  // padding: 0 20px;
  // width: 80%;
}
.search__header{
  box-sizing: border-box;
  height: 5rem;
  line-height: 5rem;
  padding: 5px 0;
  border-bottom: 1px solid #D8D8D8;
  a{
    color: $--color-primary;
    font-size: 1.6rem;
  }
}
ul {
  display: flex;
  justify-content: space-around;
  padding-top: 2.5rem;
  width: 100%;

  div {
    position: relative;
    float: left;
    left: 50%;
    top: 0;
  }

  a {
    position: relative;
    left: -50%;
    top: 0;
    display: block;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  strong {
    display: block;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  span {
    display: block;
    color: #999;
    height: 1.7rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
}
.talion__footer{
  text-align: center;
  height: 4rem;
  line-height: 4rem;
  border-top: 1px solid #D8D8D8;
  &:last-child{
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }
  a{
    color: $--color-primary;
    font-size: 1.5rem;
  }
}
</style>
