<template>
  <div class="footerWrap">
    <div class="KeepOnRecordArea">
        <a href="http://www.beian.miit.gov.cn" target="_blank"><p class="p1">豫ICP备18010911号</p></a>
        <p class="p2">A FLAY PAG 提供于 HANGZHOU </p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'KeepOnRecord',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footerWrap{
    width: 100%;
    height: 92px;
    background: #0d3c55;
    padding: 40px 0;
    border-top: 1px solid #000;
    border-bottom: 1px solid #fff;
}
.KeepOnRecordArea{
  width: 1200px;
  height: 92px;
  margin: auto;
  .p1{
    line-height: 28px;
    font-size: 16px;
    text-align: center;
    color: #dbdbdb;
  }
  .p2{
    margin-top: 30px;
    line-height: 34px;
    padding-top: 5px;
    font-size: 14px;
    text-align: center;
    color: #dbdbdb;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
