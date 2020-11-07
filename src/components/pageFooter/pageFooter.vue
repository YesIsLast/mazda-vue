<template>
  <div class="main_footer">
    <div class="row1">
      <a href="/" target="_blank">关于企业</a>
      <a target="_blank" href="/">免责声明</a>
      <a target="_blank" href="/">集团网站</a>
      <a target="_blank" href="/">网站地图</a>
      <a target="_blank" href="/">联系我们</a>
      <a target="_blank" href="/" class="iconfont iconweibo icon"></a>
      <a target="_blank" href="/" class="iconfont icon10wechat icon"></a>
      <!-- <img class="lee-Cursor-Pointer" src="../../assets/image/weibo.png" alt="" />
      <img class="lee-Cursor-Pointer" src="../../assets/image/weixin.png" alt="" /> -->
    </div>

    <div class="row2">
      <a href="//beian.miit.gov.cn/#/Integrated/index" target="_blank"
        >沪ICP备17057332号
        <img class="beian" src="../../assets/image/beian.png" alt="" />
        <a
          href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502015480"
          target="_blank"
          >沪公网安备 31011502015480号</a
        ></a
      ><a>©马自达（中国）企业管理有限公司版权所有</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "pageFooter",
};
</script>
<style lang="less" scoped>
// pc端展示CSS
@media all and (orientation: landscape) {
  .main_footer {
    min-height: 160px;
    padding: 35px;

    a {
      font-size: 13px;
      padding: 0 4.5px;
      color: #a8a8a8;
    }
    a:hover {
      color: #ffffff;
    }

    .row1 {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 44px;
        height: 44px;
        margin: 0 20px;
      }
      .icon {
        font-size: 45px;
        margin: 0 15px;
      }
    }
    .row2 {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media all and (orientation: portrait) {
  .main_footer {
    min-height: 160px;
    padding: 2% 0 6%;

    a {
      font-size: 10px;
      color: #a8a8a8;
    }
    a:hover {
      color: #ffffff;
    }

    .row1 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      a {
        width: 20vw;
        margin: 2% 0;
        text-align: center;
      }
      img {
        width: 20px;
        height: 20px;
        margin: 0 20px;
      }
      .icon {
        font-size: 30px;
      }
    }
    .row2 {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      a {
        width: 100vw;
        text-align: center;
        font-size: 10px;
      }
      .beian{
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>