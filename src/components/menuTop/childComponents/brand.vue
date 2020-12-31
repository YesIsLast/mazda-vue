<template>
  <div class="brand-main">
    <div class="brand-title">马自达新世代</div>
    <!-- nav -->
    <ul class="brand-nav">
      <li class="nav-item">技</li>
      <li class="nav-item">艺</li>
      <li class="nav-item">人</li>
      <li class="nav-item">魂</li>
    </ul>
    <!-- nav动态内容区 -->
    <div class="brand-nav-content">

        <!-- 菜单列表 -->
        <div class="content-menulist">

        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menuTop_brand",
};
</script>
<style scoped lang="less">
.brand-main {
  height: 60%;
  width: 76%;
  background-color: #282828;
  position: absolute;
  top: 0;
  z-index: 9;
  left: 11%;
  margin-top: 100px;
  display: flex;

  .brand-title {
    width: 60px;
    display: flex;
    align-items: center;
    font-size: 36px;
    text-align: center;
    margin: 0 10px;
  }
  .brand-nav {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      .nav-item{
          width: 17rem;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
      }
  }
  .brand-nav-content {
      width: calc(100% - 17rem - 60px);
      background-color: rgb(194, 133, 53);
      position: relative;
      .content-menulist{
          width: 100%;
          height: 80px;
          background-color: aquamarine;
          position: absolute;
          bottom: 0;
      }
  }
}
</style>