const USER_NAME = "USER_NAME";
const OUT_LOGIN = "OUT_LOGIN";

export const mutations = {
  [USER_NAME] (state, datas) {
    state.user = datas.userName;
    state.token = datas.token;
    localStorage.setItem("userName", datas.userName);
  },
  [OUT_LOGIN] (state) {
    state.user = "";
    state.token = "";
    localStorage.removeItem("userName");
  }
};
