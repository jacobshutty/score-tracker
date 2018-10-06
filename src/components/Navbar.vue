<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        Game Tracker
      </router-link>
      <a @click="toggleMobile" role="button" class="navbar-burger" :class="{'is-active' : showMobile}" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': showMobile}">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Main</router-link>
        <div class="navbar-divider"></div>
        <router-link to="/leaderboard" class="navbar-item">Leaderboard</router-link>
        <router-link to="/history" class="navbar-item">Game History</router-link>
        <router-link to="/add-player" class="navbar-item">Add Player</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data: function() {
    return {
      showMobile: false,
    };
  },
  methods: {
    toggleMobile() {
      this.showMobile = !this.showMobile;
    },
  },
};
</script>

<style>
</style>
