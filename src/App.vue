<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="router-view">
      <!-- 开启路由页面 -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #app {
    /* background-color: darkgray; */
    border: 5px solid darkgrey;
  }
  #nav {
    text-align: center;
  }
  #router-view {
    text-align: center;
  }
</style>
