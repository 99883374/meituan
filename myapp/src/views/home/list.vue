<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getDate"
            >
        <ul class="list-container">
            <li class="shop-list" v-for="obj in list" :key="obj.id" @click="goDetail(obj.id)">
                <div class="img-box">
                    <img :src="obj.img" :alt="obj.name">
                </div>
                <div class="info-box">
                    <div class="title">{{obj.name}}</div>
                    <div class="rate-box">
                        <div>
                            <star :score="obj.score"></star>
                            <span class="rate">{{obj.score}}分</span>
                            <span>月销{{obj.num}}</span>
                        </div>
                        <div>
                            <span>{{obj.minute}}分钟</span>
                            <span class="left-line">{{obj.distance}}</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>起送{{obj.per_capita}}</span>
                        <span class="left-line">配送{{obj.fee}}</span>
                        <span class="left-line">人均{{obj.price}}</span>
                    </div>
                </div>
            </li>

        </ul>
        </van-list>
    </div>
</template>

<script>
    import star from './../../components/star'
    import {getStore} from '@/api/home.js' 

    export default {
        data(){
            return {
                current: 0,
                size: 10,
                total: 0,
                list: [],
                loading: false,
                finished: false
            }
        },
        components:{
            star
        },
        methods:{
            //获取商家列表
            getDate(){
                getStore({
                    current:this.current,
                    size: this.size
                }).then(res=>{
                    // console.log(res)
                    // this.list = res.data.list
                    this.list = this.list.concat(res.data.list)
                    this.loading = false
                    this.current++;
                    this.total = res.data.total;
                    if(this.list.length >= this.total){
                        this.finished = true
                    }
                })
            },
            goDetail(id){
                this.$router.push({path:"/detail",query:{id}})
            }
        },
        created(){
            // this.getDate()
        }
    }
</script>

<style lang="scss" scoped>
.list-container{
    padding: 0 0.2rem;
    .shop-list{
        margin: 0.2rem 0 0.5rem;
        display: flex;
        .img-box{
            width: 1.52rem;
            height: 1.14rem;
            margin-right: 0.16rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info-box{
            flex: 1;
            .title{
                font-size: 0.32rem;
                color: #333;
                line-height: 1.4;
                font-weight: 600;
            }
            .rate-box,
            .distribution-box{
                display: flex;
                color: #333;
                line-height: 1.4;
                font-family: mtsi-font;
                font-size: 11px;
                .rate{
                    margin-right: 0.2rem;
                }
                .left-line::before{
                    content:'';
                    display: inline-block;
                    width: 1px;
                    height: 6px;
                    background-color: #ccc;
                    margin: 0 3px;
                }
            }
            .rate-box{
                justify-content: space-between;
            }
        }
    }
}
</style>