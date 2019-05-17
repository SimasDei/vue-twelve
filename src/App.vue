<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Vue Twelve</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="!getUser.isLoggedIn">
              <a class="button is-danger" @click="login">Login with Google</a>
            </p>
            <div class="avatar" v-else>
              <figure class="image is-32x32">
                <img :src="getUser.user.image" alt="user image">
              </figure>
              <caption>{{getUser.user.name}}</caption>

              <p class="control">
                <a class="button is-primary" @click="logout">Logout</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="container main"/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['login', 'logout']),
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
  },
};
</script>


<style lang="scss">
#app {
  .navbar {
    .navbar-end {
      .avatar {
        display: flex;
        align-items: center;

        figure {
          margin-right: 20px;
        }
        caption {
          margin-right: 40px;
        }
      }
    }
  }

  .main {
    margin-top: 2em;
  }
}
</style>
