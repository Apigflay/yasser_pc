<template>
  <div class="noPage">
       <h1>404</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'No404',
  components: {
   
  },
  data(){
      const num =Math.floor(Math.random()*3)+1;
      return {
        mathNum:num,
      }
  },
  created() {
  },
  computed:{
  },
  watch:{

  },
  methods:{
   
  },
  beforeMount(){
  },
  mounted(){
  },
}
</script>

<style lang="scss">
.noPage{
  width: 100%;
  height: 100%;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
</style>

