<template>
  <div id="login">
    <h1>Log In</h1>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <p v-if="showError">Please fill out all fields</p>
    <button v-on:click="login">Log In</button>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data: function() {
    return {
      email: "",
      password: "",
      showError: false
    };
  },
  methods: {
    ...mapActions(["setMessage"]),
    login: function() {
      if (this.validFields) {
        this.showError = false;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              this.setMessage({ text: "Log in successful", type: "success" });
              this.$router.replace("/");
            },
            err => {
              alert("Oops. " + err.message);
            }
          );
      } else {
        this.showError = true;
      }
    }
  },
  computed: {
    validFields() {
      return this.email && this.password;
    }
  }
};
</script>

<style>
</style>
