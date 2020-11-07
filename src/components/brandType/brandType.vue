<template>
  <div class="brandType" id="brandtypeid">
    <div
      class="brandType1 animate__animated animate__fadeInDown"
      id="brandTypeid1"
    >
      <img src="../../assets/image/p3_bg1.jpg" alt="" />
      <h2 class="title_brand">技<span>|</span>创驰蓝天</h2>
      <div class="title_brand detailLink">
        了解详情<span class="iconfont iconright"></span>
      </div>
    </div>
    <div
      class="brandType1 animate__animated animate__fadeInDown"
      id="brandTypeid2"
    >
      <img src="../../assets/image/p3_bg1 (1).jpg" alt="" />
      <h2 class="title_brand">艺<span>|</span>造车如艺</h2>
      <div class="title_brand detailLink">
        了解详情<span class="iconfont iconright"></span>
      </div>
    </div>
    <div
      class="brandType1 animate__animated animate__fadeInUp"
      id="brandTypeid3"
    >
      <img src="../../assets/image/brand_max_ren.jpg" alt="" />
      <h2 class="title_brand">人<span>|</span>越我所驭</h2>
      <div class="title_brand detailLink">
        了解详情<span class="iconfont iconright"></span>
      </div>
    </div>
    <div
      class="brandType1 animate__animated animate__fadeInUp"
      id="brandTypeid4"
    >
      <img src="../../assets/image/1248.jpg" alt="" />
      <h2 class="title_brand">魂<span>|</span>打破常规</h2>
      <div class="title_brand detailLink">
        了解详情<span class="iconfont iconright"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "brandType", // 公司品牌技术宣传模块
  mounted() {
    window.addEventListener("scroll", this.brantype);
  },
  data() {
    return {
      scrollStatus: true, // 当前滚动事件是否允许执行动画过度
    };
  },
  methods: {
    // 鼠标上下滑动监听执行动画事件
    brantype() {
      let scrolltopv = document.documentElement.scrollTop;
      let h = 920; // 滑动节点
      if (scrolltopv > 900 && scrolltopv < 1050) {
        // 校验重复操作
        if (!this.scrollStatus) {
          let that = this;
          setTimeout(function () {
            console.log(that.scrollStatus);
            that.scrollStatus = true;
          }, 600);
          return;
        }
        this.scrollStatus = false;
        // 执行动画
        let domid1 = document.getElementById("brandTypeid1");
        let domid2 = document.getElementById("brandTypeid2");
        let domid3 = document.getElementById("brandTypeid3");
        let domid4 = document.getElementById("brandTypeid4");
        // domid1.style.display = "none";
        // domid2.style.display = "none";
        // domid3.style.display = "none";
        // domid4.style.display = "none";
        if (scrolltopv >= h) {
          // 向下滚动
          console.log("向下滚动");
          console.log(scrolltopv, h, this.scrollStatus);
          domid1.style.display = "none";
          domid2.style.display = "none";
          setTimeout(function () {
            domid3.style.display = "block";
          }, 100);
          setTimeout(function () {
            domid4.style.display = "block";
          }, 200);
        } else {
          // 向上滚动
          console.log("向上滚动");
          console.log(scrolltopv, h, this.scrollStatus);
          setTimeout(function () {
            domid1.style.display = "block";
          }, 200);
          setTimeout(function () {
            domid2.style.display = "block";
          }, 100);
          domid3.style.display = "none";
          domid4.style.display = "none";
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.brandType {
  height: calc(80vh - 100px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  z-index: 9;
  overflow: hidden;
  .brandType1 {
    height: 100%;
    width: 50%;
    overflow: hidden;
    display: none;
    img {
      height: 100%;
      width: 100%;
      transition: all 300ms ease;
      z-index: 1;
    }
    .title_brand {
      z-index: 9;
      position: relative;
      top: -170px;
      text-align: center;
      width: auto;
      color: white;
      span {
        position: relative;
        top: -3px;
      }
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
  .brandType1:hover {
    img {
      height: 110%;
      width: 110%;
      transition: all 500ms ease;
    }
    .detailLink {
      height: 20px;
    }
    .title_brand {
      top: -250px;
    }
  }
}
.brandType .brandType1:first-child {
  display: block;
}
.brandType .brandType1:nth-child(2) {
  display: block;
}
</style>