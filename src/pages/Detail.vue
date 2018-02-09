<template>
  <div class="detail has-header">
    <banner title="每天看点好内容"></banner>
    <template v-if="eventItem">
      <div class="detail__info">
        <h2>
          {{eventItem.title}}
          <span class="detail-info__badge">{{eventItem.loc_name}}</span>
        </h2>
        <div class="detail-info__poster">
          <img v-lazy="eventItem.image_hlarge" alt="">
        </div>
        <div class="detail-info__detail">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.begin_time}}</li>
            <li>{{eventItem.end_time}}</li>
          </ul>
        </div>
        <div class="detail-info__detail">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.address}}</li>
          </ul>
        </div>
        <div class="detail-info__detail">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.fee_str}}</li>
          </ul>
        </div>
        <div class="detail-info__detail">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.category_name}}</li>
          </ul>
        </div>
        <div class="detail-info__detail">
          <span>起始时间:&nbsp;&nbsp;</span>
          <ul>
            <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
          </ul>
        </div>
        <span v-if="eventItem.tags">
          <el-tag v-for="(item, key) in Util.toArray(eventItem.tags)" :key="key" style="margin-right: 10px;">{{item}}</el-tag>
        </span>
        <div class="detail-info__describe">
          <h2>活动详情</h2>
          <div v-if="eventItem.content" class="detail-info__describe--content" v-html="eventItem.content"></div>
        </div>
      </div>
      <download-app></download-app>
    </template>
    <loading v-show="!eventItem"></loading>
  </div>
</template>
<script>
import {getSingleEvent} from '@/lib/api'
import {errorMixins} from '@/lib/mixin'
import Banner from '@/components/Banner'
import DownloadApp from '@/components/DownloadApp'
import Loading from '@/components/Loading'
import * as Util from '@/lib/util'
export default {
  mixins: [
    errorMixins
  ],
  name: 'Detail',
  components: {
    [Banner.name]: Banner,
    [DownloadApp.name]: DownloadApp,
    [Loading.name]: Loading
  },
  data () {
    return {
      Util,
      eventItem: ''
    }
  },
  methods: {

  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  async mounted () {
    try {
      let id = this.$route.params.id
      let res = await getSingleEvent(id)
      // let str = res.data.content.replace(/src/g, 'v-lazy')
      // console.log(str)
      // res.data.content = str
      // console.log(res.data.content)
      this.eventItem = res.data
    } catch (err) {
      this.handleApiError(err)
    }
  }
}
</script>
<style lang="scss" scoped>
.detail__info {
  margin: 1rem;
  h2 {
    margin: 2rem 0;
    font-weight: bold;
    color: #494949;
  }

  .detail-info__badge {
    display: inline-block;
    padding: 0.1rem 0.5rem;
    margin-bottom: 0.3rem;
    vertical-align: middle;
    line-height: 1.8rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #FF8263;
    border-radius: 0.2rem;
  }

  .detail-info__poster {
    margin: 2rem auto;
    text-align: center;

    img {
      width: 100%;
      max-width: 22rem;
      height: auto;
    }
  }
}

.detail-info__detail {
  margin-left: 3.3rem;
  margin-bottom: 1rem;
  min-height: 1.5em;
  font-size: 1.4rem;
  clear: left;

  span {
    float: left;
    margin-left: -3.3rem;
    line-height: 150%;
    color: #666666;
  }

  ul {
    list-style-position: outside;
    margin-left: 0;
  }
}

.detail-info__describe {
  h2 {
    color: #072;
  }

  .detail-info__describe--content {
    overflow: hidden;
    font-size: 1.4rem;
  }
}
</style>
