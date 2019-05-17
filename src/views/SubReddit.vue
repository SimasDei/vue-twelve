<template>
  <section>
    <h1></h1>
    <form @submit.prevent="onCreatePost">
      <b-field label="Title">
        <b-input v-model="post.title" required></b-input>
      </b-field>
      <b-field label="Description">
        <b-input v-model="post.description" required></b-input>
      </b-field>
      <b-field label="URL">
        <b-input v-model="post.URL" type="url"></b-input>
      </b-field>
      <button class="button is-success" type="submit">Add Post</button>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SubReddit',
  data() {
    return {
      post: {
        title: null,
        description: null,
        URL: null,
      },
    };
  },
  mounted() {
    this.initSubreddit(this.$route.params.name);
    console.log(this.subreddit);
    console.log(this.$store.state.subreddit.subreddits[0]);
  },
  comupted: {
    ...mapGetters('subreddit', ['posts', 'subreddit']),
  },
  methods: {
    ...mapActions('subreddit', ['createPost', 'initSubreddit', 'initPosts']),
    onCreatePost() {
      if ((this.post.title && this.post.description) || this.post.URL) {
        this.createPost(this.post);
      }
    },
  },
};
</script>
