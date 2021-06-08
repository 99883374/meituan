import request from "@/utils/request"

//传data
export function getCategory(data){
    return request({
        url: '/get_type',
        data
    })
}