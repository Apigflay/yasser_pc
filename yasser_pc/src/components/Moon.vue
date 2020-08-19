<template>
  <div class="moonArea">
      	<!-- sun 太阳-->
        <div id="sun">
            <img id="sunbg" >
        </div>
        <!-- mecury 水星 8 -->
        <div id="mercury-orbit">
            <img id="mercury" src="../assets/imgs/mercury.png">
        </div>
        <!-- venus 金星 6-->
        <div id="venus-orbit">
            <img id="venus" src="../assets/imgs/venus.jpg">
        </div>
         <!-- earth 地球 5-->
        <div id="earth-orbit">
            <div id="moon-orbit">
                <img id="moon" src="../assets/imgs/moon.png">
            </div>
            <img id="earth" src="../assets/imgs/earth.jpg">
        </div>
        <!--mars 火星 7-->
        <div id="mars-orbit">
            <img id="mars" src="../assets/imgs/venus.jpg">
        </div>
        <!--jupiter 木星 1-->
        <div id="jupiter-orbit">
            <img id="jupiter" src="../assets/imgs/jupiter.jpg">
        </div>
        <!--saturn 土星 2-->
        <div id="saturn-orbit">
            <img id="saturn" src="../assets/imgs/saturn.png">
        </div>
        <!--uranus 天王星 3-->
        <div id="uranus-orbit">
            <img id="uranus" src="../assets/imgs/uranus.png">
        </div>
        <!--neptune 海王星 4-->
        <div id="neptune-orbit">
            <img id="neptune" src="../assets/imgs/neptune.png">
        </div>
        <!-- time -->
        <div class="timeArea">
            距离新的一年还有{{days}}天{{hours}}小时{{minuts}}分{{seconds}}秒 <br>
            加油💪，不留遗憾
        </div>
  </div>
</template>

<script>
export default {
  name: 'Moon',
  data(){
      return {
          days:'',
          hours:'',
          minuts:'',
          seconds:''
      }
  },
  computed:{
      
  },
  created(){
      this.InitTimeReducer()
  },
  methods:{   
      getInitTime:function(){
        var start=new Date
        var begin=start.getTime()
        var ends=new Date("2021/2/12 00:00:00");
        var end=ends.getTime();
        var back=end-begin
        var tian=parseInt(back/1000/60/60/24)
        var shi=parseInt(back/1000/60/60%24)
        var fen=parseInt(back/1000/60%60)
        var miao=parseInt(back/1000%60)
        this.days = tian;
        this.hours = shi;
        this.minuts = fen;
        this.seconds = miao;
    },
    InitTimeReducer:function(){
        var that =this;
        clearInterval(timer)
        var timer = setInterval(function(){
            that.getInitTime()
        },1000)
    }
  },
  destroyed(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.moonArea{//太空背景
    // width: 100%;
    min-width: 1200px;
    height: 100%;
    position: relative;
    background-image: url('../assets/imgs/Space.jpg');
    overflow: hidden;
}
.timeArea{
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
}
#sun {//太阳光晕
    background: rgb(248, 72, 2);
    position: absolute;
    border-color: orange;
    border-width: 2px;
    border-style: solid;
    border-radius: 90%;
    box-shadow: 0 0 140px orange;
    top: 50%;
    left: 50%;
    height: 200px;
    width: 200px;
    margin-top: -100px;
    margin-left: -100px;
    -webkit-animation: blink 3s linear infinite;
    -moz-animation: blink 3s linear infinite;
    -ms-animation: blink 3s linear infinite;
    -o-animation: blink 3s linear infinite;
    animation: blink 3s linear infinite;
}
#sunbg{//太阳内晕
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url('../assets/imgs/sun.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 255px;
}

#mercury-orbit {//水星公转 8
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin-top: -150px;
    margin-left: -150px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 60s linear infinite;
    -moz-animation: spin-right 60s linear infinite;
    -ms-animation: spin-right 60s linear infinite;
    -o-animation: spin-right 60s linear infinite;
    animation: spin-right 60s linear infinite;
}
#mercury {//水星自转 8
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 26px;
    width: 26px;
    margin-left: -13px;
    margin-top: -13px;
    -webkit-animation: spin-right 12s linear infinite;
    -moz-animation: spin-right 12s linear infinite;
    -ms-animation: spin-right 12s linear infinite;
    -o-animation: spin-right 12s linear infinite;
    animation: spin-right 12s linear infinite;
}

