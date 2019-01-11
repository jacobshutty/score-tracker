<template>
  <div id="app">
    <navbar></navbar>
    <div class="content-wrap">
      <message-bar :message="message.text" :type="message.type" v-if="message"></message-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "./components/Navbar";
import Versus from "./components/Versus";
import MessageBar from "./components/MessageBar";
import firebase from "firebase";
import "bulma/css/bulma.css";

export default {
  name: "app",
  components: { Navbar, Versus, MessageBar },
  data: function() {
    return {};
  },
  methods: {
    ...mapActions(["setUser"])
  },
  computed: {
    ...mapState(["message"])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      console.log("user", user);
      if (user) {
        this.setUser(user);
      } else {
        this.setUser(null);
      }
    });
  }
};
</script>

<style>
body {
  margin: 0;
}
.content-wrap {
  margin-top: 50px;
}
</style>
