<template>
  <div>
    <mt-header title="页面 首页"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link :to="{name:'home'}" class="mui-tab-item" href="#tabbar">
        <span class="mui-icon icon-shouye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon icon-huiyuan"></span>
        <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link :to="{name:'shopcart'}" class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon icon-gouwuche"><span class="mui-badge">99999</span></span>
          <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">查找</span>
            </router-link>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped>

</style>