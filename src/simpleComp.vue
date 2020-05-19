<template>
  <div class="simpleComp">
    simpleComp组件
  </div>
</template>
<script>
//  常量声明
const value = {
  msg:"Hello World!"
}
export default {
  name: 'simpleComp',
  components:{},
  props:{},
  data(){
    return {
      //  常量
      value,
      //  状态
      flag:true,
      //  变量
      list:[],
    }
  },
  computed:{},
  watch:{},
  methods:{
    test(){
      console.log("Hello World！")
    }
  },
  mounted(){}
}
</script>
<style scoped>
.simpleComp {

}
</style>