<template>
  <div>
    <div class="carouselNews">
      <div class="newsMain">
        <!-- 新闻标题 -->
        <div class="news">
          <p class="newsTitle">2019年(第十七届)</p>
          <p class="newsContent">广州国际汽车博览会</p>
        </div>
        <!-- 了解详情按钮 -->
        <button>了解详情</button>
      </div>
      <div class="newsMain">
        <!-- 新闻标题 -->
        <div class="news">
          <p class="newsTitle">2019年(第十八届)</p>
          <p class="newsContent">上海国际汽车工业展览会</p>
        </div>
        <!-- 了解详情按钮 -->
        <button>了解详情</button>
      </div>
      <div class="newsMain">
        <!-- 新闻标题 -->
        <div class="news">
          <p class="newsTitle">马自达携锐思车队征战</p>
          <p class="newsContent">2016CTCC中国房车锦标赛</p>
        </div>
        <!-- 了解详情按钮 -->
        <button>了解详情</button>
      </div>
      <div class="newsMain">
        <!-- 新闻标题 -->
        <div class="news">
          <p class="newsTitle">2017(第十五届)</p>
          <p class="newsContent">广州国际汽车博览会</p>
        </div>
        <!-- 了解详情按钮 -->
        <button>了解详情</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carouselNews", // 公司往届新闻
};
</script>
<style lang="less" scoped>
// 了解详情按钮
button {
  width: 162px;
  height: 42px;
  border-radius: 2px;
  border: solid 1px #535353;
  color: #535353;
  background-color: #28282800;
  transition: all 300ms ease-in-out;
}
button:hover {
  transition: all 300ms ease-in-out;
  width: 172px;
  color: white;
  background: linear-gradient(to right, #5c5c5c 0%, #9b9b9b 50%, #5c5c5c 100%);
}
.carouselNews {
  height: 35vh;
  width: 100%;
  background-color: #101010;
  display: flex;
  flex-wrap: wrap;
  .newsMain {
    height: 100%;
    width: 24vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .news {
      border-top: solid 1px #535353;
      border-bottom: solid 1px #535353;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-weight: 100;
      padding: 10px 0;
      margin-bottom: 50px;
      p {
        margin: 0;
      }
      .newsTitle {
        font-size: 26px;
      }
      .newsContent {
        font-size: 22px;
      }
    }
  }
}
.carouselNews .newsMain:nth-child(1),
.carouselNews .newsMain:nth-child(3) {
  background-color: #282828;
}
</style>