#venus-orbit {//金星公转 6
    position: absolute;
    top: 50%;
    left: 50%;
    width: 450px;
    height: 450px;
    margin-top: -225px;
    margin-left: -225px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 100s linear infinite;
    -moz-animation: spin-right 100s linear infinite;
    -ms-animation: spin-right 100s linear infinite;
    -o-animation: spin-right 100s linear infinite;
    animation: spin-right 100s linear infinite;
}
#venus {//金星自转 6
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 40px;
    width: 40px;
    margin-left: -20px;
    margin-top: -20px;
    -webkit-animation: spin-right 50s linear infinite;
    -moz-animation: spin-right 50s linear infinite;
    -ms-animation: spin-right 50s linear infinite;
    -o-animation: spin-right 50s linear infinite;
    animation: spin-right 50s linear infinite;
}

#earth-orbit {//地球公转 5
    position: absolute;
    top: 50%;
    left: 50%;
    width: 700px;
    height: 700px;
    margin-top: -350px;
    margin-left: -350px;
    // border-width: 1px;
    // border-style: dotted;
    // border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 10s linear infinite;
    -moz-animation: spin-right 10s linear infinite;
    -ms-animation: spin-right 10s linear infinite;
    -o-animation: spin-right 10s linear infinite;
    animation: spin-right 10s linear infinite;
}
#earth {//地球自转 5
    border-color: none;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 54px;
    width: 54px;
    margin-left: -27px;
    margin-top: -27px;
    -webkit-animation: spin-right 5s linear infinite;
    -moz-animation: spin-right 5s linear infinite;
    -ms-animation: spin-right 5s linear infinite;
    -o-animation: spin-right 5s linear infinite;
    animation: spin-right 5s linear infinite;
}

#moon-orbit {//月球公转
    position: absolute;
    top: 0;
    left: 50%;
    height: 100px;
    width: 100px;
    margin-left: -50px;
    margin-top: -50px;
    border-width: 0px;
    border-style: dotted;
    border-color: white;
    border-radius: 50%;
    -webkit-animation: spin-left 2s linear infinite;
    -moz-animation: spin-left 2s linear infinite;
    -ms-animation: spin-left 2s linear infinite;
    -o-animation: spin-left 2s linear infinite;
    animation: spin-left 2s linear infinite;
}
#moon {//月球自转
    border-color: none;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 24px;
    width: 24px;
    margin-left: -12px;
    margin-top: -12px;
    -webkit-animation: spin-left 5s linear infinite;
    -moz-animation: spin-left 5s linear infinite;
    -ms-animation: spin-left 5s linear infinite;
    -o-animation: spin-left 5s linear infinite;
    animation: spin-left 5s linear infinite;
}

#mars-orbit {//火星公转 7
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 900px;
    margin-top: -450px;
    margin-left: -450px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 14s linear infinite;
    -moz-animation: spin-right 14s linear infinite;
    -ms-animation: spin-right 14s linear infinite;
    -o-animation: spin-right 14s linear infinite;
    animation: spin-right 14s linear infinite;
}
#mars {//火星自转 7
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 34px;
    width: 34px;
    margin-left: -17px;
    margin-top: -17px;
    -webkit-animation: spin-right 6s linear infinite;
    -moz-animation: spin-right 6s linear infinite;
    -ms-animation: spin-right 6s linear infinite;
    -o-animation: spin-right 6s linear infinite;
    animation: spin-right 6s linear infinite;
}

