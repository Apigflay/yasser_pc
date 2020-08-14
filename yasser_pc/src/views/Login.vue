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

        this.$axios({  
            url: 'http://192.168.12.198:3000/api',
            method: 'get',
            //params参数必写 , 如果没有参数传{}也可以
        data:{ 
        }
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

        this.$axios({  
            url: 'http://192.168.12.198:3000/api',
            method: 'post',
            //params参数必写 , 如果没有参数传{}也可以
        data:{ 
            id:3,
        }
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
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

