<template>
  <div class="editPages">
        <div class="editWrap">
            <div class="menuArea"><!-- 文集 -->
                <div class="homeBtn" @click="goPages(0)">回首页</div>
                <div class="addListBtn" @click="newList(0)">
                    <svg class="icon addBtn" aria-hidden="true">
                        <use xlink:href="#icon-jiahao1"></use>
                    </svg>
                    <span>新建文集</span>
                </div>
                <div class="newlyBuild" v-if="newlyBuildStatus">
                    <input class="addInput" type="text" v-model="collectionOfWorks">
                    <button class="tBtn" @click="newList(1)">提交</button>
                    <button class="qBtn" @click="newList(2)">取消</button>
                </div>
                <div class="listArea">
                    <template  v-for="(item,index) in menuList" >
                        <div class="listPer" :key="index" :class="index==activiteId?'listPerActive':''" @click="newList(3,index)">
                            <span>{{item.name}}--{{index}}</span>
                            <svg class="icon" aria-hidden="true" v-if="index==activiteId">
                                <use xlink:href="#icon-shezhi"></use>
                            </svg>
                        </div>
                    </template>
                </div>
                <div class="desetBtn">
                    <span class="spanDeset">
                        <svg class="icon icon1" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                        </svg>
                        设置
                    </span>
                    <span class="spanQuestion">
                        遇到问题
                        <svg class="icon icon1" aria-hidden="true">
                            <use xlink:href="#icon-wenhao"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="articleArea"><!-- 文章标题 -->
                <div class="addArticleBtn" @click="newList(4)">
                    <svg class="icon addBtn" aria-hidden="true">
                        <use xlink:href="#icon-jiahao1"></use>
                    </svg>
                    <span>新建文章</span>
                </div>
                <div class="articleListArea">
                    <template v-for="(item,index) in articleList">
                        <div class="articlePer" :key="index" :class="index==activiteArticleId?'articlePerAc':''" @click="newList(5,index)">
                            <div class="aNum">
                                <svg class="icon addBtn" aria-hidden="true">
                                    <use xlink:href="#icon-wenzhang"></use>
                                </svg>
                                <div>字数:0</div>
                            </div>
                            <div class="aTitle">{{item.title}}</div>
                            <div class="aIcon" v-if="index==activiteArticleId">
                                <svg class="icon addBtn" aria-hidden="true">
                                    <use xlink:href="#icon-shezhi"></use>
                                </svg>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="markdownArea"><!-- 编辑器 -->
                <div class="statusArea"></div>
                <h3 class="markTitle">{{articleList[activiteArticleId].title}}</h3>
                <div class="markdownWrap">
                    <mavon-editor ref="md" class="edit" v-model="editorValue" @save="saveEdit" @imgAdd="imgAddEdit" @imgDel="imgDelEdit" />

                </div>
            </div>
        </div>
        <!-- <input type="file" accept="image/*" @change="seletFile($event)" multiple="multiple"> 
        <button @click="goLogin">login</button>
        <div class="markdownWrap">
            <mavon-editor v-model="editorValue"/>
        </div>
        <button @click="getEditorValue">get editor msg</button>
        <div class="markdownWrap">
            <mavon-editor v-model="editorValue2"/>
        </div> -->
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
          newlyBuildStatus:false,//初始状态
          menuList:[{name:'日记本',type:1},{name:'vue+express',type:2},{name:'小和尚和花和尚的故事',type:3}],//菜单
          activiteId:0,//初始选中菜单
          collectionOfWorks:'',//新建文集名
          articleList:[{id:1,type:1,article:'',title:'2020-09-25'},{id:2,type:2,artile:'',title:'小新的问'}],//文章标题列表
          articleValue:'',//文章内容
          arctcleTicle:'',//文章标题
          activiteArticleId:0,//初始选中文章id


        accountNumber:'',
        password:'',
        file:null,
        editorValue:'',
        editorValue2:'',
      }
  },
  created() {
      console.log(this.$store.getters['AllallLoginInfo'])
      console.log(JSON.stringify([{type:1,name:'日记本'}]))
      
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
    goPages:function(pageId){//页面跳转
        switch(pageId){
            case 0:
                this.$router.push({path:'/blog'});
            break;
        }
    },
    newList:function(id,index){//新建文集
        switch(id){
            case 0://0 新建文集
                this.newlyBuildStatus=true;
            break;
            case 1://提交
                console.log(this.collectionOfWorks)
                this.menuList.push({name:this.collectionOfWorks,type:3})
                this.newlyBuildStatus=false;
            break;
            case 2://取消
                this.newlyBuildStatus=false;
            break;
            case 3://点击per文集
                this.activiteId=index;
            break;
            case 4://新建文章
                this.articleList.push({id:4,type:4,article:'',title:'2020-09-25'})
            break;
            case 5://per文章点击
                this.activiteArticleId=index;
            break;
        }
    },
    saveEdit:function(){//edit保存 
        console.log('keep clicked')
        console.log(this.editorValue)
    },
    imgAddEdit:function(pos, $file){
        console.log('add clicked')
        console.log(pos)
        var str = this.file;
        console.log(str)
        // var url = URL.createObjectURL(file); 
        var formData = new FormData();
        formData.append('file', $file);
        addPicture(formData,'/upload/addPic').then(//
            (res) => {
                console.log(res.data)
                if(res.data.code==100){
                    // this.$Toast(true,res.data.msg)
                    // this.$store.commit('set_allIsLogin',true);
                    // this.$store.commit('set_allLoginInfo',res.data.data[0]);
                    // this.$router.push({path:'/'});
                    console.log(this.$refs.md)
                    this.$refs.md.$img2Url(pos,res.data.ip+res.data.url);
                }else{
                    this.$Toast(true,res.data.msg)
                }
            },
            (err) => {
            console.log('get err', err)
            }
        )
        // 第一步.将图片上传到服务器.
        // var formdata = new FormData();
        // formdata.append('image', $file);
        // axios({
        //     url: 'server url',
        //     method: 'post',
        //     data: formdata,
        //     headers: { 'Content-Type': 'multipart/form-data' },
        // }).then((url) => {
        //     // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        //     /**
        //     * $vm 指为mavonEditor实例，可以通过如下两种方式获取
        //     * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
        //     * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
        //     */
        //     $vm.$img2Url(pos, url);
        // })
        
    },
    imgDelEdit:function(){
        console.log('del clicked')
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
        




    },
    getEditorValue:function(){
        console.log(this.editorValue)
        this.editorValue2=this.editorValue;
    }
  },
  beforeMount(){
  },
  mounted(){
  },
}
</script>

