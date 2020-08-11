<template>
  <div class="toastArea" v-show="is_toast">
       <div class="marsk" @click="toastHide"></div>
       <div class="toast1" @click="toastHide">
           <span class="msg">{{is_toastMsg}}</span>
       </div>
       <!-- <div class="toast2" @click="toastHide">


       </div> -->
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
      return {

      }
  },
  props: ['language'],
  computed:{
      is_toast(){
          return this.$store.getters['AllallToast'];
      },
      is_toastMsg(){
          return this.$store.getters['AllallMsg'];
      },
      des:function(){
          console.log('销毁toast')
        this.$store.commit['set_allMsg','']
      }
  },
  methods:{
      toastHide:function(){
          this.$Toast(false)
      },
     
  },
  destroyed(){
      console.log('destroyed')
    //   this.des()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toastArea{
    width: 100%;
    height: 100%;
    position: fixed;
}
.marsk{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 3000;
}
.toast1{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 3001;
    padding: 10px 40px;
    max-height: 80px;
    max-width: 120px;
    background-image: url('../assets/imgs/pao1.jpg');
    background-size: 180px 140px;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .msg{
        line-height: 20px;
        text-align: center;
    }
}
.toast2{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 3001;
    max-height: 100px;
    max-width: 300px;
    background-image: url('../assets/imgs/pao2.jpg');
    background-size: 300px 60px;
    background-position: center;
    background-repeat: no-repeat;
}

</style>
