<template>
  <div class="main_news">
    <!-- 图文介绍 -->
    <div class="news">
      <div class="newsTop">
        <img src="../../assets/image/news_max_01.jpg" alt="" />
        <h2 class="title_brand">官方微信</h2>
        <div class="title_brand detailLink">
          了解详情<span class="iconfont iconright"></span>
        </div>
      </div>
      <div class="newsBottom">
        <span>M-Talk丨换上新壁纸，开启美好九月</span>
        <span>more >></span>
      </div>
    </div>
    <div class="news">
      <div class="newsTop">
        <img src="../../assets/image/news_max_02.jpg" alt="" />
        <h2 class="title_brand">新闻报道</h2>
        <div class="title_brand detailLink">
          了解详情<span class="iconfont iconright"></span>
        </div>
      </div>
      <div class="newsBottom">
        <span>M-Talk丨换上新壁纸，开启美好九月</span>
        <span>more >></span>
      </div>
    </div>
    <div class="news">
      <div class="newsTop">
        <img src="../../assets/image/news_max_03.jpg" alt="" />
        <h2 class="title_brand">媒体声音</h2>
        <div class="title_brand detailLink">
          了解详情<span class="iconfont iconright"></span>
        </div>
      </div>
      <div class="newsBottom">
        <span>M-Talk丨换上新壁纸，开启美好九月</span>
        <span>more >></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "companyNews", // 公司周边新闻
};
</script>
<style lang="less" scoped>
.main_news {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 40vh;
  .news {
    width: 33.33333%;
    height: 100%;
    .newsTop {
      width: 100%;
      height: 80%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        transition: all 300ms ease;
        z-index: 1;
      }
      .title_brand {
        z-index: 9;
        position: relative;
        top: -120px;
        text-align: center;
        width: auto;
        color: white;
      }
      .detailLink {
        height: 0;
        overflow: hidden;
        transition: all 500ms ease-in;
        span {
          top: 1px;
          margin: 0 3px;
        }
      }
    }

    .newsTop:hover {
      img {
        height: 110%;
        width: 110%;
        transition: all 500ms ease;
      }
      .detailLink {
        height: 20px;
      }
      .title_brand {
        top: -170px;
      }
    }
    .newsBottom {
      height: 20%;
      background-color: #191919;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      color: #535353;
      span {
        margin: 0 20px;
        cursor: pointer;
      }
    }
    .newsBottom:hover {
      span {
        color: white;
      }
    }
  }
}
</style>