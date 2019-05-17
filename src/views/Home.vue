<template>
  <div class="home">
    <h1>Ahoy Sailor o/</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  methods: {
    ...mapActions('auth', ['login']),
  },
};
</script>
<style lang="scss" scoped>
</style>
