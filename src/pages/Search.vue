<template>
  <div class="search">
    <el-row type="flex" class="search__input">
      <el-col :span="20">
        <el-input placeholder="搜索 书 / 影 / 音 / 标签" v-model="searchStr" @keyup.enter.native="search"></el-input>
      </el-col>
      <el-col :span="3" :offset="1" style="font-size: 1.5rem;">
        <a href="#" @click.prevent="search" style="color:#666666;">搜索</a>
      </el-col>
    </el-row>
    <div v-if="searchStr && keyMovies" class="search-res">
      <group title="影视" :items="keyMovies">
        <a class="list-link" href="#" slot="more">查看更多影视结果</a>
      </group>
      <group title="图书" :items="keyMovies">
        <a class="list-link" href="#" slot="more">查看更多图书结果</a>
      </group>
      <group title="音乐" :items="keyMovies">
        <a class="list-link" href="#" slot="more">查看更多音乐结果</a>
      </group>
    </div>
  </div>
</template>
<script>
import {SEARCH_BY_KEY} from '@/store/actions'
import GroupCard from '@/components/GroupCard'
import {mapState} from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      searchStr: ''
    }
  },
  components: {
    [GroupCard.name]: GroupCard
  },
  computed: {
    ...mapState({
      keyMovies: state => state.search.keyMovies
    })
  },
  methods: {
    search () {
      this.$store.dispatch(SEARCH_BY_KEY, {query: this.searchStr})
    }
  },
  beforeMount () {
    this.searchStr = this.$route.params.str
    this.search()
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
.search__input{
  height: 4rem;
  line-height: 4rem;
  border-bottom: 1px solid #D8D8D8;
}
.list-link {
  display: block;
  margin-bottom: 1.5rem;
  padding: 1.5rem 0 1.5rem 5rem;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: #42bd56;
}
</style>
