<template>
  <div class="testDemoPage">
        <!--  swiper  -->
        <div class="swiperWarp">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                    <div class="swiper-slide">Slide 10</div>
                </div>
                <div class="swiper-pagination"></div>
                
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
        <!--  swiper2  -->
        <!-- <div class="swiper2Wrap">
            <swiper ref="mySwiper">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div> -->
        <!--  -->

  </div>
</template>

<script>
// console.log(this.$store.getters['login/get_userInfo'])
// this.$store.commit('login/set_userInfo',4444)
// this.$store.dispatch('login/SET_userInfo',333)

// @ is an alias to /src
// var Swiper = require('@/lib/tools/swiper/swiper-bundle.min.js')
import Swiper from '@/lib/tools/swiper/swiper-bundle.min.js'
import '@/lib/tools/swiper/swiper-bundle.min.css' /*引入swiper公共样式*/

export default {
  name: 'TestDemo',
  components: {
   
  },
  data(){
      const num =Math.floor(Math.random()*3)+1;
      return {
        mathNum:num,
        
      }
  },
  created() {
      console.log(this.GLOBAL)
  },
  computed:{
    language(){
      return this.$store.getters['AllallLanguage']
    },
    swiper() {
        // return this.$refs.mySwiper.$swiper
    }
  },
  watch:{

  },
  methods:{
    open() {
        this.$message('这是一条消息提示');
      },
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
      switch(pageId){
        case 1:
          this.$router.push({path:'/'});
          break;
        case 2:
          this.$router.push({path:'/editblog'});
          break;
      }
    },
    initSwiper:function(){
      var swiper = new Swiper('.swiper-container',{
            direction: 'horizontal', // 垂直切换选项 horizontal vertical
            speed:300,//速度
            autoplay : {
                delay:3000
            },
            grabCursor:true,//默认：false举例：true
            setWrapperSize:true,//disflex 布局
            freeMode : true,//抵抗反弹
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
      });
    },
    getInitMsg:function(){
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
        
        // var str = {accountNumber:this.accountNumber,password:this.password};
        var str = this.file;
        console.log(str)
        // var url = URL.createObjectURL(file); 
        var formData = new FormData();
        formData.append('file',this.file);
        addPicture(formData,'/upload/addPic').then(//
            (res) => {
                console.log(res.data)
                if(res.data.code==100){
                    // this.$Toast(true,res.data.msg)
                    // this.$store.commit('set_allIsLogin',true);
                    // this.$store.commit('set_allLoginInfo',res.data.data[0]);
                    // this.$router.push({path:'/'});
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
    this.initSwiper()
  },
}
</script>

<style lang="scss" scoped>
.testDemoPage{
  width: 100%;
  height: 100%;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
.swiperWarp{//swiper
    height: 200px;
    .swiper-container{
        height: 100%;
    }
}
.swiper2Wrap{
    height: 200px;
    .swiper-container{
        height: 100%;
    }
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
.introductionWrap{//介绍
  width: 100%;
  background: #fff;
  .introductionArea{
     width: 1200px;
     margin: auto;
     padding: 90px 0px 60px 0px;
     .intro_h2{
       font-size: 40px;
       line-height: 50px;
       margin-bottom: 20px;
     }
     .intro_underline{
        width: 80px;
        height: 2px;
        background: #f16c20;
        margin: auto;
     }
     .p{
       margin-top: 20px;
       font-size: 16px;
     }
     .ul{
       width: 100%;
       height: 219px;
       display: flex;
       align-items: center;
       justify-content: center;
       .li{
         display: flex;
         font-weight: 600;
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
         width: 230px;
         span{
           margin-top: 30px;
         }
       }
       .li:nth-child(2){
         margin:0 110px;
       }
       .li span:hover{
         color:#f16c20;
       }
     }

  }
}
</style>

