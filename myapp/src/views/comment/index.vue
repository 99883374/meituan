<template>
    <div class="comment">
        <score :delivery="comment.delivery" :score="comment.score" :packing="comment.packing" :flavor="comment.flavor"></score>
        <div class="tag-container">
            <tag :tag="comment.label" :currentType="type"></tag>
        </div>
        <list :list="comment.rate"></list>
    </div>
</template>

<script>
import score from "./score.vue"
import tag from "./tag.vue"
import list from "./list.vue"
import {getComment} from "@/api/comment"

    export default {
        data () {
            return {
                type:1, //全部分类
                comment:{}
            }
        },
        components: {
            score,
            tag,
            list
        },
        methods: {
            getDate(){
                getComment({
                    id: this.$route.query.id,
                    type: this.type
                }).then(res=>{
                    console.log(res.data)
                    this.comment = res.data
                })
            }
        },
        created () {
            this.getDate()
        }
    }
</script>

<style lang="scss" scoped>
.comment{
    margin-bottom: 50px;
}
.tag-container{
    border-top: 0.2rem solid #f4f4f4;
}
</style>