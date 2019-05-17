import firebase from '@/firebase';

const state = {
  isLoggedIn: false,
  user: {},
};

const mutations = {
  SET_USER(state, user) {
    if (user) {
      state.user = user;
    } else {
      state.user = {};
    }
  },
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  LOGOUT_USER(state) {
    state.isLoggedIn = false;
  },
};

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit('LOGOUT_USER');
  },
};

const getters = {
  getUser(state) {
    return {
      user: state.user,
      isLoggedIn: state.isLoggedIn,
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
