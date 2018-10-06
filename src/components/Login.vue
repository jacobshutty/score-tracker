<template>
  <div id="login">
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>

    <button v-on:click="signUp">Sign Up</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  components: {},
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("/");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    },
  },
};
</script>

<style>
</style>
