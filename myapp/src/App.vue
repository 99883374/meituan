<template>
  <div id="app">
    美团外卖
    <router-link :to="{name: 'home',params:{name:'zs',age: 10}}">首页</router-link>
    <router-link :to="{path:'/mine',query:{name:'lisi',age: 18}}">我的</router-link>
    <router-link to="/mine/zs/18">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>
