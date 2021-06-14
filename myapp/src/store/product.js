import {getProdById} from '@/api/detail'
import Vue from 'vue'
const product = {
    namespaced: true,
    state: {
        productList: []
    },
    getters:{

    },
    mutations: {
        saveProdList(state,arr){
            state.productList = [...arr]
        },
        addCart(state,{type,index}){
            //分类 索引
            let prod = state.productList[type].content[index];
            if(prod.count){
                Vue.set(prod,'count',prod.count+1)
            }else{
                Vue.set(prod,'count',1)
            }
        },
        reduceCart(state,{type,index}){
            let prod = state.productList[type].content[index];
            if(prod.count){
                Vue.set(prod,'count',prod.count-1)
            }
        }
    },
    actions: {
        //请求商品列表 
        getProdList({commit},id){
            return new Promise(resolve=>{
                getProdById({id}).then(res=>{
                    // console.log(res)
                    commit('saveProdList',res.data.goods)
                    resolve()
                })
            })
        }
    }
}
export default product