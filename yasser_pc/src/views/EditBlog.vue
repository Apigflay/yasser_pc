<template>
  <div class="loginPages">
        <input type="file" accept="image/*" @change="seletFile($event)" multiple="multiple"> 
        <button @click="goLogin">login</button>

        <Toast></Toast>
  </div>
</template>

<script>
// @ is an alias to /src
import {getLoginResultGet,getLoginResultPost} from "../lib/http/login.js"
import {encrypt,decrypt} from "../lib/js/GlobalFunction.js"
export default {
  name: 'Login',
  components: {
      
  },
  data(){
      return {
        accountNumber:'',
        password:''
      }
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
    seletFile:function(ev){
        console.log(ev.target.files)
        console.log()
    },
    goLogin:function(){
        console.log(this.accountNumber)
        console.log(this.password)
        // var str = {accountNumber:this.accountNumber,password:this.password};
        // getLoginResultGet(str,'/login').then(//
        //     (res) => {
        //         console.log(res.data)
        //         if(res.data.code==100){
        //             this.$Toast(true,res.data.msg)
        //             this.$store.commit('set_allIsLogin',true);
        //             this.$store.commit('set_allLoginInfo',res.data.data[0]);
        //             this.$router.push({path:'/'});
        //         }else{
        //             this.$Toast(true,res.data.msg)
        //         }
        //     },
        //     (err) => {
        //     console.log('get err', err)
        //     }
        // )
        
        var str = {accountNumber:this.accountNumber,password:this.password};
        getLoginResultPost(str,'/po').then(//
            (res) => {
                console.log(res.data)
                if(res.data.code==100){
                    this.$Toast(true,res.data.msg)
                    this.$store.commit('set_allIsLogin',true);
                    this.$store.commit('set_allLoginInfo',res.data.data[0]);
                    this.$router.push({path:'/'});
                }else{
                    this.$Toast(true,res.data.msg)
                }
            },
            (err) => {
            console.log('get err', err)
            }
        )
        




    }
  },
  beforeMount(){
  },
  mounted(){
  },
}
</script>

<style lang="scss">
.loginPages{
  width: 100%;
  height: 100%;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
</style>


