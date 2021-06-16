<template>
    <div class="scrollBox">
        <div>
            <sellerHeader :seller="seller"></sellerHeader>  
            <van-tabs v-model="active" sticky animated color="#ffda41">
                <van-tab title="点餐">
                    <order></order>
                </van-tab>
                <van-tab title="评价">评价</van-tab>
                <van-tab title="商家">商家</van-tab>
            </van-tabs>
        </div>
        <cart :seller="seller"></cart>
    </div>
</template>

<script>
    import {getStoreById} from '@/api/detail.js' 
    import sellerHeader from "./seller-header.vue"
    import order from "./order.vue"
    import BScroll from "better-scroll";
    import cart from "./cart.vue";

    export default {
        data(){
            return {
                seller: [],
                active:0,
                scrollBox: null
            }
        },
        components:{
            sellerHeader,
            order,
            cart
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
        mounted() {
            this.scrollBox = new BScroll(".scrollBox", {
                bounce: false,
                click: true
            });
        },
        created(){
            this.getStoreMsg()
        }
    }
</script>

<style lang="scss" scoped>
.scrollBox {
  height: 100vh;
  overflow: hidden;
}
</style>