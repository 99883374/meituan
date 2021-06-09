<template>
    <div>
        <ul class="list-container">
            <li class="shop-list">
                <div class="img-box">
                    <!-- <img src="" alt=""> -->
                </div>
                <div class="info-box">
                    <div class="title">奈雪</div>
                    <div class="rate-box">
                        <div>
                            <star :score="3.5"></star>
                            <span class="rate">4.9分</span>
                            <span>月销1000</span>
                        </div>
                        <div>
                            <span>35分钟</span>
                            <span class="left-line">10km</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>起送</span>
                        <span class="left-line">配送</span>
                        <span class="left-line">人均</span>
                    </div>
                </div>
            </li>
            <li class="shop-list">
                <div class="img-box">
                    <!-- <img src="" alt=""> -->
                </div>
                <div class="info-box">
                    <div class="title">奈雪</div>
                    <div class="rate-box">
                        <div>
                            <star :score="5"></star>
                            <span class="rate">4.9分</span>
                            <span>月销1000</span>
                        </div>
                        <div>
                            <span>35分钟</span>
                            <span class="left-line">10km</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>起送</span>
                        <span class="left-line">配送</span>
                        <span class="left-line">人均</span>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    import star from './../../components/star'
    export default {
        components:{
            star
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