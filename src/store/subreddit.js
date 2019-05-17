import { firestoreAction } from 'vuexfire';
import db from '@/db';

const posts = db.collection('posts');

const state = {
  subreddits: [],
  posts: [],
};

const mutations = {
  CREATE_POST(state, post) {
    state.posts.push(post);
  },
};

const actions = {
  async createPost({ commit }, payload) {
    const result = await posts.doc();

    payload.id = result.id;
    // payload.user_id = '';
    // payload.created_at = '';
    // payload.updated_at = '';

    await posts.doc(payload.id).set(payload);
    commit('CREATE_POST', payload);
  },
  initSubreddit: firestoreAction(({ bindFirestoreRef }, name) => {
    bindFirestoreRef('subreddits', db.collection('subreddits').where('name', '==', name));
  }),
  // eslint-disable-next-line
  initPosts: firestoreAction(({ bindFirestoreRef }, subreddit_id) => {
    bindFirestoreRef('posts', db.collection('posts').whenre('subreddit_id', '==', subreddit_id));
  }),
};

const getters = {
  posts(state) {
    return state.posts;
  },
  currentSubreddit(state) {
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
