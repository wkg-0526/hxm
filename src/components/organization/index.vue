<template>
  <div class="main">
    <div class="header">
      <div class="nav">
        <van-icon name="arrow-left" color="#000000" size="16" @click="go" />
        <h2>机构资料</h2>
        <img src="../../assets/dot.png" alt />
      </div>
      <div class="oranization-name">
        <img :src="hospital.hospitalLog" alt="这是图片" />
        <h3>{{hospital.hospitalName}}</h3>
        <div style="width:90px"></div>
      </div>
      <div class="creation">
        <p>创立时间</p>
        <p>{{hospital.time|formatDate}}</p>
      </div>
      <div class="creation">
        <p>国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家</p>
        <p>{{hospital.country}}</p>
      </div>
      <div class="creation">
        <p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</p>
        <p class="address">{{hospital.address}}</p>
      </div>
      <div class="creation">
        <p>医院类型</p>
        <p>{{hospital.type}}</p>
      </div>
    </div>
    <div class="content">
      <div class="creation">
        <p>法人姓名</p>
        <p>{{hospital.legalPerson}}</p>
      </div>
      <div class="creation">
        <p>法人身份证</p>
        <p>{{hospital.legalPersonIdNumber}}</p>
      </div>
      <div class="creation">
        <p>营业执照名称</p>
        <p>{{hospital.hospitalName}}</p>
      </div>
      <div class="creation">
        <p>统一社会信用代码</p>
        <p>{{hospital.creditCode}}</p>
      </div>
      <div class="business">
        <h3>营业执照照片</h3>
        <img :src="hospital.businessLicense" alt="这是蹄片" />
      </div>
    </div>
    <div class="photo" v-for="item in sceneImg" :key="item.name">
      <h3>{{item.name}}</h3>
      <div class="images">
        <img :src="item.url" alt="这是图片" />
        <img src="../../assets/bottom.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/components/filters.js";
import { appFindDoctorHospitalDetail } from "@/api/request.js";
export default {
  data() {
    return {
      hospital: {},
      sceneImg: [
        { name: "门店照片", url: "" },
        { name: "环境照片", url: "" },
        { name: "手术室照片", url: "" }
      ],
      time: ""
    };
  },
  created() {
    console.log();
    appFindDoctorHospitalDetail(this.$route.query.hospitalId).then(res => {
      if (res.status === 200) {
        this.hospital = res.data;
        res.data.sceneImg.forEach((item, index) => {
          this.sceneImg[index].url = item;
        });
        this.time = res.data.time;
      }
    });
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  filters: {
    formatDate(time) {
      var data = new Date(time);
      return formatDate(data, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.main {
  background: rgba(245, 246, 248, 1);
  min-height: 700px;
}
.header {
  width: 100%;
  height: 388px;
  background: rgba(255, 255, 255, 1);
  padding: 0 20px;
  overflow: hidden;
  margin-bottom: 10px;
}
.nav {
  height: 25px;
  width: 100%;
  margin-top: 51px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 31px;
}

.nav img {
  height: 15px;
  width: 15px;
  margin-top: 5px;
}
.nav h2 {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  line-height: 25px;
}
.nav .van-icon-arrow-left {
  margin-top: 4px;
}
.oranization-name {
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.oranization-name img {
  height: 56px;
  width: 49px;
}
.oranization-name h3 {
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-top: 26px;
}
.creation {
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-top: 1px solid rgba(245, 247, 248, 1);
}
.creation p {
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 50px;
}
.creation .address {
  width: 50%;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content {
  width: 100%;
  min-height: 450px;
  background: rgba(255, 255, 255, 1);
  padding: 0 20px;
  overflow: hidden;
  margin-bottom: 10px;
}
.content .business {
  border-top: 1px solid rgba(245, 247, 248, 1);
  overflow: hidden;
  margin-bottom: 15px;
}
.content .business h3 {
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin: 18px 0 15px;
}
.content .business img {
  height: 240px;
  width: 100%;
  display: inline-block;
}
.photo {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding: 0 20px;
  overflow: hidden;
  margin-bottom: 10px;
}
.photo h3 {
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin: 19px 0 15px;
}
.photo .images {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo .images img {
  display: inline-block;
  /* height: 299px; */
  width: 100%;
}
.photo .images img:nth-of-type(2) {
  height: 26px;
  width: 100px;
  margin: 15px 0;
}
</style>