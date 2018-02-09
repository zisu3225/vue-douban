<template>
<div>
  <el-row class="activities__list" @click.native="toDeatil" v-if="mode === 'thumbnail'">
    <el-col :span="18">
      <div style="font-size: 1.8rem;color: #333333;">{{eventItem.title}}</div>
      <p style="color: #666666;">{{eventItem.content | subStr}}</p>
      <p>{{eventItem.category_name}}</p>
    </el-col>
    <el-col :span="6">
      <img v-lazy="eventItem.image_hlarge" alt="" width="100px">
    </el-col>
  </el-row>
  <el-row class="activities__list" v-if="mode === 'basic'">
    <a href="#" class="basic">
      <h3>{{eventItem.title}}</h3>
      <div class="info">{{eventItem.comments}}</div>
    </a>
  </el-row>
</div>
</template>
<script>
export default {
  props: {
    eventItem: Object,
    mode: String
  },
  name: 'List',
  methods: {
    toDeatil () {
      this.$router.push({name: 'detail', params: { id: this.eventItem.id }})
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>
<style lang="scss" scoped>
.activities__list{
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #D8D8D8;
  cursor: pointer;
}
.basic {
  h3 {
    padding: 0;
    line-height: 1.41;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }

  .info {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #42bd56;
  }
}
</style>
