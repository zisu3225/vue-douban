<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies" v-loading="hotLoading" height="275px"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies" v-loading="newLoading"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies" v-loading="topLoading"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import DownloadApp from '@/components/DownloadApp'
import {GET_HOT_MOVIES, GET_NEW_MOVIES, GET_TOP_MOVIES} from '@/store/actions'
export default {
  name: 'Movie',
  components: {
    [Scroller.name]: Scroller,
    [Types.name]: Types,
    [DownloadApp.name]: DownloadApp
  },
  data () {
    return {
      movieTags: [
        {
          title: '同时入选IMDB250和豆瓣电影250的电影',
          href: 'https://m.douban.com/doulist/968362/',
          color: '#FFAC2D'
        },
        {
          title: '带你进入不正常的世界',
          href: 'https://m.douban.com/doulist/16002',
          color: '#FF4055'
        },
        {
          title: '用电【影】来祭奠逝去的岁月',
          href: 'https://m.douban.com/doulist/190343',
          color: '#4F9DED'
        },
        {
          title: '女孩们的故事【电影】',
          href: 'https://m.douban.com/doulist/1125971',
          color: '#FFC46C'
        },
        {
          line: true
        },
        {
          title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
          href: 'https://m.douban.com/doulist/4253902',
          color: '#2384E8'
        },
        {
          title: '美国生活面面观',
          href: 'https://m.douban.com/doulist/121326',
          color: '#3BA94D'
        },
        {
          title: '2015终极期待',
          href: 'https://m.douban.com/doulist/37479562',
          color: '#42BD56'
        },
        {
          title: '经典韩国电影——收集100部',
          href: 'https://m.douban.com/doulist/458087',
          color: '#CC3344'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      hotMovies: state => state.movies.hotMovies,
      topMovies: state => state.movies.topMovies,
      newMovies: state => state.movies.newMovies,
      hotLoading: state => state.movies.hotLoading,
      newLoading: state => state.movies.newLoading,
      topLoading: state => state.movies.topLoading
    })
  },
  beforeMount () {
    this.$store.dispatch(GET_HOT_MOVIES)
    this.$store.dispatch(GET_NEW_MOVIES)
    this.$store.dispatch(GET_TOP_MOVIES)
  }
}
</script>
<style>

</style>
