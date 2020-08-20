<template>
  <div class="loginPages">
        <input type="text" v-model.trim="accountNumber"><br>
        <input type="text" v-model.trim="password"><br>
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

        
        // var str = {params:encodeURIComponent(encrypt(JSON.stringify({accountNumber:this.accountNumber,password:this.password})))};
        // var str =JSON.stringify({accountNumber:this.accountNumber,password:this.password});
        // var str = encodeURIComponent(encrypt(JSON.stringify({accountNumber:this.accountNumber,password:this.password})));
        
        var str = {accountNumber:this.accountNumber,password:this.password};
        getLoginResultPost(str,'/login/po').then(//
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
        




        // this.$axios({  
        //     url: '/api?id=1',
        //     method: 'get',
        //     //params参数必写 , 如果没有参数传{}也可以
        // data:{ 
        // }
        // })
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        // this.$axios({  
        //     url: '/api/po',
        //     method: 'post',
        //     //params参数必写 , 如果没有参数传{}也可以
        // data:{ 
        //     id:3,
        // }
        // })
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
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

