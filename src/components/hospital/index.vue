<template>
  <div>
    <div class="header">
      <div class="header-banner">
        <van-swipe :autoplay="3000" width="100%">
          <van-swipe-item v-for="(image, index) in hospital.sceneImg" :key="index">
            <img :src="image" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="header-right">
        <img src="../../assets/shareIcon.png" alt />
      </div>
    </div>
    <div class="hospital">
      <div class="hospital-content">
        <div class="wechat">
          <img :src="hospitalLog" alt />
        </div>
        <div class="hospital-right">
          <h3>{{hospital.hospitalName}}</h3>
          <p>
            <span>效果:&nbsp;&nbsp;{{hospital.efficiency}}</span>
            <span>态度:&nbsp;&nbsp;{{hospital.attitude}}</span>
          </p>
          <div class="icons">
            <van-rate size="12" v-model="hospital.star" readonly />
            <p>{{hospital.evaluateCount}}条评价</p>
          </div>
        </div>
        <div></div>
        <div class="collect">
          <img src="../../assets/show.png" alt />
        </div>
      </div>
      <div class="line"></div>
      <div class="hospital-bottom">
        <p>预约数：{{hospital.orderCount}}</p>
        <span></span>
        <p>医生数：{{hospital.doctorCount }}</p>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div class="content-header">
          <div class="content-con">
            <div class="con-left">
              <img src="../../assets/doctorIcon.png" alt />
            </div>
            <h4>入驻医生</h4>
          </div>
          <div class="content-con" :style="{margin:'0 10px'}">
            <div class="con-left">
              <img src="../../assets/allIcon.png" alt />
            </div>
            <h4 @click="goAll">全部项目</h4>
          </div>
          <div class="content-con">
            <div class="con-left">
              <img src="../../assets/suggest.png" alt />
            </div>
            <h4 @click="go">机构介绍</h4>
          </div>
        </div>
        <div class="settled">
          <div
            class="settled-con"
            @click="goDoctorDetail(item.userId)"
            v-for="item in doctor"
            :key="item.userId"
          >
            <div class="settled-top">
              <div class="settled-img">
                <img :src="item.portrait" alt="这是图片" />
              </div>
              <div class="settled-right">
                <h3>{{item.fullName}}</h3>
                <div class="settled-icons">
                  <van-rate size="12" v-model="item.star" readonly />
                </div>
                <div class="result">
                  <span>效果：{{item.efficiency}}</span>
                  <span>态度：{{item.attitude}}</span>
                </div>
                <p>接诊：{{item.visitsCount}}次</p>
              </div>
              <div></div>
              <div style="width:100px"></div>
            </div>
            <div class="settled-bottom">
              <div class="goodness">擅长项目</div>
              <div
                class="shaping"
                v-for="(beGoodAte,index) in item.beGoodAte"
                :key="index"
              >{{beGoodAte}}</div>
              <div class="earth"></div>
            </div>
          </div>

          <div class="settled-button">
            <img src="../../assets/up.png" alt />
            <img src="../../assets/bottom.png" alt />
            <div style="width: 60px;"></div>
            <div style="width:60px;"></div>
          </div>
        </div>
        <div class="case" @click="appDown">
          <h4>经典案例</h4>
          <div class="case-img" v-for="(item,index) in hospitalDetail" :key="item.diaryId">
            <img v-show="index>3?false:true" :src="item.diaryImg" alt />
          </div>
          <span class="iconfont icon-changyongicon-"></span>
        </div>
        <div class="case" @click="appDown">
          <h4>医院动态</h4>
          <div class="case-img" v-for="(item,index) in hospitalDetail" :key="item.diaryId">
            <img v-show="index>3?false:true" :src="item.preoperativeImg" alt />
          </div>
          <span class="iconfont icon-changyongicon-"></span>
        </div>
        <div class="case" @click="appDown">
          <h5>医院问答</h5>
          <div class="case-pro">
            <h6>削骨手术脸真的会垮吗？</h6>
            <p>说到削骨手术，很多不了解这个项目的人……</p>
          </div>
          <span class="iconfont icon-changyongicon-"></span>
        </div>
      </div>
    </div>
    <div class="once" @click="appDown">
      <img src="../../assets/orderIcon.png" alt />
    </div>
  </div>
</template>

