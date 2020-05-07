import axios from "axios";
export function appFindDoctorHospitalDetail(hospitalId) {
  return axios.get("/user/appFindDoctorHospitalDetail.json", {
    params: {
      hospitalId,
    },
  });
}
export function appFindHospitalDoctorList(hospitalId, page) {
  return axios.get(`/user/appFindHospitalDoctorList.json`, {
    params: {
      hospitalId,
      page,
    },
  });
}
export function findHospitalDiaryInfo(hospitalId, page) {
  return axios.get(`/app/findHospitalDiaryInfo.json`, {
    params: {
      hospitalId,
      page,
    },
  });
}
export function findDoctorShopInfoDetail(shopId) {
  return axios.get(`/shop/findDoctorShopInfoDetail.json`, {
    params: {
      shopId,
    },
  });
}
export function appFindHospitalLowerShopAll(hospitalId) {
  return axios.get(`/hospita/appFindHospitalLowerShopAll.json`, {
    params: {
      hospitalId,
    },
  });
}
export function appFindHospitalShopGroup(hospitalId) {
  return axios.get(`/hospitalShop/appFindHospitalShopGroup.json`, {
    params: {
      hospitalId,
    },
  });
}
