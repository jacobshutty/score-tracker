<template>
  <div id="app">
    <navbar></navbar>
    <div class="content-wrap">

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Versus from "./components/Versus";
import "bulma/css/bulma.css";

export default {
  name: "app",
  components: { Navbar },
  data: function() {
    return {};
  },
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
