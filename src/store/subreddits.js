import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  subreddits: [],
};

const mutations = {};

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('subreddits', db.collection('subreddits'));
  }),
};

const getters = {
  subreddits(state) {
    return state.subreddits;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
