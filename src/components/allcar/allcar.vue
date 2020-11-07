<template>
  <div class="allcar_main">
    <div class="carrow">
      <div class="carTitle">进口车型</div>
      <div class="carlist">
        <div class="carstyle">
          <img src="../../assets/image/car_mx5.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_mx5.png"
            alt=""
          />
          <span class="carName">¥33.90万-34.00万</span>
          <button>型录下载</button>
        </div>
      </div>
    </div>
    <div class="carrow">
      <div class="carTitle">SUV</div>
      <div class="carlist">
        <div class="carstyle">
          <img src="../../assets/image/car_cx8.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_cx8.png"
            alt=""
          />
          <span class="carName">¥25.88万-33.08万</span>
          <button>型录下载</button>
        </div>
        <div class="carstyle">
          <img src="../../assets/image/car_cx5.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_cx5.png"
            alt=""
          />
          <span class="carName">¥17.98万~24.58万</span>
          <button>型录下载</button>
        </div>
        <div class="carstyle">
          <img src="../../assets/image/car_cx4.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_cx4.png"
            alt=""
          />
          <span class="carName">¥14.88万~21.58万</span>
          <button>型录下载</button>
        </div>
        <div class="carstyle">
          <img src="../../assets/image/car_cx30.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_cx30.png"
            alt=""
          />
          <span class="carName">¥12.99万~17.19万</span>
          <button>型录下载</button>
        </div>
      </div>
    </div>
    <div class="carrow">
      <div class="carTitle">轿车</div>
      <div class="carlist">
        <div class="carstyle">
          <img src="../../assets/image/car_atz.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_atz.png"
            alt=""
          />
          <span class="carName">¥17.58万~23.98万</span>
          <button>型录下载</button>
        </div>
        <div class="carstyle">
          <img src="../../assets/image/car_aksl_sx.png" alt="" />
          <img
            class="carName"
            src="../../assets/image/car_text_aksl_sx.png"
            alt=""
          />
          <span class="carName">¥11.59万-16.89万</span>
          <button>型录下载</button>
        </div>
      </div>
    </div>

    <!-- 公司宣传海报，预约试驾 -->
    <div class="posters">
      <img src="../../assets/image/poster.jpg" alt="" />
      <button>预约试驾<span class="iconfont iconyousanjiaoxing"></span></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "allcar", // 公司所有车型
};
</script>
<style lang="less" scoped>
.allcar_main {
  width: 54%;
  margin: auto;
  padding-top: 5%;
  overflow: hidden;
  .carrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 4%;
    padding-top: 3%;
    width: 100%;
    height: 20vh;
    border-bottom: solid 1px #3b3b3b;
    .carTitle {
      width: 10%;
      position: relative;
      top: -40px;
      font-size: 14px;
      color: #979797;
    }
    .carlist {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 85%;
      .carstyle {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 25%;
        font-size: 14px;
        align-items: center;
        img {
          width: 100%;
        }
        .carName {
          text-align: center;
          color: #8f8f8f;
          opacity: 0.6;
          transition: all 500ms ease-out;
        }
        span {
          padding: 3% 0px 7%;
        }
        button {
          color: #535353;
          border: solid 1px #535353;
          background-color: #ffffff00;
          min-height: 25px;
          min-width: 75px;
          padding: 3px 6px;
          transition: all 500ms ease-out;
        }
        button:hover {
          color: #ffffff;
          border: solid 1px #ffffff;
          transition: all 500ms ease-out;
        }
      }
      .carstyle:hover {
        .carName {
          opacity: 1;
          transition: all 500ms ease-out;
        }
      }
    }
  }
  .posters {
    width: 100%;
    text-align: center;
    padding: 1% 1.5%;
    img {
      width: 100%;
    }
    button {
      background-color: rgba(255, 255, 255, 0);
      border: 1px solid #a1a1a1;
      color: #a1a1a1;
      height: 35px;
      width: 138px;
      margin-top: 4%;
      letter-spacing: 6px;
      span {
        position: relative;
        top: -1px;
        font-size: 1px;
      }
    }
    button:hover {
      color: white;
      border-color: white;
    }
  }
}
</style>