<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :items="novelBooks" v-loading="loading"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="realityBooks" v-loading="loading"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :items="travelBooks" v-loading="loading">
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/image/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>
<script>
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import DownloadApp from '@/components/DownloadApp'
import {mapState} from 'vuex'
import {GET_BOOKS} from '@/store/actions'
export default {
  name: 'Book',
  components: {
    [Scroller.name]: Scroller,
    [Types.name]: Types,
    [DownloadApp.name]: DownloadApp
  },
  data () {
    return {
      bookTags: [
        {
          title: '不可饶恕的女人们',
          href: 'https://m.douban.com/doulist/35573',
          color: '#42BD56'
        },
        {
          title: '爱欲书',
          href: 'https://m.douban.com/doulist/38088147',
          color: '#FF4055'
        },
        {
          title: '他们还写侦探小说',
          href: 'https://m.douban.com/doulist/645579',
          color: '#4F9DED'
        },
        {
          line: true
        },
        {
          title: '人生识字始忧患',
          href: 'https://m.douban.com/doulist/192653',
          color: '#CC3344'
        },
        {
          title: '詩歌書店',
          href: 'https://m.douban.com/doulist/89925',
          color: '#FFAC2D'
        },
        {
          title: '尝试理解人类变化无常不可测心理相关小荐',
          href: 'https://m.douban.com/doulist/45361809',
          color: '#3BA94D'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      novelBooks: state => state.books.novelBooks,
      realityBooks: state => state.books.realityBooks,
      travelBooks: state => state.books.travelBooks,
      loading: state => state.books.loading
    })
  },
  beforeMount () {
    this.$store.dispatch(GET_BOOKS)
  }
}
</script>
<style lang="scss" scoped>
.promItem {
  overflow: hidden;
  margin: 1.6rem 1.8rem 0.8rem 1.6rem;
}

.corver {
  float: left;
  width: 10rem;
  margin-right: 1.5rem;
}

.content {
  margin-right: 1rem;
}

.name {
  font-size: 2rem;
  color: #494949;
  margin: 1rem;
  max-width: 100%;
  line-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.price {
  float: right;
  color: #E76648;
  font-size: 1.6rem;
  line-height: 2.2rem;
}

.info {
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}
</style>
