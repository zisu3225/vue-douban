<template>
  <el-row>
    <el-col :span="18">
      <div>{{eventItem.title}}</div>
      <p v-html="eventItem.content | subStr"></p>
      <p>{{eventItem.category_name}}</p>
    </el-col>
    <el-col :span="6">
      <img :src="eventItem.image_hlarge" alt="" width="100px">
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    eventItem: Object
  },
  name: 'List',
  methods: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
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
<style lang="scss">

</style>