<style lang="scss" scoped>
.editPages{
  width: 100%;
  height: 100%;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
.editWrap{
    width: 100%;
    height: 100%;
    // background: #eee;
    display: flex;
    .menuArea{//菜单栏
        height: 100%;
        width: 230px;
        background: #404040;
        overflow-y: scroll;
        position: relative;
        .homeBtn{
            color:#ec7259;
            border: 1px solid rgba(236,114,89,.8);
            height: 42px;
            width: 210px;
            border-radius: 20px;
            line-height: 42px;
            margin:30px 9px;
            cursor: pointer;
        }
        .addListBtn{
            display: flex;
            align-items: center;
            width: 200px;
            margin: auto;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            .addBtn{
                height: 14px!important;
                width: 14px!important;
            }
        }
        .newlyBuild{//新建
            width: 200px;
            padding: 20px 15px;
            transition:transform 1s;
            .addInput{
                width: 198px;
                height: 35px;
                color: #ccc;
                background-color: #595959;
                border: 1px solid #333;
                text-indent: 8px;
                margin-bottom: 10px;
                font-size: 14px;
                line-height: 20px;
            }
            .tBtn{
                border: 1px solid #42c02e;
                background: #404040;
                color:#42c02e;;
                padding: 5px 15px;
                outline: none;
                margin-right: 10px;
                border-radius: 16px;
            }
            .tBtn:hover{
                color:#41d629;
            }
            .qBtn{
                border: 1px solid #404040;;//#404040;
                background: #404040;
                color:#999;
                padding: 5px 15px;
                outline: none;
                margin-left: 10px;
                border-radius: 16px;
            }
            .qBtn:hover{
                color:#fff;
            }
        }
        .listArea{
            width: 230px;
            padding: 0px 0px 50px 0px;
            .listPer{
                width: 230px;
                padding: 0px 15px 0px 15px;
                height:40px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color:#f2f2f2;
                font-size: 16px;
                cursor: pointer;
                border-left: 3px solid #404040;
                span{
                    max-width: 170px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .icon{
                    width: 16px!important;
                    height: 16px!important;
                }
            }
            .listPerActive{
                border-left: 3px solid #ec7259;
                background-color: #666;
            }
            .listPer:hover{
                background-color: #666;
            }
        }
        .desetBtn{//设置
            position: absolute;
            width: 200px;
            height: 50px;
            bottom: 0;
            padding: 0 15px;
            color: #999;
            font-size: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            .spanDeset:hover{
                color: #fff;
            }
            .icon1{
                color: #999;
                width: 16px!important;
                height: 16px!important;
            }
        }
    }
    .menuArea::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    .menuArea {
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        overflow-y: auto;
    }
    .articleArea{//标题栏
        height: 100%;
        width: 350px;
        // background: red;
        overflow-y: scroll;
        .addArticleBtn{
            height: 60px;
            width: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            .addBtn{
                height: 16px!important;
                width: 16px!important;
                background: #000;
                color: #fff;
                border-radius: 50%;
                margin-left: 20px;
                margin-right: 5px;
            }
        }
        .addArticleBtn:hover{
            opacity: 0.9;
        }
        .articlePer{
            height: 90px;
            border-left:5px solid #fff;
            color:#595959;
            cursor: pointer;
            display: flex;
            align-items: center;
            .aNum{
                margin-left: 20px;
            }
            .aTitle{
                width: 200px;
                margin:0px 15px 0px 20px;
                text-align: left;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .aIcon{
                .icon{
                    width: 16px!important;
                    height: 16px!important;
                }
            }
        }
        .articlePer:hover{
            background:#e6e6e6;
        }
        .articlePerAc{
            border-left:5px solid #ec7259;
            background:#e6e6e6;
        }
    }
    .markdownArea{//编辑器
        flex: 1;
        display: flex;
        flex-direction: column;
        .statusArea{
            height: 30px;
        }
        .markTitle{
            height: 50px;
        }
        .markdownWrap{
            flex: 1;
            .edit{
                width: 100%;
                height: 100%;
            }
        }
    }
}


// .markdownWrap{
//     width: 100%;
//     min-height: 600px;
//     background: #eee;
// }
</style>


