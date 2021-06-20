<template>
    <div class="comment" ref="commentBox">
        <div>
            <score 
                :delivery="comment.delivery" 
                :score="comment.score" 
                :packing="comment.packing" 
                :flavor="comment.flavor">
            </score>
            <div class="tag-container">
                <tag :tag="comment.label" :currentType="type" @change="change"></tag>
            </div>
            <list :list="comment.rate"></list>
        </div>
    </div>
</template>

<script>
import score from "./score.vue"
import tag from "./tag.vue"
import list from "./list.vue"
import BScroll from "better-scroll";
import {getComment} from "@/api/comment"

    export default {
        data () {
            return {
                type:1, //全部分类
                comment:{},
                commentScroll: null
            }
        },
        components: {
            score,
            tag,
            list
        },
        methods: {
            getDate(){
                return new Promise(resolve=>{
                    getComment({
                        id: this.$route.query.id,
                        type: this.type
                    }).then(res=>{
                        // console.log(res.data)
                        this.comment = res.data
                        resolve()
                    })
                })
            },
            change(id){
                // console.log(id)
                this.type = id;
                this.getDate()
            }
        },
        created () {
            this.getDate().then(()=>{
                //$nextTick保证数据请求完成，且页面挂载也完成
                this.$nextTick(()=>{
                    this.commentScroll = new BScroll(this.$refs.commentBox,{
                        click: true,
                        bounce: false
                    })
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
.comment{
    // margin-bottom: 50px;
    height: calc(100vh - 44px);
}
.tag-container{
    border-top: 0.2rem solid #f4f4f4;
}
</style>