<script>
import {
  appFindDoctorHospitalDetail,
  appFindHospitalDoctorList,
  findHospitalDiaryInfo
} from "@/api/request.js";
// import axios from "axios";
export default {
  data() {
    return {
      hospital: {},
      hospitalLog: "",
      doctor: [],
      hospitalDetail: []
    };
  },
  created() {
    let hospitalId = this.$route.query.hospitalId || 41;
    this.appFindDoctorHospitalDetail(hospitalId);
    this.appFindHospitalDoctorList(hospitalId);
    this.findHospitalDiaryInfo(hospitalId);
  },
  methods: {
    goAll() {
      this.$router.push({
        path: "/all",
        query: {
          hospitalId: this.hospital.hospitalId
        }
      });
    },
    appFindDoctorHospitalDetail(hospitalId) {
      appFindDoctorHospitalDetail(hospitalId).then(res => {
        if (res.status === 200) {
          this.hospital = res.data;
          console.log(res.data);
          this.hospitalLog = res.data.hospitalLog;
        }
      });
    },
    appFindHospitalDoctorList(hospitalId) {
      appFindHospitalDoctorList(hospitalId, 1).then(res => {
        if (res.status === 200) {
          this.doctor = res.data;
        }
      });
    },
    findHospitalDiaryInfo(hospitalId) {
      findHospitalDiaryInfo(hospitalId, 1).then(res => {
        console.log(res.data, 11);
        if (res.status === 200) {
          this.hospitalDetail = res.data;
        }
      });
    },
    appDown() {
      let u = navigator.userAgent;
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      if (isiOS) {
        window.location.href = "https://apps.apple.com/cn/app/id1481046685";
      } else if (isAndroid) {
        window.location.href =
          "https://hxm-1259538451.cos.ap-shanghai.myqcloud.com/zhenmei_apk_down/zhenmei.apk";
      }
    },
    go() {
      this.$router.push({
        path: "/organization",
        query: {
          hospitalId: this.hospital.hospitalId
        }
      });
    },
    goDoctorDetail(userId) {
      this.$router.push({
        path: "/doctorDetail",
        query: {
          userId
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 151px;
  position: relative;
}
.header-banner {
  width: 100%;
  height: 151px;
}
.header .header-banner img {
  display: inline-block;
  height: 151px;
  width: 100%;
}
.header-right img {
  position: absolute;
  height: 20px;
  width: 20px;
  top: 64px;
  /* left: 340px; */
  bottom: 67px;
  right: 15px;
}
.hospital {
  width: 100%;
  height: 174px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;
  margin-top: -11px;

  padding: 0 15px;
}
.hospital .hospital-content {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
}
.hospital .hospital-content .wechat {
  height: 49px;
  width: 56px;
  margin-top: 27px;
  margin-right: 15px;
}
.hospital .hospital-content .wechat img {
  display: block;
  height: 49px;
  width: 56px;
  margin-right: 15px;
}

.hospital .hospital-content .hospital-right h3 {
  height: 14px;
  width: 183px;
  margin-top: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  line-height: 14px;
  font-size: 18px;
  color: #282828;
  font-weight: 600;
  letter-spacing: 0.29px;
}
.hospital .hospital-content .hospital-right p {
  margin-top: 13px;
  margin-bottom: 4px;
}
.hospital .hospital-content .hospital-right p span {
  width: 52px;
  height: 12px;
  margin-right: 15px;
  color: #9b9b9b;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.29px;
}
.hospital .hospital-content .hospital-right .icons {
  display: flex;
  margin: 0;
}
// .hospital .hospital-content .hospital-right .icons  {
//   display: inline-block;
//   width: 12px;
//   height: 11px;
//   margin-bottom: 2px;
//   font-size: 12px;
// }
.van-rate__icon {
  display: block;
  width: 1em;
  color: #c8c9cc;
  font-size: 12px;
}
// .hospital .hospital-content .hospital-right .icons .van-rate__icon {
//   margin-right: 5px;
//   font-size: 12px;
//   color: #dddddd;
// }
.hospital .hospital-content .hospital-right .icons p {
  margin-top: 1px;
  width: 56px;
  height: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.29px;
  color: #9b9b9b;
  margin-left: 5px;
}
.hospital .hospital-content .collect {
  width: 52px;
  height: 20px;
  margin-top: 25px;
}
.hospital .line {
  width: 100%;
  height: 1px;
  background: rgba(245, 246, 248, 1);
  margin-top: 28px;
}
.hospital .hospital-bottom {
  display: flex;
  justify-content: space-around;
}
.hospital .hospital-bottom span {
  width: 1px;
  height: 30px;
  background: rgba(245, 246, 248, 1);
  margin-bottom: 11px;
  margin-top: 13px;
}
.hospital .hospital-bottom p {
  width: 83px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-top: 20px;
}
.main {
  width: 100%;
  background: rgba(245, 246, 248, 1);
  overflow: hidden;
}
.main .notice {
  width: 100%;
  height: 45px;
  background: rgba(255, 255, 255, 1);
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  padding: 0 14px;
  margin-bottom: 10px;
}
.main .notice p {
  width: 42px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 212, 51, 1);
  color: #ffd433;
  font-family: PingFangSC-Medium, PingFang SC;
  line-height: 20px;
  text-align: center;
  margin-left: 1px;
  margin-right: 8px;
  margin-top: 13px;
}
.main .notice span {
  margin-top: 16px;
  display: inline-block;
  height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content {
  width: 100%;
  min-height: 800px;
  background: rgba(245, 246, 248, 1);
  overflow: hidden;
}
.content .content-header {
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
  margin: 15px 0;
}
.content .content-header .content-con {
  width: 110px;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 16px 0px rgba(221, 221, 221, 0.4);
  border-radius: 4px;
}
.content .content-header .content-con {
  display: flex;
}
.content .content-header .content-con .con-left img {
  width: 36px;
  height: 36px;
  margin: 6px 2px 0;
}
.content .content-header .content-con h4 {
  width: 57px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-top: 17px;
  margin-right: 7px;
}
.settled {
  width: 100%;
  min-height: 400px;
  padding: 2px 15px;
  background: #fff;
  margin-bottom: 10px;
}
.settled .settled-con {
  border-top: 1px solid #f5f6f8;
}
.settled .settled-con .settled-top {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
}
.settled .settled-con .settled-top .settled-img {
  width: 68px;
  height: 68px;
  margin-top: 20px;
  margin-right: 12px;
  img {
    height: 68px;
    width: 100%;
  }
}
.settled .settled-con .settled-top .settled-right {
  margin-top: 32px;
}
.settled .settled-con .settled-top .settled-right h3 {
  line-height: 1;
  height: 14px;
  font-size: 14px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 14px;
  margin-bottom: 4px;
}
.settled
  .settled-con
  .settled-top
  .settled-right
  .settled-icons
  .icon-star__easyico {
  line-height: 1;
  width: 80px;
  height: 11px;
  font-size: 12px;
  color: rgba(255, 213, 51, 1);
}
.settled .settled-con .settled-top .settled-right .result {
  margin-top: 7px;
}
.settled .settled-con .settled-top .settled-right .result span {
  width: 52px;
  height: 14px;
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(155, 155, 155, 1);
  line-height: 14px;
  margin-right: 13px;
}
.settled .settled-con .settled-top .settled-right p {
  /* width: 68px; */
  height: 14px;
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(155, 155, 155, 1);
  line-height: 14px;
  margin-top: 5px;
}
.settled .settled-con .settled-bottom {
  display: flex;
  margin-bottom: 15px;
  justify-content: space-around;
}
.settled .settled-con .settled-bottom .goodness {
  height: 14px;
  width: 47px;
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-left: 10px;
  margin-right: 21px;
  margin-top: 5px;
  letter-spacing: -0.29px;
}
.settled .settled-con .settled-bottom .shaping {
  width: 63px;
  height: 25px;
  border-radius: 13px;
  border: 1px solid rgba(255, 212, 51, 1);
  text-align: center;
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(255, 212, 51, 1);
  line-height: 22px;
  margin-right: 11px;
}

.settled .settled-con .settled-bottom .shaping:nth-of-type(4) {
  width: 53px;
}
.settled .settled-button {
  display: flex;
  justify-content: space-around;
  margin-top: 9px;
  margin-bottom: 20px;
}
.settled .settled-button img:nth-of-type(1) {
  margin-left: -7px;
  margin-right: 29px;
}
.case {
  height: 70px;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  padding: 0 15px;
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
  justify-content: space-around;
}
.case h4 {
  height: 70px;
  width: 54px;
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 70px;
  margin-right: 20px;
}
.case .case-img {
  margin-top: 8px;
}
.case .case-img img {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-right: 10px;
}
.case h5 {
  height: 70px;
  width: 54px;
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 70px;
  margin-right: 22px;
}

.case .case-pro h6 {
  height: 14px;
  font-size: 14px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin: 15px 0 11px;
}
.case .case-pro p {
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
.case .icon-changyongicon- {
  width: 7px;
  height: 12px;
  color: #989898;

  margin-top: 29px;
}
.once {
  position: fixed;
  top: 300px;
  right: 0;
}
</style>