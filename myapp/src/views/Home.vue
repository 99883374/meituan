<template>
    <div>
        我是首页{{$route.params.name}}{{$route.params.age}}
        <router-link to="/home/test1">test1</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
