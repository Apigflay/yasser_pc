<template>
  <div class="MessageBordWrap">
    <div class="MessageBordArea">
        <h2>留言板</h2>
        <p>敬请期待</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MessageBord',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.MessageBordWrap{
    width: 100%;
    // background: #0d3c55;
    // border-top: 1px solid #000;
    // border-bottom: 1px solid #fff;
}
.MessageBordArea{
  padding: 40px 0;
  width: 1200px;
  height: 92px;
  margin: auto;
//   background: #0d3c55;
  p{
    margin-top: 20px;
  }
}
</style>
