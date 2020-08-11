<template>
  <div class="homePage">
        <!-- nav -->
        <NavigationBar :language="language" @getChirldrenMethod="getChirldrenMethod"></NavigationBar>
        <!-- menu -->
        <div class="menuWrap">
            <div class="menuArea">
                <div class="menuTip">
                  <p>章鱼🐙</p>
                  <p>一个不幽默的人.</p>
                </div>
                <div class="menuList">
                  <div class="menuPer" @click="goPages(1)">首页HOME</div>
                  <div class="menuPer" @click="goPages(2)">博客BLOG</div>
                  <div class="menuPer" @click="goPages(3)">视频VIDEO</div>
                  <div class="menuPer" @click="goPages(4)">音乐MUSIC</div>
                  <div class="menuPer" @click="goPages(5)">游戏GAMES</div>
                  <div class="menuPer" @click="goPages(6)">终端ADMIN</div>
                  <div class="menuPer" @click="goPages(7)">敬请期待...</div>
                  <div class="menuPer" @click="goPages(8)">作者ABOUT ME</div>
                </div>
            </div>
        </div>
        <!-- moon -->
        <Moon></Moon>
    
    
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
import Moon from '@/components/Moon.vue'
export default {
  name: 'Home',
  components: {
    KeepOnRecord,
    NavigationBar,
    Moon
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
        this.$Toast(true,'哈哈哈')
      }else if(id==2){
        this.$Toast(false)
      }
    },
    goPages:function(pageId){
      console.log(pageId)
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
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
.menuWrap{//菜单栏
  width: 100%;
  height: 77px;
  background: #fff;
  .menuArea{
    width: 1200px;
    height: 77px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .menuTip{
      text-align: left;
      p:nth-child(1){
        font-size: 24px;
        color: #be5000;
        line-height: 28px;
        margin-top: 16px;
        cursor: pointer;
      }
      p:nth-child(1):hover{
        text-decoration: underline;
      }
      p:nth-child(2){
        font-size: 12px;
        line-height: 16px;
      }
    }
    .menuList{
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .menuPer{
        margin-left: 30px;
        cursor: pointer;
      }
      .menuPer:hover{
        color: #f16c20;
      }
    }
  }
}
</style>

