<template>
  <div class="home">
    <nav-bar style="margin-bottom: 20px;"></nav-bar>
    <list v-for="(item, key) in events" :key="key" :event-item="item"></list>
    <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
      <img src="../assets/image/loading_green.gif" alt="loading">
    </infinite-loading>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import List from '@/components/List'
// import {getEventList} from '@/lib/api'
import InfiniteLoading from 'vue-infinite-loading'
import {GET_EVENT_LIST} from '@/store/actions'
import {mapState} from 'vuex'
export default {
  layout: 'default',
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [InfiniteLoading.name]: InfiniteLoading,
    [List.name]: List
  },
  computed: {
    ...mapState({
      events: (state) => state.activities.events
    })
  },
  methods: {
    async onInfinite () {
      try {
        this.$store.dispatch(GET_EVENT_LIST)
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.$store.dispatch(GET_EVENT_LIST)
  }
}
</script>

<style lang="scss">

</style>
