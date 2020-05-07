<template>
  <div class="main">
    <div class="header">
      <div class="navBar">
        <img @click="go" src="../../assets/left.png" alt />
        <h1>全部项目</h1>
        <div></div>
      </div>
      <div class="search">
        <div class="search-input">
          <img src="../../assets/search.png" alt />
          <input type="text" placeholder="搜索项目名称" v-model="searchVal" @input="Search" />
        </div>
        <h3 @click="close">取消</h3>
      </div>
    </div>
    <div class="all-case">
      <div class="case-top">
        <p>
          项目总数为
          <span>{{shopClassification.shopCount}}</span>，
        </p>
        <p>
          发起预约数为
          <span>{{shopClassification.aboutCount}}</span>
        </p>
      </div>
      <div class="case">
        <div class="case-car" v-for="(item,index) in shopClassification" :key="index">
          <p>{{item.classification}} {{item.count}}</p>
        </div>
      </div>
    </div>
    <!-- 搜索后 -->
    <div class="products" v-if="list.length>0">
      <div class="single-pro" v-for="item in list" :key="item.shopId">
        <img :src="item.focusImg" alt />
        <h4>{{item.title}}</h4>
        <div class="price">
          <span>¥{{item.price}}</span>
          <span>已售{{item.sold}}件</span>
        </div>
      </div>
    </div>
    <div class="products" v-else>
      <div class="single-pro" v-for="item in shops" :key="item.shopId" @click="detail(item.shopId)">
        <img :src="item.focusImg" alt />
        <h4>{{item.title}}</h4>
        <div class="price">
          <span>¥{{item.price}}</span>
          <span>已售{{item.sold}}件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  appFindHospitalLowerShopAll,
  appFindHospitalShopGroup
} from "@/api/request.js";
export default {
  name: "All",
  data() {
    return {
      shops: [],
      list: [],
      searchVal: "",
      shopClassification: []
    };
  },
  created() {
    this.appFind();
    this.appFindHospitalShopGroup();
  },

  methods: {
    detail(id) {
      this.$router.push({ name: "ShopDetail", query: { id } });
    },
    go() {
      this.$router.go(-1);
    },
    appFind() {
      appFindHospitalLowerShopAll(this.$route.query.hospitalId).then(res => {
        if (res && res.status === 200) {
          this.shops = res.data;
        }
      });
    },
    Search() {
      let search = this.searchVal;
      if (search) {
        return (this.list = this.shops.filter(
          value => value.title.indexOf(this.searchVal) !== -1
        ));
      } else {
        this.list = this.shops;
      }
    },
    close() {
      this.searchVal = "";
      if (this.searchVal === "") {
        this.list = this.shops;
      }
    },
    appFindHospitalShopGroup() {
      appFindHospitalShopGroup(30).then(res => {
        console.log(res);
        if (res && res.status === 200) {
          this.shopClassification = res.data.shopClassification;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  min-height: 500px;
  background: rgba(245, 246, 248, 1);
  width: 100%;
  .header {
    overflow: hidden;
    width: 100%;
    min-height: 84px;
    background: rgba(255, 255, 255, 1);
    padding: 0 17px;
    margin-bottom: 10px;
    .navBar {
      display: flex;
      margin-top: 46px;
      justify-content: space-between;
      margin-bottom: 13px;
      img {
        height: 16px;
      }
      h1 {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(62, 62, 62, 1);
        margin-top: -2px;
      }
    }
    .search {
      display: flex;
      justify-content: space-between;
      height: 40px;
      overflow: hidden;
      background: rgba(255, 255, 255, 1);
      .search-input {
        margin-top: 5px;
        width: 80%;
        height: 30px;
        background: rgba(245, 246, 248, 1);
        border-radius: 15px;
        overflow: hidden;
        img {
          height: 12px;
          // background: rgba(151, 151, 151, 1);
          margin-right: 3px;
          margin-left: 11px;
          margin-top: 9px;
        }
        input {
          background: rgba(245, 246, 248, 1);
          border: 0;
          &::placeholder {
            height: 14px;
            font-size: 12px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(193, 193, 193, 1);
            line-height: 14px;
          }
        }
      }
      h3 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        margin-top: 13px;
      }
    }
  }
  .all-case {
    width: 100%;
    min-height: 30px;
    background: rgba(255, 255, 255, 1);
    padding: 0 15px;
    overflow: hidden;
    .case-top {
      display: flex;
      margin: 15px 0;
      p {
        margin-right: 14px;
        height: 14px;
        font-size: 12px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(136, 136, 136, 1);
        line-height: 14px;
        span {
          height: 14px;
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 212, 51, 1);
          line-height: 14px;
        }
      }
    }
    .case {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .case-car {
        padding: 9px 10px;
        background: rgba(245, 245, 245, 1);
        border-radius: 14px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:hover {
          background: rgba(255, 212, 51, 1);
        }
        p {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(136, 136, 136, 1);
          line-height: 12px;
        }
      }
    }
  }
  .products {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    background: rgba(245, 246, 248, 1);
    width: 100%;
    padding: 0 15px;
    .single-pro {
      width: 48%;
      margin-bottom: 15px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      // height: 250px;
      img {
        width: 100%;
        height: 81%;
        margin-bottom: 10px;
      }
      h4 {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        line-height: 18px;
        margin-bottom: 9px;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-overflow: -o-ellipsis-lastline;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 限制行数 */
        -webkit-box-orient: vertical;
      }
      .price {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        span {
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 130, 51, 1);
          line-height: 12px;
          &:nth-of-type(2) {
            font-size: 11px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(152, 152, 152, 1);
            line-height: 11px;
          }
        }
      }
    }
  }
}
</style>