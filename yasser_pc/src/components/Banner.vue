<template>
  <div class="swiperWarp">
        <div class="bannerArea">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index">
                        <img :src="item" alt="">
                    </div> -->
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-4.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-6.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-7.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-8.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img class="img" src="../assets/imgs/banner/nature-9.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
        </div>
  </div>
</template>

<script>
// var Swiper = require('@/lib/tools/swiper/swiper-bundle.min.js')
import Swiper from '@/lib/tools/swiper/swiper-bundle.min.js'
import '@/lib/tools/swiper/swiper-bundle.min.css' /*引入swiper公共样式*/
export default {
  name: 'Banner',
  data(){
      return {
         bannerData:['../assets/imgs/banner/nature-1.jpg','../assets/imgs/banner/nature-2.jpg','@/assets/imgs/banner/nature-3.jpg',
         '@/assets/imgs/banner/nature-4.jpg','@/assets/imgs/banner/nature-5.jpg','@/assets/imgs/banner/nature-6.jpg',
         '@/assets/imgs/banner/nature-7.jpg','@/assets/imgs/banner/nature-8.jpg','@/assets/imgs/banner/nature-9.jpg',]
      }
  },
  computed:{
      
  },
  created(){

  },
  methods:{   
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
        }


  },
  mounted(){
      this.initSwiper()
  },
  destroyed(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
.swiperWarp{
    height: 1024px;
    width: 100%;
}
.bannerArea{
    margin: auto;
    height: 1024px;
    width: 1024px;
    .swiper-container{
        height: 1024px;
        width: 1024px; 
        .img{
            height: 1024px;
            width: 1024px;
        }
    }
}

</style>