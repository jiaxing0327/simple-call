<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="call" icon="comment-circle">Call</van-tabbar-item>
      <van-tabbar-item name="address" icon="friends">通讯录</van-tabbar-item>
      <van-tabbar-item name="lab" icon="new">实验室</van-tabbar-item>
      <van-tabbar-item name="info" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('call')
// import { Tabbar, TabbarItem } from 'vant'
// export default {
//   components: {
//     `${Tabbar.name}`: Tabbar
//   }
// }
</script>

<style>

</style>
