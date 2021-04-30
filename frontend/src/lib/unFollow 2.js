import axiosClient from "./axiosClient";

const unFollow = (storeName) => {
  axiosClient
    .post(`/api/user/token/unfollow/${storeName}`)
    .then((res) => {
      console.log(res);
      // this.datas = res.data;
    })
    .catch((err) => {
      console.log("언팔로우에 실패했습니다.", err);
    });
};
