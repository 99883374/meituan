<template>
    <div>
商家详情页
    </div>
</template>

<script>
    import {getStoreById} from '@/api/detail.js' 

    export default {
        methods:{
            getStoreMsg(){
                // id = this.$route.query.id
                getStoreById({id:this.$route.query.id}).then(res=>{
                    console.log(res)
                })
            }
        },
        created(){
            this.getStoreMsg()
        }
    }
</script>

<style lang="scss" scoped>

</style>