#jupiter-orbit {//木星公转 1
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1100px;
    height: 1100px;
    margin-top: -550px;
    margin-left: -550px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 20s linear infinite;
    -moz-animation: spin-right 20s linear infinite;
    -ms-animation: spin-right 20s linear infinite;
    -o-animation: spin-right 20s linear infinite;
    animation: spin-right 20s linear infinite;
}
#jupiter {//木星自转 1
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 98px;
    width: 98px;
    margin-left: -49px;
    margin-top: -49px;
    -webkit-animation: spin-right 2s linear infinite;
    -moz-animation: spin-right 2s linear infinite;
    -ms-animation: spin-right 2s linear infinite;
    -o-animation: spin-right 2s linear infinite;
    animation: spin-right 2s linear infinite;
}

#saturn-orbit {//土星公转 2
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1300px;
    height: 1300px;
    margin-top: -650px;
    margin-left: -650px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 28s linear infinite;
    -moz-animation: spin-right 28s linear infinite;
    -ms-animation: spin-right 28s linear infinite;
    -o-animation: spin-right 28s linear infinite;
    animation: spin-right 28s linear infinite;
}
#saturn {//土星自转 2
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    // box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 88px;
    width: 88px;
    margin-left: -44px;
    margin-top: -44px;
    -webkit-animation: spin-right 3s linear infinite;
    -moz-animation: spin-right 3s linear infinite;
    -ms-animation: spin-right 3s linear infinite;
    -o-animation: spin-right 3s linear infinite;
    animation: spin-right 3s linear infinite;
}

#uranus-orbit {//天王星公转 3
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1500px;
    height: 1500px;
    margin-top: -750px;
    margin-left: -750px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 50s linear infinite;
    -moz-animation: spin-right 50s linear infinite;
    -ms-animation: spin-right 50s linear infinite;
    -o-animation: spin-right 50s linear infinite;
    animation: spin-right 50s linear infinite;
}
#uranus {//天王星自转 3
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 78px;
    width: 78px;
    margin-left: -39px;
    margin-top: -39px;
    -webkit-animation: spin-right 4s linear infinite;
    -moz-animation: spin-right 4s linear infinite;
    -ms-animation: spin-right 4s linear infinite;
    -o-animation: spin-right 4s linear infinite;
    animation: spin-right 4s linear infinite;
}

#neptune-orbit {//海王星公转 4
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1700px;
    height: 1700px;
    margin-top: -850px;
    margin-left: -850px;
    border-width: 0px;
    border-style: dotted;
    border-color: black;
    border-radius: 50%;
    -webkit-animation: spin-right 80s linear infinite;
    -moz-animation: spin-right 80s linear infinite;
    -ms-animation: spin-right 80s linear infinite;
    -o-animation: spin-right 80s linear infinite;
    animation: spin-right 80s linear infinite;
}
#neptune {//海王星自转 4
    border-color: none;
    border-width: 0px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: 0 0 64px black;
    position: absolute;
    top: 0;
    left: 50%;
    height: 64px;
    width: 64px;
    margin-left: -32px;
    margin-top: -32px;
    -webkit-animation: spin-right 4.5s linear infinite;
    -moz-animation: spin-right 4.5s linear infinite;
    -ms-animation: spin-right 4.5s linear infinite;
    -o-animation: spin-right 4.5s linear infinite;
    animation: spin-right 4.5s linear infinite;
}

@-webkit-keyframes spin-right {//自转 向右
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes spin-right {//自转 向右
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-webkit-keyframes spin-left {//自转 向左
    100% {
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
@keyframes spin-left {//自转 向左
    100% {
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
@-webkit-keyframes blink {//sun 外光晕
    0% {
        box-shadow: 0px 0px 180px 2px orange;
    }
    50% {
        box-shadow: 0px 0px 60px 2px orange;
    }
    100% {
        box-shadow: 0px 0px 180px 2px orange;
    }
}
@keyframes blink {//sun 外光晕
    0% {
        box-shadow: 0px 0px 180px 2px orange;
    }
    50% {
        box-shadow: 0px 0px 60px 2px orange;
    }
    100% {
        box-shadow: 0px 0px 180px 2px orange;
    }
}
</style>