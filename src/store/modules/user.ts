import type { UserInfo } from '../types';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
}


const state: UserState  = {
  userInfo: {
    userId: '',
    username: ''
  }
}

const mutations = {
  SET_USERINFO: (state: UserState, item: UserState["userInfo"]) => {
    state.userInfo = item
  }
}

export default {
  state,
  mutations
}