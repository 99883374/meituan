<template>
    <div>
        <sellerHeader :seller="seller"></sellerHeader>  
        <van-tabs v-model="active" sticky animated color="#ffda41">
            <van-tab title="点菜">
                <order></order>
            </van-tab>
            <van-tab title="评价">评价</van-tab>
            <van-tab title="商家">商家</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {getStoreById} from '@/api/detail.js' 
    import sellerHeader from "./seller-header.vue"
    import order from "./order.vue"
    export default {
        data(){
            return {
                seller: [],
                active:0
            }
        },
        components:{
            sellerHeader,
            order
        },
        methods:{
            getStoreMsg(){
                // id = this.$route.query.id
                getStoreById({id:this.$route.query.id}).then(res=>{
                    // console.log(res)
                    this.seller = res.data
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