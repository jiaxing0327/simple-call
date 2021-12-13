<template>
  <div class="full">
    <div class="logo">
      <img src="/src/assets/image/logo.png" alt="" class="full">
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  components: { 'v-button': Button }
}
</script>

<style lang="scss" scoped> 
.logo {
  width: 150px;
  height: 150px;
}
</style>