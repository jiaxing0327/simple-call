import type { UserInfo, mutationsType } from '../types';

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

const mutations: mutationsType = {
  SET_USERINFO: (state: UserState, item: UserState["userInfo"]) => {
    state.userInfo = item
  }
}

export default {
  state,
  mutations
}