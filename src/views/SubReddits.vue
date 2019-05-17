<template>
  <section id="subreddits" class="subreddits">
    <aside class="menu">
      <p class="menu-label">Sub Reddit List</p>
      <ul class="menu-list">
        <li v-for="subreddit in subreddits" :key="subreddit.id">
          <!-- eslint-disable-next-line -->
          <router-link :to="{name: 'SubReddit', params: {name: subreddit.name}}">{{subreddit.name}}</router-link>
        </li>
      </ul>
    </aside>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SubReddits',
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions('subreddits', ['init']),
  },
  computed: {
    ...mapGetters('subreddits', ['subreddits']),
  },
};
</script>
