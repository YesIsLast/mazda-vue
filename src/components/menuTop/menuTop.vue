<template>
  <div>
    <div class="lee-Black-BGC main_menu">
      <!-- logo -->
      <div class="logo">
        <router-link to="/home" target="_blank">
          <img src="../../assets/image/mazdalogo.png" alt="" />
        </router-link>
      </div>
      <!-- 首页菜单导航栏 -->
      <ul class="nav_pc">
        <li
          class="lee-Cursor-Pointer animate__animated menuActive"
          @click="domOpertion(0)"
        >
          <div id="lee-liner-Gradients"></div>
          <router-link to="/mazda_cn">
            <span>首页</span>
            <p>HOME</p>
          </router-link>
          <div id="lee-liner-Gradients"></div>
        </li>

        <li
          class="lee-Cursor-Pointer animate__animated"
          @click="domOpertion(1)"
        >
          <a>
            <span>品牌核心</span>
            <p>BRAND INNOVATION</p>
          </a>
          <div id="lee-liner-Gradients"></div>
        </li>

        <li
          class="lee-Cursor-Pointer animate__animated"
          @click="domOpertion(2)"
        >
          <a>
            <span>新闻中心</span>
            <p>NEWS&SNS</p>
          </a>
          <div id="lee-liner-Gradients"></div>
        </li>

        <li
          class="lee-Cursor-Pointer animate__animated"
          @click="domOpertion(3)"
        >
          <a>
            <span>精彩活动</span>
            <p>EVENT</p>
          </a>
          <div id="lee-liner-Gradients"></div>
        </li>

        <li
          class="lee-Cursor-Pointer animate__animated"
          @click="domOpertion(4)"
        >
          <a>
            <span>全部车型</span>
            <p>MODELS</p>
          </a>
          <div id="lee-liner-Gradients"></div>
        </li>

        <li
          class="lee-Cursor-Pointer animate__animated"
          @click="domOpertion(5)"
        >
          <a>
            <span>一汽马自达</span>
            <p>FMSC</p>
          </a>
          <div id="lee-liner-Gradients"></div>
        </li>

        <li
          class="lee-Cursor-Pointer animate__animated"
          @click="domOpertion(6)"
        >
          <a>
            <span>长安马自达</span>
            <p>CMAS</p>
          </a>
          <div id="lee-liner-Gradients"></div>
        </li>
      </ul>
      <!-- 主题logo -->
      <div class="themeLogo">
        <img src="../../assets/image/icon_skyactiv.png" alt="" />
      </div>
      <!-- 移动端适配菜单按钮 -->
      <span
        class="iconfont menubtn animate__animated animate__flipInY"
        :class="menubtnStatus ? 'iconmenu' : 'iconclose'"
        @click="domOpenMenu(menubtnStatus)"
      >
      </span>
    </div>
    <!-- PC端菜单下拉页面 -->
    <brand />

    <!-- 移动端--菜单弹出框NAV -->
    <div
      class="nav_app_module"
      id="sidebar-black"
      @click="domOpenMenu(false)"
    ></div>
    <ul class="nav_app">
      <li
        class="lee-Cursor-Pointer animate__animated menuActive-Y"
        @click="domOpertion(0)"
      >
        <router-link to="/mazda_cn">
          <span>首页</span>
          <p>HOME</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
      <li class="lee-Cursor-Pointer animate__animated" @click="domOpertion(0)">
        <router-link to="/mazda_cn">
          <span>品牌核心</span>
          <p>BRAND INNOVATION</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
      <li class="lee-Cursor-Pointer animate__animated" @click="domOpertion(0)">
        <router-link to="/mazda_cn">
          <span>新闻中心</span>
          <p>NEWS&SNS</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
      <li class="lee-Cursor-Pointer animate__animated" @click="domOpertion(0)">
        <router-link to="/mazda_cn">
          <span>精彩活动</span>
          <p>EVENT</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
      <li class="lee-Cursor-Pointer animate__animated" @click="domOpertion(0)">
        <router-link to="/mazda_cn">
          <span>全部车型</span>
          <p>MODELS</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
      <li class="lee-Cursor-Pointer animate__animated" @click="domOpertion(0)">
        <router-link to="/mazda_cn">
          <span>一汽马自达</span>
          <p>FMSC</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
      <li class="lee-Cursor-Pointer animate__animated" @click="domOpertion(0)">
        <router-link to="/mazda_cn">
          <span>长安马自达</span>
          <p>CMAS</p>
        </router-link>
        <div id="lee-liner-Gradients-X" class="liner-X"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import brand from "./childComponents/brand"
