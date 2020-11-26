import Vue from "vue"

let obj={
         

}
// 全局组件
for(let i in obj){
    Vue.component(i,obj[i])

}