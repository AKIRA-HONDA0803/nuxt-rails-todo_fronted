// Stateは「今どんな状態であるか」を保存しておく場所
export const state = () => ({
  currentUser: null
});

// MutationはStateの状態を変えるための方法
export const mutations = {
  setUser(state, payload) {
    state.currentUser = payload
  },
};

// Actionはきっかけをもとに、Mutationを動かすための方法。
export const actions = {
  setUser (context, data) {
    context.commit('setUser', data)
  }
};