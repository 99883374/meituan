<template>
    <div>
        <sellerHeader :seller="seller"></sellerHeader>  
    </div>
</template>

<script>
    import {getStoreById} from '@/api/detail.js' 
    import sellerHeader from "./seller-header.vue"
    export default {
        data(){
            return {
                seller: []
            }
        },
        components:{
            sellerHeader
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