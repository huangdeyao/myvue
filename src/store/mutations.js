const USER_NAME = "USER_NAME";
const OUT_LOGIN = "OUT_LOGIN";

export const mutations = {
  [USER_NAME] (state, userName) {
    state.user = userName;
    localStorage.setItem("userName", userName);
  },
  [OUT_LOGIN] (state) {
    state.user = "";
    localStorage.removeItem("userName");
  }
};
