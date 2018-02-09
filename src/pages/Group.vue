<template>
  <div class="group-view has-header">
    <user-bar></user-bar>
    <div v-loading="loading">
      <group title="租房找室友" :items="groupA">
        <a class="list-link" href="#" slot="more">更多相关小组</a>
      </group>
      <group title="来聊五块钱" :items="groupB">
        <a class="list-link" href="#" slot="more">来聊五块钱</a>
      </group>
      <group title="买买买" :items="groupC">
        <a class="list-link" href="#" slot="more">更多相关小组</a>
      </group>
    </div>
    <download-app></download-app>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {GET_GROUPS} from '@/store/actions'
import UserBar from '@/components/UserBar'
import GroupCard from '@/components/GroupCard'
import DownloadApp from '@/components/DownloadApp'
export default {
  name: 'Group',
  components: {
    [UserBar.name]: UserBar,
    [GroupCard.name]: GroupCard,
    [DownloadApp.name]: DownloadApp
  },
  computed: {
    ...mapState({
      groupA: state => state.groups.groupA,
      groupB: state => state.groups.groupB,
      groupC: state => state.groups.groupC,
      loading: state => state.groups.loading
    })
  },
  beforeMount () {
    this.$store.dispatch(GET_GROUPS)
  }
}
</script>
<style lang="scss" scoped>
.list-link {
  display: block;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}

.user-bar {
  margin-bottom: 1.5rem;
}
</style>
