<template>
  <div class="navWrap">
        <div class="navArea">
            <div class="wel-text">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-W"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-E"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-L"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-C"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-O"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-M"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-E"></use>
                </svg>
                <span class="kong"></span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-T"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-O"></use>
                </svg>
                <span class="kong"></span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-M"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-Y"></use>
                </svg>
                <span class="kong"></span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-W"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-E"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-B"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-S"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-I"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-T"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-E"></use>
                </svg>
            </div>
            <div class="wel-function">
                <svg class="icon signOut" aria-hidden="true" v-if="isLogin" @click="goLogin(0)">
                    <use xlink:href="#icon-tuichu1"></use>
                </svg>
                <svg class="icon login" aria-hidden="true" v-if="!isLogin" @click="goLogin(1)">
                    <use xlink:href="#icon-icon"></use>
                </svg>
                <svg class="icon" aria-hidden="true" v-if="isLogin&&mathNum==1">
                    <use xlink:href="#icon-haimianbaobao-"></use>
                </svg>
                <svg class="icon" aria-hidden="true"  v-if="isLogin&&mathNum==2">
                    <use xlink:href="#icon-duolaameng-"></use>
                </svg>
                <svg class="icon" aria-hidden="true"  v-if="isLogin&&mathNum==3">
                    <use xlink:href="#icon-tangmumao-"></use>
                </svg>
                <div class="languageArea">
                     <svg class="icon" aria-hidden="true" v-if="languageG==1"  @mouseenter="goLanguageArea(1)">
                        <use xlink:href="#icon-CN1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" v-if="languageG==2"  @mouseenter="goLanguageArea(1)">
                        <use xlink:href="#icon-en1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" v-if="languageG==3"  @mouseenter="goLanguageArea(1)">
                        <use xlink:href="#icon-TC"></use>
                    </svg>
                    <div class="languegeBox" v-if="languageArea">
                        <svg class="icon" aria-hidden="true" key="1" @click="changeLanguage(1)">
                            <use xlink:href="#icon-CN1"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" key="2" @click="changeLanguage(2)">
                            <use xlink:href="#icon-en1"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" key="3" @click="changeLanguage(3)">
                            <use xlink:href="#icon-TC"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data(){
      const num = Math.floor(Math.random()*3+1)
      return {
          languageG:this.language,//1 cn 2 en 3 tc
          languageArea:false,
          mathNum:num,//随机数  1~3
      }
  },
  props: ['language'],
  computed:{
      isLogin(){
          return this.$store.getters['AllallIsLogin']
      }
  },
  methods:{
      goLanguageArea:function(id){
          if(id==1){
              this.languageArea=true;
          }
          var that = this;
          clearTimeout(timer)
          var timer = setTimeout(function(){
              that.languageArea=false;
          },5000)
      },
      changeLanguage:function(id){
          this.languageArea=false;
          if(id==1){
              this.languageG=1;
              this.$emit('getChirldrenMethod',1) 
          }else if(id==2){
              this.languageG=2;
              this.$emit('getChirldrenMethod',2) 
          }else if(id==3){
              this.languageG=3;
              this.$emit('getChirldrenMethod',3) 
          }
      },
      goLogin:function(id){
          console.log(this.$store.getters['AllallIsLogin'])
          if(id==0){
              console.log('退出登录')
              this.$message('退出登录');
              this.$store.dispatch('SET_allIsLogin',false)
          }else if(id==1){
            this.$router.push({path:'/login'});
          }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navWrap{
    width: 100%;
    height: 46px;
    background: #0d3c55;
}
.navArea{
    width: 1200px;
    height: 46px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0d3c55;
    .wel-text{
        display: flex;
        align-items: center;
        height: 46px;;
        .icon{
            height: 14px!important;
            width: 14px!important;
            margin-left:-5px;
        }
        .kong{
            width: 10px;
            height: 14px;
        }
    }
    .wel-function{
        height: 46px;
        display: flex;
        align-items: center;
        .login{
                cursor: pointer;
        }
        .languageArea{
            margin-left: 10px;
            height: 20px;
            width: 20px;
            .icon{
                width: 20px!important;
                height: 20px!important;
                background-color:yellow;
                cursor: pointer;
            }
            .languegeBox{
                position: absolute;
                width: 20px;
                // background: red;
                .icon{
                    background: rgb(5, 245, 65);
                    cursor: pointer;
                }
            }
        }
        .icon{
            border-radius: 35px;
        }
        .icon:hover{ 
            background-color:yellow;
        }
        .signOut{
            height: 20px!important;
            width: 20px!important;
            border-radius: 20px;
            cursor: pointer;
        }
    }
}
</style>