export default {
  name: "menuTop",
  components:{
brand
  },
  data() {
    return {
      menubtnStatus: true, // 菜单打开状态 true 打开按钮 false 关闭按钮
    };
  },
  methods: {
    // 菜单选中下划线样式交互
    domOpertion(nowClick) {
      let liList = document.querySelectorAll("li");
      for (let i in liList) {
        for (let j in liList[i].classList) {
          if (liList[i].classList[j] == "menuActive") {
            // 可以增加个过渡动画
            liList[i].classList.remove("menuActive");
            liList[i].classList.remove("animate__bounceIn");
            liList[nowClick].classList.add("animate__bounceIn");
            liList[nowClick].classList.add("menuActive");
            break;
          }
        }
      }
    },
    // 移动端菜单打开动画交互
    domOpenMenu(menubtnStatus) {
      this.menubtnStatus = !menubtnStatus;
      let domSidebarVal = document.getElementById("sidebar-black");
      let domSidebarUl = document.getElementsByTagName("ul")[1];
      console.log(domSidebarUl);
      if (menubtnStatus) {
        domSidebarVal.style.display = "block";
        domSidebarUl.classList.add("ul_animate");
      } else {
        domSidebarVal.style.display = "none";
        domSidebarUl.classList.remove("ul_animate");
      }
      // 阻止页面触摸穿透滑动
      document.getElementById("sidebar-black").addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        false
      );
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
.menuActive {
  position: relative;
  border-bottom: solid red 3px;
  top: -2px;
}
.menuActive-Y {
  border-left: solid red 2px;
}
// pc端展示CSS
@media all and (orientation: landscape) {
  .nav_app {
    display: none;
  }
  .main_menu {
    width: 100%;
    height: 100px;
    display: flex;
    position: fixed;
    text-align: center;
    z-index: 999;
    div {
      height: 100px;
    }
    .menubtn {
      display: none;
    }

    .logo {
      width: 11vw;
      .flex-center;
      img {
        width: 70px;
        height: 64px;
      }
    }

    .themeLogo {
      width: 25vw;
      margin-right: 3vw;
      display: flex;
      align-items: center; /* 垂直居中 */
      justify-content: flex-end;
    }
    ul {
      width: 64vw;
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;
    }
    li {
      width: 9vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        width: 8.9vw;
      }
      span {
        font-family: "SimHei";
        color: #a8a8a8;
        font-size: 14px;
      }
      p {
        font-size: 8px !important;
        font-family: Arial;
        color: #505050;
        margin: 0;
        padding-top: 5px;
      }
    }
  }
}
// 移动端展示CSS
@media all and (orientation: portrait) {
  .nav_pc {
    display: none;
  }
  .main_menu {
    width: 100vw;
    height: 50px;
    display: flex;
    position: fixed;
    text-align: center;
    justify-content: space-between;
    z-index: 999;

    div {
      height: 50px;
    }
    .logo {
      width: 11vw;
      padding: 0 18px;
      .flex-center;
      img {
        width: 35px;
        height: 32px;
      }
    }
    .themeLogo {
      display: none;
    }
    .menubtn {
      .flex-center;
      width: 11vw;
      font-size: 22px;
      padding: 0 18px;
    }
  }
  // 菜单弹出层蒙层面板
  .nav_app_module {
    z-index: 9;
    position: fixed;
    background-color: #191919;
    opacity: 0.3;
    width: 100vw;
    height: 100vh;
    display: none;
  }
  ul {
    position: fixed;
    opacity: 0.8;
    z-index: 10;
    height: 70%;
    width: 0px;
    margin-top: 50px;
    padding-left: 0;
    position: fixed;
    right: 0;
    background-color: #191919;
    transition: all 800ms cubic-bezier(0.95, 0.07, 0.05, 0.96);
    border-radius: 0% 0% 0% 100%;
    overflow: hidden; // 宽度为0时隐藏里面内容
    li {
      height: 13%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      a {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-grow: 1;
      }
      span {
        font-family: "SimHei";
        color: #a8a8a8;
        font-size: 14px;
      }
      p {
        font-size: 8px !important;
        font-family: Arial;
        color: #505050;
        margin: 0;
        padding-top: 5px;
      }
    }
  }
  .ul_animate {
    width: 45vw;
    border-radius: 0 0 0 50px;
  }
}
</style>