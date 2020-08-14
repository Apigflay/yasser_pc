<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
      return {

      }
  },
  props: [],
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
  watch:{
    // cityName: {
    //   handler(newName, oldName) {
    //     // ...
    //   },
    //   deep: true,
    //   immediate: true
    // }

    // firstName(newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName;
    // }
  },
  beforeCreate() {
    // localStorage.setItem("key", "value");
    // localStorage.getItem("key");
    // localStorage.removeItem("key");
    // console.log('调用了beforeCreat钩子函数')
    var yasser_state = JSON.parse(localStorage.getItem("yasser_state"));
    Object.keys(yasser_state).map(item => {
      this.$store.state[item] = yasser_state[item]
    });
  },
  created() {
    // console.log('调用了created钩子函数')
    //在页面刷新时将vuex里的信息保存到localStorage里   //前期开发暂未加密
    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("yasser_state",JSON.stringify(this.$store.state))
    })
  },
  beforeMount() {
    // console.log('调用了beforeMount钩子函数')
  },
  mounted() {
    // console.log('调用了mounted钩子函数')
  },
  beforeUpdate(){
    // console.log('调用了beforeUpdate钩子函数')
  },
  updated(){
    // console.log('调用了updated钩子函数')
  },
  beforeDestroy(){
    // console.log('调用了beforeDestroy钩子函数')
  },
  destroyed(){
    // console.log('调用了destroyed钩子函数')
  },
  methods:{
     
  }
}
</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
