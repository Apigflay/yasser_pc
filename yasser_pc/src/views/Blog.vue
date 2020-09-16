<template>
  <div class="blogPages">
        <div class="navWrap">
            <div class="navArea">
                <div class="navList">
                    <span class="per">发现</span>
                    <span class="per">我的主页</span>
                    <span class="per">消息</span>
                    <div class="searchArea" :class="inputWidth==2?'inputW':''">
                        <input class="input" type="text" @focus="goFocus" @blur="goBlur">
                        <svg class="icon searchIcon" aria-hidden="true">
                            <use xlink:href="#icon-search-o"></use>
                        </svg>
                    </div>
                </div>
                <span class="writeBtn" @click="goPages(0)">
                    <svg class="icon xiewenzhang" aria-hidden="true">
                        <use xlink:href="#icon-xiewenzhang"></use>
                    </svg>
                    写文章
                </span>
            </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {addPicture} from "../lib/http/upload.js"
import {encrypt,decrypt} from "../lib/js/GlobalFunction.js"
export default {
  name: 'EditBlog',
  components: {
      
  },
  data(){
      return {
          inputWidth:1,
        accountNumber:'',
        password:'',
        file:null,
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
        language(curval,oldval){   //监听了computed中getorderid的值，如果发生改变就触发console.log
            console.log(curval,oldval)
        }
        // language: {
        // 	deep: true,
        // 	handler: function (newVal,oldVal){
        // 	  console.log('newValue', newVal);
        // 	  console.log('oldValue', oldVal);
        // 	}
        // }
  },
  methods:{
      goPages:function(pageId){
          switch(pageId){
            case 0:
            this.$router.push({path:'/editblog'});
            break;
        }
      },
      goFocus:function(){
          this.inputWidth=2;
      },
      goBlur:function(){
          this.inputWidth=1;
      },
    seletFile:function(ev){
        console.log(ev.target.files)
        console.log(ev.target.files[0])
        this.file = ev.target.files[0];
    },
    goLogin:function(){
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
  },
}
</script>

<style lang="scss">
.blogPages{
  width: 100%;
  height: 100%;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
.navWrap{
    width: 1200px;
    height: 58px;
    margin: auto;
    .navArea{
        height: 58px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navList{
            font-size: 18px;
            display: flex;
            align-items: center;
            height: 58px;
            color: #333;
            .per{
                padding: 0 20px;
                height: 58px;
                line-height: 58px;
                cursor: pointer;
            }
            .per:hover{
                background: #f9f9f9
            }
            .searchArea{
                display: flex;
                align-items: center;
                padding: 0 20px 0 20px;
                width: 160px;
                height: 38px;
                font-size: 14px;
                border: 1px solid #eee;
                border-radius: 40px;
                background: #eee;
                .input{
                    height: 30px;
                    width: 130px;
                    outline: none;
                    border:0;
                    background: #eee;
                }
                .searchIcon{
                    width: 30px!important;
                    height: 30px!important;
                }
            }
            .inputW{
                width: 220px;
                .input{
                    width: 190px;
                }
            }
        }
        .writeBtn{
            width: 100px;
            height: 40px;
            border-radius: 20px;
            font-size: 15px;
            color: #fff;
            background-color: #ea6f5a;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            .xiewenzhang{
                width: 15px!important;
                height: 15px!important;
            }
        }
    }
}

</style>


