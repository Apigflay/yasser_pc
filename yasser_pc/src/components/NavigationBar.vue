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
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-haimianbaobao-"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-duolaameng-"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tangmumao-"></use>
                </svg>
                <div class="languageArea">
                    <svg class="icon" aria-hidden="true" @mouseenter="goLanguageArea(1)" @mouseleave="goLanguageArea(2)">
                        <use xlink:href="#icon-CN"></use>
                    </svg>
                    <div class="languegeBox" v-if="languageArea">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-CN"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-en"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fantizhongwenicon"></use>
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
      return {
          language:1,//1 cn 2 en 3 tc
          languageArea:false,
      }
  },
  props: {
    msg: String
  },
  methods:{
      goLanguageArea:function(id){
          console.log(id)
          if(id==1){
              this.languageArea=true;
          }else if(id==2){
            //   this.languageArea=false;
          }
          var that = this;
          clearTimeout(timer)
          var timer = setTimeout(function(){
              that.languageArea=false;
          },5000)
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
        .languageArea{
            margin-left: 10px;
            height: 20px;
            width: 20px;
            .icon{
                width: 20px!important;
                height: 20px!important;
            }
            .languegeBox{
                background: red;
            }
        }
        .icon{
            border-radius: 35px;
        }
        .icon:hover{ 
            background-color:yellow;
        }
    }
}
</style>
