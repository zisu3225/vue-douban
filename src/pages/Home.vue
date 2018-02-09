<template>
  <div class="home">
    <nav-bar style="margin-bottom: 20px;margin-top: 20px;"></nav-bar>
    <list v-for="(item, key) in events" :key="key" :event-item="item" mode="thumbnail"></list>
    <infinite-loading @infinite="onInfinite">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Loading from '@/components/Loading'
import List from '@/components/List'
import InfiniteLoading from 'vue-infinite-loading'
import {GET_EVENT_LIST} from '@/store/actions'
import {mapState} from 'vuex'
import {errorMixins} from '@/lib/mixin'
export default {
  mixins: [
    errorMixins
  ],
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [InfiniteLoading.name]: InfiniteLoading,
    [List.name]: List,
    [Loading.name]: Loading
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.activities.events
    })
  },
  methods: {
    onInfinite ($state) {
      setTimeout(() => {
        this.$store.dispatch(GET_EVENT_LIST)
        $state.loaded()
      }, 1000)
    }
  },
  async mounted () {
    // await this.$store.dispatch(GET_EVENT_LIST)
  }
}
</script>

<style lang="scss">

</style>
