<template>
  <div class="loginPages">
        <input type="file" accept="image/*" @change="seletFile($event)" multiple="multiple"> 
        <button @click="goLogin">login</button>
        <div class="markdownWrap">
            <mavon-editor v-model="editorValue"/>
        </div>
        <button @click="getEditorValue">get editor msg</button>
        <div class="markdownWrap">
            <mavon-editor v-model="editorValue2"/>
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
        accountNumber:'',
        password:'',
        file:null,
        editorValue:'',
        editorValue2:'',
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

<style lang="scss">
.loginPages{
  width: 100%;
  height: 100%;
}
.icon {
    width: 35px!important;
    height: 35px!important;
}
.markdownWrap{
    width: 100%;
    min-height: 600px;
    background: #eee;
}
</style>


