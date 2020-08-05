<template>
  <div class="homePage">
    <!-- <div class="homeArea"> -->
        <NavigationBar></NavigationBar>
    <!-- </div> -->
    
    1 2
    

    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-haimianbaobao-"></use>
    </svg>
  
    <KeepOnRecord></KeepOnRecord>  
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import KeepOnRecord from '@/components/KeepOnRecord.vue'
export default {
  name: 'Home',
  components: {
    KeepOnRecord,
    NavigationBar
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
.homePage{
  width: 100%;
  height: 100%;
  // background: #2c3e50;
}
.icon {
    width: 35px!important;
    height: 35px!important;
  }
</style>

