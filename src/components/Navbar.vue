<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">Game Tracker</router-link>
      <a
        @click="toggleMobile"
        role="button"
        class="navbar-burger"
        :class="{'is-active' : showMobile}"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': showMobile}">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Main</router-link>
        <div class="navbar-divider"></div>
        <router-link to="/leaderboard" class="navbar-item">Leaderboard</router-link>
        <router-link to="/history" class="navbar-item">Game History</router-link>
        <router-link to="/add-player" class="navbar-item">Add Player</router-link>
        <template v-if="!currentUser">
          <router-link to="/sign-up" class="navbar-item">Sign Up</router-link>
          <router-link to="/login" class="navbar-item">Login</router-link>
        </template>
        <a v-else href="#" @click.prevent="logout" class="navbar-item">Log Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {},
  data: function() {
    return {
      showMobile: false
    };
  },
  methods: {
    ...mapActions(["logout"]),
    toggleMobile() {
      this.showMobile = !this.showMobile;
    }
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style>
</style>
