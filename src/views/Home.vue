<template>
  <div class="home">
    <div>
      <img class="title_zh" src="../assets/image/title_zh.png" alt="" />
      <zoomLine />
      <!-- 分项 -->
      <div class="lee-Flex scopeWrap">
        <div class="lee-Margin-LR-5 imgSize">
          <div class="imgHover">
            <button class="lee-btn-line-white">一汽马自达</button>
          </div>
          <img class="" src="../assets/image/site_1.jpg" alt="" />
        </div>
        <div class="lee-Margin-LR-5 imgSize">
          <div class="imgHover">
            <button class="lee-btn-line-white" @click="goRouter('/mazda_cn')">
              马自达中国
            </button>
          </div>
          <img class="" src="../assets/image/site_2.jpg" alt="" />
        </div>
        <div class="lee-Margin-LR-5 imgSize">
          <div class="imgHover">
            <button class="lee-btn-line-white">长安马自达</button>
          </div>
          <img class="" src="../assets/image/site_3.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="lee-Margin-Bottom-20">
      <img
        class="title_zh"
        src="../assets/image/title_international.png"
        alt=""
      />
      <zoomLine />
      <!-- 分项 -->
      <div class="lee-Flex scopeWrap">
        <div class="lee-Margin-LR-5 imgSize">
          <div class="imgHover">
            <button class="lee-btn-line-white">马自达日本</button>
          </div>
          <img class="" src="../assets/image/site_4.jpg" alt="" />
        </div>
        <div class="lee-Margin-LR-5 imgSize">
          <div class="imgHover">
            <button class="lee-btn-line-white">马自达海外</button>
          </div>
          <img class="" src="../assets/image/site_5.jpg" alt="" />
        </div>
      </div>
    </div>
    <zoomLine />
  </div>
</template>

<script>
import zoomLine from "../components/zoomLine/zoomLine";
export default {
  name: "Home",
  components: { zoomLine },
  mounted() {},
};
</script>
<style lang="less" scoped>
// pc端展示CSS
@media all and (orientation: landscape) {
  .home {
    // width: 60vw;
    padding-top: 130px;
    margin: 0 20vw;
    .imgSize {
      width: 260px;
      height: 170px;
      text-align: center;
      cursor: pointer;
      .imgHover {
        width: 260px;
        height: 170px;
        position: absolute;
        transition: all 0.5s;
        button {
          width: 162px;
          height: 42px;
          position: relative;
          top: 70px;
        }
      }
      .imgHover:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
@media all and (orientation: portrait) {
  .home {
    // height: 80vh;
    padding-top: 70px;
    margin: 0px 10px;
    z-index: 1;
    .title_zh {
      width: 107px;
      height: 19px;
    }
    .scopeWrap {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0;
      .imgSize {
        width: 150px;
        height: 87px;
        text-align: center;
        cursor: pointer;
        margin: 5px;
        img {
          width: 100%;
          height: 100%;
        }
        .imgHover {
        width: 150px;
          height: 87px;
          position: absolute;
          transition: all 0.5s;
          button {
            width: 80px;
            height: 25px;
            position: relative;
            top: 40px;
            font-size: 10px;
            z-index: 1;
          }
        }
        .imgHover:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
</style>
