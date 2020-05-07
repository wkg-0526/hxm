<template>
  <div>
    <div class="header">
      <div class="header-img">
        <div class="img">
          <img src="../../assets/angle.png" alt @click="goBack" />
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="375px">
          <van-swipe-item v-for="(item,index) in shopDetail.focusImg" :key="index">
            <img :src="item" alt :style="{height:'375px',width:'100%'}" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="main">
      <div style="background:rgba(255,255,255,1);">
        <div class="prices">
          <div class="prices_one">
            <p>￥{{shopDetail.price}}</p>
            <p>￥{{shopDetail.originalPrice}}</p>
          </div>
          <div class="prices_two">
            <p>满300减20</p>
          </div>
        </div>
        <div class="text">
          <span>{{shopDetail.title}}</span>
        </div>
        <div class="exem">
          <div>运费：包邮</div>
          <div>成交量：{{shopDetail.hospitalSold}}</div>
        </div>
        <div class="border">
          <div></div>
        </div>
        <div class="grade">
          <p>评分</p>
          <van-rate size="12px" v-model="value" readonly />
          <span>{{shopDetail.score}}</span>
        </div>
        <div class="border_br"></div>
      </div>
      <div :style="{background:'#fff'}">
        <div class="content">
          <div class="commodity">
            <div>
              <img src="../../assets/shap1.png" alt />
            </div>
            <p>商品详情</p>
            <div>
              <img src="../../assets/shap2.png" alt />
            </div>
          </div>
          <p class="commodity_p">产品信息</p>
          <div class="product_all">
            <div class="product_one">
              <p>费用信息</p>
            </div>
            <div class="product_two">
              <div class="product_two_div1">
                <p>麻醉费</p>
              </div>
              <div class="product_two_div2">
                <p>￥{{shopDetail.anesthesiaCost}}</p>
              </div>
              <div class="product_two_div3">
                <p>检查费</p>
              </div>
              <div class="product_two_div4">
                <p>￥{{shopDetail.inspectionFee}}</p>
              </div>
            </div>
            <div class="product_two">
              <div class="product_two_div1">
                <p>设计费</p>
              </div>
              <div class="product_two_div2">
                <p>￥{{shopDetail.designFee}}</p>
              </div>
              <div class="product_two_div3">
                <p>血液费</p>
              </div>
              <div class="product_two_div4">
                <p>￥{{shopDetail.bloodCharge}}</p>
              </div>
            </div>
            <div class="product_two">
              <div class="product_two_div1">
                <p>自定义</p>
              </div>
              <div class="product_two_div5">
                <p>￥{{shopDetail.customPrice}}</p>
              </div>
            </div>
            <div>
              <div class="const_one">
                <p>产品信息</p>
              </div>
              <div class="product_two">
                <div class="product_two_div1">
                  <p>产品品牌</p>
                </div>
                <div class="product_two_div2">
                  <p>{{shopDetail.productBrand }}</p>
                </div>
                <div class="product_two_div3">
                  <p>主要材料</p>
                </div>
                <div class="product_two_div4">
                  <p>XXXXXX</p>
                </div>
              </div>
              <div class="product_two">
                <div class="product_two_div1">
                  <p>产品规格</p>
                </div>
                <div class="product_two_div5">
                  <p>{{shopDetail.productSpecification }}</p>
                </div>
              </div>
              <div class="product_two" v-show="!isShow">
                <div class="product_two_div1">
                  <p>产品类型</p>
                </div>
                <div class="product_two_div5">
                  <p>XXXXXXXX</p>
                </div>
              </div>
              <div class="product_two" v-show="!isShow">
                <div class="product_two_div1">
                  <p>产品分类</p>
                </div>
                <div class="product_two_div5">
                  <p>{{shopDetail.classification}}</p>
                </div>
              </div>
              <div class="describe" v-show="!isShow">
                <div class="describe_div_one">
                  <p>项目描述</p>
                </div>
                <div class="describe_div_two">
                  <p v-html="shopDetail.detail"></p>
                </div>
              </div>
              <div class="const_one" v-show="!isShow">
                <p>购买说明</p>
              </div>
              <div class="explain" v-show="!isShow">
                <div class="explain_div_one">
                  <p>说明</p>
                </div>
                <div class="explain_div_two">
                  <p v-for="(item,index) in shopDetail.explain" :key="index">{{item}}</p>
                </div>
              </div>
              <div class="const_one" v-show="!isShow">
                <p>术前须知</p>
              </div>
              <div class="explain line" v-show="!isShow">
                <div class="explain_div_one">
                  <p>术前须知</p>
                </div>
                <div class="explain_div_two">
                  <p>{{shopDetail.notice}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pack">
          <img @click="change" v-show="isShow" src="../../assets/bottom.png" alt />
          <img @click="change" v-show="!isShow" src="../../assets/up.png" alt />
        </div>
      </div>
      <div class="border_br"></div>
      <div class="assess">
        <h3>商品评价（{{shopDetail.evaluateCount}}）</h3>
        <div v-show="isshopPro">
          <div class="detail">
            <img src="../../assets/logo.png" alt="这是图片" />
            <div class="assess-pro">
              <h4>草莓泡绿茶</h4>
              <van-rate size="12px" v-model="value" readonly />
            </div>
            <div style="width:50px"></div>
            <div style="width:50px"></div>
            <div style="width:50px"></div>
            <div style="width:50px"></div>
          </div>
          <p>医生很专业的，整体体验过程挺好的，毕竟是第一次来医美医院，</p>
          <div class="dates">
            <span>1月17日</span>
            <span>5人觉得很赞</span>
            <div style="width:70px"></div>

            <div style="width:70px"></div>
          </div>
          <div class="images">
            <img src="../../assets/logo.png" alt="这是图片" />
            <img src="../../assets/logo.png" alt="这是图片" />
            <img src="../../assets/logo.png" alt="这是图片" />
          </div>
        </div>
        <div v-show="isshopPro">
          <div class="detail">
            <img src="../../assets/logo.png" alt="这是图片" />
            <div class="assess-pro">
              <h4>草莓泡绿茶</h4>
              <van-rate size="12px" v-model="value" readonly />
            </div>
            <div style="width:50px"></div>
            <div style="width:50px"></div>
            <div style="width:50px"></div>
            <div style="width:50px"></div>
          </div>
          <p>医生很专业的，整体体验过程挺好的，毕竟是第一次来医美医院，</p>
          <div class="dates">
            <span>1月17日</span>
            <span>5人觉得很赞</span>
            <div style="width:70px"></div>
            <div style="width:70px"></div>
            <div style="width:70px"></div>
          </div>
          <div class="images">
            <img src="../../assets/logo.png" alt="这是图片" />
            <img src="../../assets/logo.png" alt="这是图片" />
            <img src="../../assets/logo.png" alt="这是图片" />
          </div>
        </div>
        <div class="shows" @click="appDown">
          <p>查看全部评价</p>
        </div>
      </div>
      <div class="bottom">
        <div class="total">
          <p>合计：</p>
          <span>¥{{shopDetail.sumPrice}}</span>
        </div>
        <div class="collect" @click="appDown">
          <van-icon color="#989898" name="star-o" size="16px" />
          <p>收藏</p>
        </div>
        <img @click="appDown" src="../../assets/tijiaodingdan.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { findDoctorShopInfoDetail } from "@/api/request";
export default {
  name: "ShopDetail",
  data() {
    return {
      value: "",
      shopDetail: {},
      isShow: true,
      isshopPro: true
    };
  },
  created() {},
  mounted() {
    this.findDoctorShopInfoDetail();
  },
  methods: {
    findDoctorShopInfoDetail() {
      console.log();

      findDoctorShopInfoDetail(this.$route.query.id).then(res => {
        console.log(res.data, 11);
        if (res.status === 200) {
          this.shopDetail = res.data;
          this.value = res.data.star;
          if (res.data.shopEvaluate.length === 0) {
            this.isshopPro = false;
          } else {
            this.isshopPro = true;
          }
        }
      });
    },
    change() {
      this.isShow = !this.isShow;
    },
    goBack() {
      this.$router.go(-1);
    },
    appDown() {
      var u = navigator.userAgent;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      if (isiOS) {
        window.location.href = "https://apps.apple.com/cn/app/id1481046685";
      } else if (isAndroid) {
        window.location.href =
          "https://hxm-1259538451.cos.ap-shanghai.myqcloud.com/zhenmei_apk_down/zhenmei.apk";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 375px;
}
.img {
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: absolute;
  top: 41px;
  left: 16px;
  z-index: 100;
}
.img img {
  width: 8px;
  height: 16px;
  margin: 7px 11px;
}

.main {
  width: 100%;
  min-height: 198px;
  background: rgba(245, 246, 248, 1);
}
.prices {
  background: rgba(255, 255, 255, 1);
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
}
.prices div {
  display: flex;
}
.prices_one p:nth-child(1) {
  height: 24px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 130, 51, 1);
  margin-top: 10px;
}
.prices_one p:nth-of-type(2) {
  /* width:30px; */
  height: 24px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(152, 152, 152, 1);
  line-height: 24px;
  margin-top: 11px;
  margin-left: 6px;
  text-decoration: line-through;
}
.prices_two {
  width: 74px;
  height: 15px;
  background: rgba(208, 2, 27, 1);
  border-radius: 4px;
  margin-top: 15px;
}
.prices_two p {
  margin-left: 9px;
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
}

.text {
  /* width:336px; */
  height: 75px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin-left: 15px;
  margin-right: 24px;
  margin-top: 11px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
}
.text span {
  line-height: 25px;
}

.exem {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 9px;
  background: rgba(255, 255, 255, 1);
}
.exem div:nth-child(1) {
  width: 77px;
  height: 15px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(104, 104, 104, 1);
  line-height: 15px;
}
.exem div:nth-child(2) {
  width: 80px;
  height: 15px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(104, 104, 104, 1);
  line-height: 15px;
}
.border {
  padding: 0 15px;
}
.border div {
  width: 100%;
  height: 1px;
  background: rgba(245, 247, 248, 1);
  margin-top: 10px;
}
.grade {
  display: flex;
  margin-top: 10px;
  margin-left: 17px;
  background: rgba(255, 255, 255, 1);
  p {
    margin-right: 12px;
  }
  span {
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(104, 104, 104, 1);
    line-height: 12px;
    margin-left: 12px;
  }
}
.icon-star__easyico {
  width: 21px;
  height: 20px;
  background-image: -webkit-linear-gradient(
    180deg,
    rgba(250, 217, 97, 1) 0%,
    rgba(247, 107, 28, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.border_br {
  width: 100%;
  height: 5px;
  background: rgba(245, 246, 248, 1);
  margin-top: 13px;
}
.content {
  background: #fff;
  overflow: hidden;
}

.commodity {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background: #fff;
}

.commodity p {
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  padding: 0 20px;
}
.commodity_p {
  width: 57px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-top: 20px;
  margin-left: 15px;
}
.product_all {
  padding: 0 15px;
}
.product_one {
  margin-top: 15px;
  width: 100%;
  height: 36px;
  background: rgba(245, 246, 248, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.product_one p {
  width: 49px;
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 12px;
  margin-top: 12px;
  margin-left: 10px;
}
.product_two {
  width: 100%;
  height: 35px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
  display: flex;
}
.product_two_div1 {
  width: 24%;
  height: 35px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.product_two_div1 p {
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 12px;
  margin-top: 11px;
  margin-left: 15px;
}
.product_two_div2 {
  width: 26%;
  height: 35px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.product_two_div2 p {
  /* width:37px; */
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 12px;
  margin-top: 11px;
  margin-left: 20px;
}
.product_two_div3 {
  width: 24%;
  height: 35px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.product_two_div3 p {
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 12px;
  margin-top: 11px;
  margin-left: 17px;
}
.product_two_div4 {
  width: 26%;
  height: 35px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.product_two_div4 p {
  margin-top: 12px;
  margin-left: 20px;
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 12px;
}
.product_two_div5 {
  width: 76%;
  height: 35px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.product_two_div5 p {
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 12px;
  margin-top: 12px;
  margin-left: 20px;
}
.const_one {
  width: 100%;
  height: 36px;
  background: rgba(245, 246, 248, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.const_one p {
  width: 49px;
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 12px;
  margin-top: 12px;
  margin-left: 10px;
}
.describe {
  width: 100%;
  min-height: 45px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
  display: flex;
}
.describe_div_one {
  width: 24%;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.describe_div_one p {
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 12px;
  margin-top: 17px;
  margin-left: 15px;
}
.describe_div_two {
  width: 76%;
  min-height: 45px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.describe_div_two p:nth-child(1) {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-top: 9px;
  margin-left: 20px;
  /deep/ p {
    img {
      width: 100%;
    }
  }
}
.describe_div_two p:nth-child(2) {
  width: 118px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  margin-left: 20px;
  line-height: 14px;
}
.explain {
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
  display: flex;
}
.explain.line {
  border-bottom: 1px solid rgba(240, 240, 240, 1);
}
.explain_div_one {
  width: 24%;
  height: 70px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.explain_div_one p {
  height: 12px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 12px;
  margin-top: 29px;
  margin-left: 15px;
}
.explain_div_two {
  width: 76%;
  height: 70px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
}
.explain_div_two p:nth-child(1) {
  width: 118px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  line-height: 14px;
  margin-top: 9px;
  margin-left: 20px;
}
.explain_div_two p:nth-child(2) {
  width: 118px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  margin-left: 20px;
  line-height: 14px;
}
.explain_div_two p:nth-child(3) {
  width: 118px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  margin-left: 20px;
  line-height: 14px;
}
.pack {
  text-align: center;
  margin-top: 15px;
  background: #fff;
}
.assess {
  margin-bottom: 20px;
  width: 100%;
  min-height: 20px;
  background: rgba(255, 255, 255, 1);
  padding: 0 15px;
  overflow: hidden;
  h3 {
    width: 103px;
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(40, 40, 40, 1);
    line-height: 14px;
    margin: 15px 0 11px;
  }
  .detail {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(245, 247, 248, 1);
    padding-top: 15px;
    .img {
      height: 32px;
      width: 32px;
    }
    .assess-pro {
      h3 {
        margin-bottom: 4px;
        width: 82px;
        height: 16px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        line-height: 16px;
      }
    }
  }
  p {
    width: 100%;
    height: 88px;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(104, 104, 104, 1);
    line-height: 21px;
    margin-bottom: 10px;
  }
  .dates {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    span {
      height: 13px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(152, 152, 152, 1);
      line-height: 13px;
    }
  }
  .images {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    img {
      width: 100%;
      height: 106px;
      background: rgba(216, 216, 216, 1);
      border-radius: 4px;
    }
    img:nth-of-type(2) {
      margin: 0 14px;
    }
  }
  .shows {
    height: 45px;
    width: 100%;
    text-align: center;
    border-top: 1px solid rgba(245, 247, 248, 1);
    p {
      height: 15px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(152, 152, 152, 1);
      line-height: 15px;
      line-height: 45px;
    }
  }
}
.bottom {
  width: 100%;
  height: 84px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px -3px 19px 0px rgba(215, 215, 215, 0.35),
    0px -1px 0px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  .total {
    display: flex;
    margin-top: 28px;
    p {
      height: 16px;
      font-size: 16px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(40, 40, 40, 1);
      line-height: 16px;
    }
    span {
      height: 16px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(246, 77, 81, 1);
      line-height: 16px;
    }
  }
  .collect {
    display: flex;
    margin-top: 28px;
    p {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(152, 152, 152, 1);
      line-height: 22px;
      margin-left: 10px;
      margin-top: -2px;
    }
  }
  img {
    height: 50px;
    margin-top: 10px;
  }
}
</style>
