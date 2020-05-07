<template>
  <div class="main">
    <div class="header">
      <van-nav-bar title="医师" fixed="true">
        <template #left>
          <van-icon @click="onClickLeft" name="arrow-left" color="#000" />
        </template>
        <template #right>
          <van-icon @click="onClickRight" name="weapp-nav" color="#000" />
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="produce">
        <div class="produce-left">
          <img src="../../assets/logo.png" alt />
        </div>
        <div class="produce-cen">
          <h2>黄庆武</h2>
          <p>
            <van-rate v-model="startValue" size="12" gutter="2" readonly />
            <span class="startSpan">566条评价</span>
          </p>
          <p>
            <span>效果：0.0</span>
            <span>态度：0.0</span>
          </p>
          <p>
            <span>接诊：127次</span>
            <span>预约：90次</span>
          </p>
          <p class="beGood">
            <span>擅长项目：眼部整形</span>
          </p>
        </div>
        <div></div>
        <div></div>
        <div class="produce-right">
          <div class="follow">
            <van-icon name="plus" color="rgba(68,66,62,1)" size="12px" />
            <p>关注</p>
          </div>
        </div>
      </div>
      <div class="all-case">
        <h3>全部项目</h3>
        <div class="case-img">
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
        </div>
        <div class="case-right">
          <van-icon name="arrow" size="14px" color="#989898" />
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-con">
        <img src="../../assets/consult.png" alt />
        <p>咨询</p>
      </div>
      <div class="nav-con">
        <img src="../../assets/facechat.png" alt />
        <p>面聊</p>
      </div>
      <div class="nav-con">
        <img src="../../assets/planoeder.png" alt />
        <p>下单</p>
      </div>
    </div>
    <div class="adress">
      <div class="adress-top">
        <h2>杭州市爱美医院</h2>

        <img src="../../assets/location.png" alt />
      </div>
      <div class="line"></div>
      <div class="adress-top">
        <h2>杭州市美天爱美医院</h2>
        <img src="../../assets/location.png" alt />
      </div>
    </div>
    <div class="case">
      <div class="all-case">
        <h3>医生案例</h3>
        <div class="case-img">
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
        </div>
        <div class="case-right">
          <van-icon name="arrow" size="14px" color="#989898" />
        </div>
      </div>
    </div>
    <div class="doctor-pro">
      <h2>医师介绍</h2>
      <div class="doctor-img">
        <img src="../../assets/logo.png" alt />
      </div>
      <div class="doctor-sub">
        <img src="../../assets/up.png" v-show="isShow" alt />
        <img src="../../assets/bottom.png" v-show="!isShow" alt />
      </div>
    </div>
    <div class="doctor-ques">
      <h5>医院问答</h5>
      <div class="case-pro">
        <h6>削骨手术脸真的会垮吗？</h6>
        <p>说到削骨手术，很多不了解这个项目的人……</p>
      </div>
      <van-icon name="arrow" size="14px" color="#989898" />
    </div>
    <div class="case">
      <div class="all-case">
        <h3>医生动态</h3>
        <div class="case-img">
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
          <img src="../../assets/logo.png" width="50" height="50" alt />
        </div>
        <div class="case-right">
          <van-icon name="arrow" size="14px" color="#989898" />
        </div>
      </div>
    </div>
    <div class="footer">
      <h3>医美邦保障</h3>
      <div class="line"></div>
      <div class="footer-top">
        <ul>
          <li>
            <img src="../../assets/docInfo.png" alt />
            <span>医生资料</span>
          </li>
          <li>
            <img src="../../assets/docder.png" alt />
            <span>医生证件</span>
          </li>
          <li>
            <img src="../../assets/honor.png" alt />
            <span>荣誉展示</span>
          </li>
          <li>
            <img src="../../assets/beatu.png" alt />
            <span>医美保险</span>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <ul>
          <li>
            <img src="../../assets/ensure.png" alt />
            <h4>资质保证</h4>
            <p>医疗机构、医生资质严格审核</p>
          </li>
          <li>
            <img src="../../assets/cost.png" alt />
            <h4>术后保障</h4>
            <p>整形不满意、医美邦免费修复</p>
          </li>
          <li>
            <img src="../../assets/prote.png" alt />
            <h4>隐私保护</h4>
            <p>用户信息严格保密、 安全隐私双保险</p>
          </li>
          <li>
            <img src="../../assets/toch.png" alt />
            <h4>轻松退改</h4>
            <p>用户信息严格保密、 安全隐私双保险</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "doctorDetail",
  data() {
    return {
      startValue: 0,
      isShow: false
    };
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickRight() {
      console.log("按钮");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  width: 100%;
  min-height: 500px;
  background: rgba(245, 246, 248, 1);
  &::-webkit-scrollbar {
    width: 0;
  }
  .content {
    background: rgba(255, 255, 255, 1);
    min-height: 100px;
    margin-bottom: 10px;
  }
  .produce {
    margin-top: 46px;

    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(245, 247, 248, 1);
    .produce-left {
      img {
        margin-left: 15px;
        height: 68px;
        width: 68px;
      }
    }
    .produce-cen {
      overflow: hidden;

      h2 {
        margin-top: 12px;
        font-size: 14px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 14px;
        margin-bottom: 6px;
      }
      p {
        margin-bottom: 5px;
        span {
          font-size: 12px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(155, 155, 155, 1);
          margin-right: 13px;
          .startSpan {
            margin-left: 10px;
          }
        }
      }
      .beGood {
        margin-bottom: 21px;
      }
    }
    .produce-right {
      .follow {
        width: 52px;
        height: 20px;
        background: rgba(255, 212, 51, 1);
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 37px;
        p {
          font-size: 11px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(68, 66, 62, 1);
          line-height: 14px;
        }
      }
    }
  }
  .case {
    margin-bottom: 10px;
  }
  .all-case {
    display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    h3 {
      font-size: 12px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(40, 40, 40, 1);
      line-height: 12px;
    }
    .case-img {
      img {
        margin-right: 10px;
      }
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    width: 100%;
    margin-bottom: 10px;
    .nav-con {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  .adress {
    padding: 0 5%;
    height: 89px;
    background: rgba(255, 255, 255, 1);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .line {
      width: 100%;
      height: 1px;
      background: rgba(245, 247, 248, 1);
      margin-top: 12px;
    }
    .adress-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      h2 {
        font-size: 12px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(40, 40, 40, 1);
        line-height: 14px;
      }
      img {
        width: 16px;
        height: 20px;
      }
    }
  }
  .doctor-pro {
    margin-bottom: 10px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    padding: 0 5%;
    overflow: hidden;
    h2 {
      font-size: 12px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(40, 40, 40, 1);
      line-height: 12px;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .doctor-img {
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    .doctor-sub {
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
    }
  }
  .doctor-ques {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    margin-bottom: 10px;
    h5 {
      height: 70px;
      width: 54px;
      font-size: 12px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(40, 40, 40, 1);
      line-height: 70px;
      margin-right: 22px;
    }
    .case-pro {
      h6 {
        height: 14px;
        font-size: 14px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(40, 40, 40, 1);
        line-height: 14px;
        margin: 15px 0 11px;
      }
      p {
        width: 212px;
        font-size: 12px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(155, 155, 155, 1);
        line-height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .icon-changyongicon- {
        width: 7px;
        height: 12px;
        color: #989898;
        margin-top: 29px;
      }
    }
  }
  .footer {
    margin-bottom: 33px;
    padding: 0 5%;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    h3 {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(40, 40, 40, 1);
      line-height: 16px;
      margin: 15px 4px;
    }
    .line {
      width: 100%;
      height: 1px;
      background: #f5f6f8;
    }
    .footer-top {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            margin: 24px 0 10px;
          }
          span {
            font-size: 12px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(152, 152, 152, 1);
            line-height: 14px;
          }
        }
      }
    }
    .footer-bottom {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 21px;
        li {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            margin: 24px 0 10px;
          }
          h4 {
            font-size: 12px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(198, 198, 198, 1);
            line-height: 14px;
            margin-bottom: 6px;
          }
          p {
            font-size: 8px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(198, 198, 198, 1);
            line-height: 11px;
            width: 74px;
          }
        }
      }
    }
  }
}
</style>