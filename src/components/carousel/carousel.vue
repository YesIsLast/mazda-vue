<template>
  <div>
    <!-- 图片存放区 -->
    <div class="imgBgi">
      <ol>
        <li id="img1" class="animate__animated animate__flipInY">
          <img
            src="http://www.mazda.com.cn/uploadfiles/image/202003/2714585294.jpg"
            alt=""
          />
        </li>
        <li id="img2" class="animate__animated animate__flipInY">
          <img
            src="http://www.mazda.com.cn/uploadfiles/image/202009/2111042798.jpg"
            alt=""
          />
        </li>
        <li id="img3" class="animate__animated animate__flipInY">
          <img
            src="http://www.mazda.com.cn/uploadfiles/image/202003/3019295453.jpg"
            alt=""
          />
        </li>
        <li id="img4" class="animate__animated animate__flipInY">
          <img
            src="http://www.mazda.com.cn/uploadfiles/image/202008/1012540247.jpg"
            alt=""
          />
        </li>
        
      </ol>

      <!-- 左右箭头 -->
      <span
        class="iconfont iconleft carousel_left"
        @click="onclickCarouse(carouselIndex, '-')"
      ></span>
      <span
        class="iconfont iconright carousel_right"
        @click="onclickCarouse(carouselIndex, '+')"
      ></span>
      <!-- 当前轮播位置 -->
      <div class="carousel_addr">
        <ul class="">
          <li
            id="addr1"
            class="circle_active"
            @click="onclickCarouse(0, '+')"
          ></li>
          <li id="addr2" class="" @click="onclickCarouse(1, '+')"></li>
          <li id="addr3" class="" @click="onclickCarouse(2, '+')"></li>
          <li id="addr4" class="" @click="onclickCarouse(3, '+')"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carousel", // 马自达中国官网首页轮播图
  props: {
    imgList: {
      type: Array,
      default: function () {
        return [
          {
            url: "",
            hyperLink: "",
          },
        ];
      },
    },
  },
  computed: {
    photoNum: function () {
      return this.imgList.length; // 图片数量
    },
  },
  data() {
    return {
      carouselIndex: 1,
    };
  },
  methods: {
    onclickCarouse(index, addr) {
      let imgNum = 4 // 轮播图数量
      // 将当前位置展示得图片隐藏
      if (addr == "+") {
        // 下标处理
        index++;
        index = index > imgNum ? 1 : index;

        for (let i = 0; i < imgNum; i++) {
          if (i + 1 == index) {
            document.getElementById("img" + index).style.display = "block";
            document
              .getElementById("addr" + index)
              .classList.add("circle_active");
          } else {
            document.getElementById("img" + (i + 1)).style.display = "none";
            document
              .getElementById("addr" + (i + 1))
              .classList.remove("circle_active");
          }
        }
      } else {
        index--;
        index = index < 1 ? imgNum : index;
        for (let i = 0; i < imgNum; i++) {
          if (i + 1 == index) {
            document.getElementById("img" + index).style.display = "block";
            document
              .getElementById("addr" + index)
              .classList.add("circle_active");
          } else {
            document.getElementById("img" + (i + 1)).style.display = "none";
            document
              .getElementById("addr" + (i + 1))
              .classList.remove("circle_active");
          }
        }
      }
      this.carouselIndex = index;
      // 显示指定位置图片
    },
  },
};
</script>
<style lang="less" scoped>
// 页面公用变量
.flex-center() {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.carouselPosition() {
  position: absolute;
  top: 45vh;
  color: #f7f7f7;
  font-size: 25px;
  margin: 0 50px;
}
.carousel_left {
  .carouselPosition;
  left: 0;
}
.carousel_right {
  .carouselPosition;
  right: 0;
}
.circle_active {
  background-color: white;
}
.carousel_animate {
  animation: nextAnimate 1.5s linear;
}

// ---
.imgBgi {
  z-index: 9;
  ol {
    overflow: hidden;
    li {
      height: calc(100vh - 100px);
      display: none;
      img {
        z-index: 1;
        height: 100%;
        width: 100%;
      }
    }
  }
  ol li:first-child {
    display: block;
  }
}
// ---
.carousel_addr {
  width: 100%;
  .flex-center;
  position: absolute;
  top: 85vh;
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    li {
      width: 15px;
      height: 15px;
      border-radius: 100%;
      border: solid 1px white;
      margin: 20px;
    }
  }
}
</style>