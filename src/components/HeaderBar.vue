<template>
  <header class="header__bar">
    <el-row type="flex" style="border-bottom: 1px solid #F3F3F3;margin-bottom: 1.2rem;">
      <el-col :span="4" class="header-bar__icon">豆瓣</el-col>
      <el-col :span="14" :offset="6" style="text-align: right;">
        <el-menu mode="horizontal" class="header-bar__menu">
          <el-menu-item index="/movie" class="header-bar__menu--movie">电影</el-menu-item>
          <el-menu-item index="/book" class="header-bar__menu--book">图书</el-menu-item>
          <el-menu-item index="/radio" class="header-bar__menu--radio">广播</el-menu-item>
          <el-menu-item index="/group" class="header-bar__menu--group">小组</el-menu-item>
          <el-menu-item index="/" style="padding-right: 0;">
            <i class="el-icon-menu"></i>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang="scss">
.header__bar{
  .el-menu--horizontal{
    border-bottom: none;
  }
  .el-menu-item{
    padding: 0 10px;
  }
  .header-bar__menu--movie{
    color: rgb(35, 132, 232);
    font-size: 1.6rem;
  }
  .header-bar__menu--book{
    color: rgb(159, 120, 96);
    font-size: 1.6rem;
  }
  .header-bar__menu--radio{
    color: rgb(228, 168, 19);
    font-size: 1.6rem;
  }
  .header-bar__menu--group{
    color: rgb(42, 184, 204);
    font-size: 1.6rem;
  }
}
</style>
<style lang="scss" scoped>
.header__bar{
  .header-bar__icon{
    font-size: 3rem;
    color: #007711;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
  }
}
</style>
