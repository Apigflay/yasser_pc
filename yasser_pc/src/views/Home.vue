<template>
  <div class="homePage">
    <!-- <div class="homeArea"> -->
        <NavigationBar :language="language" @getChirldrenMethod="getChirldrenMethod"></NavigationBar>
    <!-- </div> -->
    
    
    {{language}}
    <Toast></Toast>
    <span @click="texttoast(1)"> hahhhh</span>
    <span @click="texttoast(2)"> none</span>
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
    language(){
      return this.$store.getters['AllallLanguage']
    }
  },
  watch:{

  },
  methods:{
    getChirldrenMethod:function(msg){
      this.$store.commit['set_allLanguage',msg]
    },
    texttoast:function(id){
      if(id==1){
        console.log(this)
        this.$Toast(true,'哈哈哈')
      }else if(id==2){
        console.log(this)
        this.$Toast(false)
      }
      
      
    }
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

