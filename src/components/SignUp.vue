<template>
  <div id="sign-up">
    <h1>Create Account</h1>
    <input type="text" v-model="username" placeholder="Username">
    <br>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <p v-if="showError">Please fill out all fields</p>
    <button v-on:click="signUp">Sign Up</button>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: "SignUp",
  components: {},
  data: function() {
    return {
      email: "",
      password: "",
      username: "",
      showError: false
    };
  },
  methods: {
    ...mapActions(["setMessage"]),

    signUp: function() {
      if (this.validFields) {
        this.showError = false;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              firebase.auth().currentUser.updateProfile({
                displayName: this.username
              });
              this.setMessage({ text: "Account Created!", type: "success" });
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
      return this.email && this.password && this.username;
    }
  }
};
</script>

<style>
</style>
