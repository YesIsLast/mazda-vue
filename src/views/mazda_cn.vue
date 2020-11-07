<template>
  <div class="lee-Padding-Top-100">
    <!-- 轮播图 -->
    <carousel v-bind:imgList="carouselList"></carousel>
    <!-- 马自达新世代 -->
    <div class="mazdanew">
      <h3>马自达新世代</h3>
      <p>内燃机新物种 驾乘愉悦与安全环保完美融合・删繁就简精雕细琢的大简之美</p>
      <button>了解详情</button>
    </div>
    <!-- 品牌技术归纳 -->
    <brandType></brandType>
    <!-- 公司周边新闻 -->
    <companyNews></companyNews>
    <!-- 公司往届新闻 -->
    <carouselNews></carouselNews>
    <!-- 主要车型展示 -->
    <allcar></allcar>
    <!-- 全屏固定提示 -->
    <globleMousealert></globleMousealert>
  </div>
</template>
<script>
import carousel from "../components/carousel/carousel";
import globleMousealert from "../components/globleMousealert/globleMousealert";
import brandType from "../components/brandType/brandType";
import companyNews from "../components/companyNews/companyNews";
import carouselNews from "../components/carouselNews/carouselNews";
import allcar from "../components/allcar/allcar";
export default {
  name: "mazda_cn",
  components: {
    carousel,
    globleMousealert,
    brandType,
    companyNews,
    carouselNews,
    allcar,
  },
  mounted() {
    //   更改网页标签头
    this.webTitle = "马自达中国官网";
  },
  data() {
    return {
      carouselList: [
        {
          url: "",
          hyperLink: "",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.mazdanew {
  width: 100%;
  height: 20vh;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 0;
    color: #ffffff;
  }
  button {
    width: 162px;
    height: 42px;
    border-radius: 2px;
    border: solid 1px #c9c9c9;
    color: #ffffff;
    background-color: #282828;
    transition: all 300ms ease-in-out;
  }
  button:hover {
    transition: all 300ms ease-in-out;
    width: 172px;
    background: linear-gradient(
      to right,
      #5c5c5c 0%,
      #9b9b9b 50%,
      #5c5c5c 100%
    );
  }
}
</style>