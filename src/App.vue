<template>
  <div id="app">
    <menuTop />
    <router-view v-if="reloadPage" />
    <pageFooter />
  </div>
</template>
<script>
import menuTop from "./components/menuTop/menuTop";
import pageFooter from "./components/pageFooter/pageFooter";
export default {
  components: {
    menuTop,
    pageFooter,
  },
};
</script>

<style lang="less">
#app {
  font-family: "Noto Sans CJK SC Light", "Source Han Sans CN Light",
    SourceHanSansCN-Light, Arial, STHeiti, source-han-sans-simplified-c;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a8a8a8;
  background: url("./assets/image/body_bg.jpg")  center top no-repeat fixed #000;
  min-height: 100vh;
  height: auto;
  width: 100%;
}
</style>
