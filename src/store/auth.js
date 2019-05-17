import firebase from '@/firebase';
import db from '@/db';

const state = {
  isLoggedIn: false,
  user: {},
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
};

const actions = {
  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users')
      .doc(setUser.id)
      .set(setUser);

    commit('SET_USER', setUser);
    commit('LOGIN_USER');
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
