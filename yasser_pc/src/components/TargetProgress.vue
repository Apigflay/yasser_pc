<template>
  <div class="targetProgressWarp">
        <div class="targetProgressArea">
            <!-- progress bar -->
            <div class="xui-wrapper xui-myPromption-wrapper">
                <div class="xui-mainContain pt10 bg_fff">
                    <div class="xui-returnCommission">
                        <div class="xui-process">
                            <i id="icon-flag" class="xui-icon-flag" :style="'left:'+width+'px'">{{persNum}}%</i>
                            <div class="xui-process-static"></div>
                            <div id="process-bar" class="xui-process-active" :style="'width:'+width+'px'"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'TargetProgress',
  data(){
      const persent = 0.01;
      return {
          width:1024*persent,
          persNum:persent*100,
      }
  },
  computed:{
      
  },
  created(){

  },
  methods:{   

  },
  mounted(){
  },
  destroyed(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
.targetProgressWarp{
    padding-bottom: 50px;
    height: 150px;
    width: 100%;
}
.targetProgressArea{
    margin: auto;
    height: 150px;
    width: 1200px;
}
// -----------
.xui-myPromption-wrapper .xui-returnCommission .xui-process {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 28px 0 12px;
    width: 1024px;
}
.xui-myPromption-wrapper .xui-process .xui-icon-flag {
    position: absolute;
    top: 10px;
    left: 0;
    width: 12px;
    height: 18px;
    background-size: 11px;
}
.xui-myPromption-wrapper .xui-process .xui-process-static {
    width: 100%;
    height: 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px rgba(0, 198, 255,.6);
    box-shadow: 0 0 5px rgba(0, 198, 255,.6);
    background-color: rgba(0, 198, 255,.6);
}
.xui-myPromption-wrapper .xui-process .xui-process-active {
    position: absolute;
    top: 28px;
    left: 0;
    width: 0;
    height: 14px;
    border: 1px solid #4dafe2;
    border-radius: 10px;
    background-image: linear-gradient(60deg, transparent 0rem, transparent 0.8rem, #4dafe2 0.8rem, #4dafe2 1.6rem, transparent 1.6rem, transparent 2.4rem, #4dafe2 2.4rem);
    background-color: #008cd5;
    background-size: 20px 38px;
    box-shadow: 1px 1px 5px rgba(0, 140, 213, .8);
    box-shadow: 1px 1px 5px rgba(0, 140, 213, .8);
    -webkit-animation: process 800ms infinite linear;
    animation: process 800ms infinite linear;
}
.xui-myPromption-wrapper .xui-process .xui-process-active:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 10px;
    background-image: linear-gradient(to bottom,rgba(0, 140, 213, .6), rgba(0, 140, 213, .6) 15%, transparent 60%, rgba(0, 140, 213, .6));
}

/* 动画 */
@-webkit-keyframes process {
    0% { background-position: 0 0; }
    100% { background-position: 20px 0; }
}
@keyframes process {
    0% { background-position: 0 0; }
    100% { background-position: 20px 0; }
}
</style>