<template>
  <div class="main">
    <div class="border"></div>
    <div class="icon">
      <img src="../../assets/image/zoom.png" alt="" />
    </div>
    <div class="border"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@media all and (orientation: landscape) {
  .main {
    display: flex;
    justify-content: space-between;
    .border {
      flex-grow: 1; // flex自动沾满所剩空间
      height: 20px;
      border-top: solid #2b2b2b 1px;
    }
    .icon {
      flex-grow: 0; // flex使用固定宽度，多余空间交给其他
      border-color: transparent; //
      width: 200px;
      height: 100%;
      text-align: center;
      img {
        width: 105px;
        height: 9px;
        position: relative;
        top: -10px;
      }
    }
  }
}
@media all and (orientation: portrait) {
  .main {
    display: flex;
    justify-content: space-between;
    .border {
      flex-grow: 1; // flex自动沾满所剩空间
      height: 20px;
      border-top: solid #2b2b2b 1px;
    }
    .icon {
      flex-grow: 0; // flex使用固定宽度，多余空间交给其他
      border-color: transparent; //
      width: 76px;
      height: 7px;
      text-align: center;
      img {
        width: 70px;
        height: 7px;
        position: relative;
        top: -10px;
      }
    }
  }
}
</style>